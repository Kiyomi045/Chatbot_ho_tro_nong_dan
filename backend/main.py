from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import HTTPBearer
from sqlalchemy import select
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from datetime import datetime, timezone

from database import get_db
from models import User, Conversation, Message
from schemas import UserRegister, UseLogin, ChatRequest
from security import hash_password, verify_password,creat_access_token, get_current_user, get_optional_current_user


app = FastAPI()

# Khai báo Bearer Token tùy chọn
option_bearer = HTTPBearer(auto_error=False)

@app.get("/")
def home():
    return{
        "message":"Backend chatbot nông nghiệp"
    }

#API đăng ký tài khoản
@app.post("/auth/register", status_code=status.HTTP_201_CREATED)
def register(data: UserRegister, db: Session = Depends(get_db)):
    email = str(data.email)

    existing_user = db.scalar(
        select(User).where(User.email == email)
    )

    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Email đã được sử dụng"
        )
    
    user = User(
        full_name = data.full_name.strip(),
        email = email,
        hashed_password = hash_password(data.password),
    )

    try:
        db.add(user)
        db.commit()
        db.refresh(user)
    except IntegrityError:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail = "Email đã dược sử dụng"
        )
    
    return{
        "message":"Đăng ký thành công",
        "user":{
               "id": user.id,
               "full_name":user.full_name,
               "email":user.email
        }

    }

#API đăng nhập tài khoản
@app.post("/auth/login")
def login(data: UseLogin, db: Session = Depends(get_db)):
    email = str(data.email)

    user = db.scalar(
        select(User).where(User.email == email)
    )

    access_token = creat_access_token(user.id)

    if user is None or not verify_password(
        data.password,
        user.hashed_password,
    ):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Email hoặc mật khẩu không chính xác",
        )
    return{
        "acsess_token": access_token,
        "token_type": "bearer", 
        "message":"Đăng nhập thành công",
        "user":{
            "id":user.id,
            "full_name": user.full_name,
            "email": user.email        
        }
    }

#API xác thực token và trả về thông tin tài khoản đang đăng nhập
@app.get("/auth/me")
def read_current_user(current_user: User = Depends(get_current_user)):
    return{
        "id": current_user.id,
        "full_name": current_user.full_name,
        "email": current_user.email
    }

#Tạo cuộc trò chuyện mới cho người dùng
@app.post("/conversation", status_code=status.HTTP_201_CREATED)
def create_conversation(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    conversation = Conversation(
        user_id = current_user.id,
        title="Cuộc trò chuyện mới",
    )

    db.add(conversation)
    db.commit()
    db.refresh(conversation)

    return{
        "id":conversation.id,
        "user_id":conversation.user_id,
        "title":conversation.title,
        "create_at": conversation.created_at
    }

#Lấy danh sách trò chuyện của người dùng
@app.get("/conversations")
def get_conversation(
    db:Session = Depends(get_db), current_user: User = Depends(get_current_user)
):
    conversations= db.scalars(
        select(Conversation).where(Conversation.user_id==current_user.id).order_by(Conversation.updated_at.desc())
    ).all()
    
    result = []

    for conversation in conversations:
        result.append({
            "id": conversation.id,
            "user_id": conversation.user_id,
            "title": conversation.title,
            "create_at": conversation.created_at
        })

    return result

#Lấy danh sách tin nhắn trong cuộc trò chuyện
@app.get("/conversations/{conversation_id}/messages")
def get_messages(
    conversation_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    conversation = db.scalar(
        select(Conversation).where(
            Conversation.id == conversation_id,
            Conversation.user_id == current_user.id
            )
    )

    if conversation is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Không tìm thấy cuộc trò chuyện"
        )

    messages = db.scalars(
        select(Message).where(
            Message.conversation_id == conversation_id).order_by(Message.created_at.asc())
    ).all()

    result = []

    for message in messages:
        result.append({
            "id": message.id,
            "role": message.role,
            "content": message.content,
            "created_at": message.created_at
        })

    return result


#Kiểm tra xác thực người dùng tùy chọn
@app.get("/test-optional-auth",
         dependencies=[Depends(option_bearer)])
def test_optional_auth(
    current_user: User | None = Depends(get_optional_current_user)
):
    if current_user is None:
        return {
            "message": "Bạn đang sử dụng với tư cách khách hàng",
            "user": None,
        }
    
    return {
        "message": "Đã đăng nhập",
        "user": {
            "id": current_user.id,
            "full_name": current_user.full_name,
            "email": current_user.email
        }
    }

#Xử lý tin nhắn 
@app.post("/chat",
          dependencies=[Depends(option_bearer)])
def chat(
    data: ChatRequest,
    db: Session = Depends(get_db),
    current_user : User | None = Depends(get_optional_current_user) 
):
    message_content = data.message.strip()

    if not message_content:
        raise HTTPException(
            status_code= status.HTTP_400_BAD_REQUEST,
            detail="Nội dung trống"
        )
    
    if current_user is None:
        return{
            "conversation_id": None,
            "user_message": message_content,
            "assistant_message": "Đây là câu trả lời thử nghiệm"
        }
    
    if data.conversation_id is not None:
        conversation = db.scalar(
            select(Conversation).where(Conversation.user_id == current_user.id,
            Conversation.id == data.conversation_id)
        )

        if conversation is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Không tìm thấy cuộc trò chuyện"
            )
    else:
        conversation = Conversation(
            user_id = current_user.id,
            title= message_content[:255],
        )
        db.add(conversation)
        db.flush()

    user_message = Message(
        conversation_id = conversation.id,
        role="user", 
        content=message_content

    )
    
    db.add(user_message)

    assistant_content="Đây là câu trả lời thử nghiệm"

    assistant_message=Message(
        conversation_id = conversation.id,
        role="assistant",
        content = assistant_content
    )

    db.add(assistant_message)

    #Cập nhật thời gian hoạt động
    conversation.updated_at = datetime.now(timezone.utc)

    db.commit()
    db.refresh(user_message)
    db.refresh(assistant_message)

    return{
        "conversation_id": conversation.id,
        "user_message": {
            "id": user_message.id,
            "role": user_message.role,
            "content": user_message.content,
            "created_at": user_message.created_at
        },
        "assistant_message": {
            "id": assistant_message.id,
            "role": assistant_message.role,
            "content": assistant_message.content,
            "created_at": assistant_message.created_at
        }
    }

#Xóa cuộc trò chuyện(thành viên)
@app.post("/coversations/{conversation_id}")
def delete_conversation(
    conversation_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)        
):
    conversation = db.scalar(
        select(Conversation).where(
            Conversation.id == conversation_id, Conversation.user_id == current_user.id
            )
    )
    
    if conversation is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Không tìm thấy cuộc trò chuyện"
        )
    
    db.delete(conversation)
    db.commit()

    return {
        "message": "Xóa cuộc trò chuyện thành công"
    }

