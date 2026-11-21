import os
from dotenv import load_dotenv
from google import genai

from read_qa_dataset import documents
from init_vector_db import collection

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    raise ValueError("Không tìm thấy GEMINI_API_KEY")

client = genai.Client(api_key=api_key)

ids = []
contents = []
metadatas = []

for item in documents[:10]:
    ids.append(str(item["id"]))
    contents.append(item["content"])
    metadatas.append(item["metadata"])

#tạo embedding
response = client.models.embed_content(
    model="gemini-embedding-001",
    contents=contents,
    config={
         "task_type": "RETRIEVAL_DOCUMENT"
    }
)

embeddings = [
    embedding.values
    for embedding in response.embeddings
]

collection.upsert(
    ids = ids,
    embeddings=embeddings,
    documents=contents,
    metadatas=metadatas
)

print("Đã lưu")
print("Số lượng bản ghi: ", collection.count())