import os
from dotenv import load_dotenv 

import jwt
from datetime import datetime, timedelta, timezone
from pwdlib import PasswordHash
from fastapi import Depends,Request, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlalchemy import select
from sqlalchemy.orm import Session

from database import get_db
from models import User


load_dotenv()

JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")
JWT_ALGORITHM = os.getenv("JWT_ALGORITHM")
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES"))

#Chọn cấu hình băm mật khẩu khuyến nghị
password_hash = PasswordHash.recommended()

#Băm mật khẩu trước khi lưu vào CSDL
def hash_password(password: str):
    return password_hash.hash(password)

#Kiểm tra mật khẩu có khớp với mật khẩu băm
def verify_password(password:str, hashed_password: str):
    return password_hash.verify(password, hashed_password)

#Tạo JWT khi đăng nhập thành công
def creat_access_token(user_id):
    expire = datetime.now(timezone.utc) + timedelta(
        minutes = ACCESS_TOKEN_EXPIRE_MINUTES
    )

    payload = {
    "sub":str(user_id),
    "exp": expire
    }

    token = jwt.encode(
        payload,
        JWT_SECRET_KEY,
        algorithm=JWT_ALGORITHM
    )

    return token

#Khai báo cơ chế nhận Bearer token
bearer_scheme = HTTPBearer(auto_error=False)


#Xác thực token và lấy thông tin người dùng
def get_current_user(
        credentials: HTTPAuthorizationCredentials = Depends(bearer_scheme),
        db: Session = Depends(get_db)
):
    #Lấy chuỗi JWT từ thông tin xác thực Bearer
    token = credentials.credentials

    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Không thể xác thực thông tin đăng nhập",
    )

    try:
        payload=jwt.decode(
            token,
            JWT_SECRET_KEY,
            algorithms=[JWT_ALGORITHM]
        )

        user_id = payload.get("sub")

        if user_id is None:
            raise credentials_exception
        
        user_id = int(user_id)

    except(jwt.InvalidTokenError, ValueError):
        raise credentials_exception
    
    user = db.scalar(
        select(User).where(User.id == user_id)
    )

    if user is None:
        raise credentials_exception
    
    return user


#Xác thực người dùng tùy chọn(API cho cả khách và thành viên)
def get_optional_current_user(
        request: Request,
        db: Session = Depends(get_db)
):
    """
    Lấy thông tin người dùng nếu có JWT hợp lệ.

    Không có token: trả về None (khách).
    Có token hợp lệ: trả về User.
    Có token không hợp lệ: trả lỗi 401.
    """
    #Đọc thông tin Authprization từ HTTP Bearer
    authorization = request.headers.get("Authorization")

    if authorization is None:
        return None

    #Kiểm tra định dạng Bearer token
    scheme, separator, token = authorization.partition(" ")

    if not separator or scheme.lower() != "bearer" or not token.strip():
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Thông tin xác thực không hợp lệ",
        )
    
    try:
        payload = jwt.decode(
            token,
            JWT_SECRET_KEY,
            algorithms=[JWT_ALGORITHM]
        )

        user_id = payload.get("sub")

        if user_id is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Token không hợp lệ"
            )
        
        user_id = int(user_id)

    except (jwt.InvalidTokenError, ValueError):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token không hợp lệ hoặc đã hết hạn"
        )
    
    #Tìm người dùng trong CSDL
    user = db.scalar(
        select(User).where(User.id == user_id)
    )

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Tài khoản không tồn tại"
        )
    
    return user