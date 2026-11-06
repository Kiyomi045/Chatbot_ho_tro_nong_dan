
from database import Base, engine
import models  # Đăng ký model với Base(Nạp vào)


def init_db():
    #Tạo bảng dựa trên models đăng ký
    Base.metadata.create_all(bind=engine)
    print("Tạo bảng cơ sở dữ liệu thành công!")


if __name__ == "__main__":
    init_db()