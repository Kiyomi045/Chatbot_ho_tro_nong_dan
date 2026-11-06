from database import test_connection

try:
    result = test_connection()
    print("Kết nối PostgreSQL thành công!")
    print("Kết quả kiểm tra:", result)
except Exception as error:
    print("Kết nối PostgreSQL thất bại.")
    print("Chi tiết lỗi:", error)

