from pathlib import Path
import chromadb

BASE_DIR = Path(__file__).resolve().parent
CHROMA_DB = BASE_DIR / "chroma_db"

# Khởi tạo ChromaDB với chế độ lưu trữ lâu dài
client = chromadb.PersistentClient(
    path = str(CHROMA_DB)
)

collection = client.get_or_create_collection(
    name="agriculture_qa",
    metadata={
        "hnsw:space": "cosine"
    }
)

print("Khởi tạo ChromaDB thành công")
print("Tên collection", collection.name)
print("Số lượng dữ liệu:",collection.count())