from pydantic import BaseModel, EmailStr, Field

#Định nghĩa dữ liệu đâu vào đăng ký
class UserRegister(BaseModel):
    full_name: str = Field(min_length=1, max_length=100)
    email: EmailStr
    password: str = Field(min_length=1, max_length=128)

#Định nghĩa dữ liệu đầu vào đăng nhập
class UseLogin(BaseModel):
    email: EmailStr
    password: str = Field(min_length=1, max_length=128)

#Định nghĩa dữ liệu chat
class ChatRequest(BaseModel):
    message: str = Field(min_length=1),
    conversation_id: int | None = None