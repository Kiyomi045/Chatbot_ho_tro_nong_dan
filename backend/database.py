
import os

from dotenv import load_dotenv
from sqlalchemy import URL, create_engine, text
from sqlalchemy.orm import DeclarativeBase,sessionmaker

load_dotenv()

#Lấy chuỗi kết nối PostgreSQL
database_url = URL.create(
    drivername="postgresql+psycopg",
    username=os.getenv("DB_USER"),
    password=os.getenv("DB_PASSWORD"),
    host=os.getenv("DB_HOST", "localhost"),
    port=int(os.getenv("DB_PORT", "5432")),
    database=os.getenv("DB_NAME", "farmer_chatbot"),
)

#Tạo engine để SQLAlchemy qly các kết nối CSDL
engine = create_engine(database_url)

#Khởi tạo Session 
SessionLocal = sessionmaker(
    bind=engine,
    autoflush=False,
    autocommit=False,
)

#Khai báo lớp cơ sở cho SQLAlchemy model
class Base(DeclarativeBase):
    pass


def test_connection():
    with engine.connect() as connection:
        result = connection.execute(text("SELECT 1"))
        return result.scalar_one()


def get_db():
    """Cung cấp một Session cho mỗi request và đóng sau khi xử lý"""

    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()