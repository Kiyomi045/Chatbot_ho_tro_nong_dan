from pathlib import Path
from openpyxl import load_workbook

BASE_DIR = Path(__file__).resolve().parent
DOCUMENT_DIR = BASE_DIR.parent / "dataset"
EXCEL_PATH = DOCUMENT_DIR / "agriculture_dataset.xlsx"

workbook = load_workbook(EXCEL_PATH, read_only=True, data_only=True)

print("Đường dẫn Excel:", EXCEL_PATH)
print("File có tồn tại:", EXCEL_PATH.exists())

sheet = workbook["qa"]

print("Tên sheet:", sheet.title)
print("Số dòng tối đa:", sheet.max_row)
print("Số cột tối đa:", sheet.max_column)

#Lấy các cột ở dòng đầu
headers = [cell.value for cell in sheet[1]]

qa_data=[]

    
for row in sheet.iter_rows(min_row=2,max_row= 15 ,values_only=True):
    item = dict(zip(headers, row))

    qa_data.append(item)

for row in sheet.iter_rows(
    min_row=1,
    max_row=11,
    values_only=True
):
    print(row)

documents = []

for item in qa_data:
    qa_id = item["qa_id"]
    crop = item["crop"]
    category = item["categories"]
    question = item["question"]
    answer = item["answer"]
    source_id = item["source_id"]

    content = f"""
    Cây trồng: {crop}
    Chủ đề: {category}
    Câu hỏi: {question}
    Câu trả lời: {answer}
    """.strip()

    # Lưu nội dung và thông tin đi kèm
    documents.append({
        "id": qa_id,
        "content": content,
        "metadata": {
            "crop": crop,
            "category": category,
            "source_id": source_id
        }
    })
    # print("Tổng số nội dung đã chuẩn bị:", len(documents))


# Kiểm tra nội dung đầu tiên
if documents:
    print("\nNội dung mẫu:")
    print(documents[0]["content"])
    print("\nMetadata:")
    print(documents[0]["metadata"])

workbook.close()



# print("Tổng số câu hỏi:", len(qa_data))

# for item in qa_data[:3]:
#     print("--------------------")
#     print("Mã:", item["qa_id"])
#     print("Câu hỏi:", item["question"])
#     print("Câu trả lời:", item["answer"])
#     print("Nguồn:", item["source_id"])


