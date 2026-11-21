import os
from dotenv import load_dotenv
from google import genai
from google.genai import errors
import time, random

from init_vector_db import collection


#Khởi tạo Gemini client
load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    raise ValueError("Không tìm thấy GEMINI_API_KEY")

client = genai.Client(api_key=api_key)

MAX_DISTANCE = 0.4

#Chuyển câu hỏi người dùng thành vector embedding
def embed_query(question):
    embed_response = client.models.embed_content(
    model="gemini-embedding-001",
    contents=question,
    config={
        "task_type":"RETRIEVAL_QUERY"
    }
    )
    query_embedding = embed_response.embeddings[0].values

    return query_embedding


#Truy xuất dữ liệu từ DB
def retrieve_context(query_embedding):
    results = collection.query(
        query_embeddings=[query_embedding],
        n_results=3, 
        include=["documents", "metadatas", "distances"]
    )

    retrieved_documents = results["documents"][0]
    distances = results["distances"][0]

    if not retrieved_documents:
        print("Mộc chưa tìm được thông tin phù hợp trong dữ liệu")
        return None

    best_distance = distances[0]

    if best_distance > MAX_DISTANCE:
        print("\n Mộc chưa tìm thấy thông tin phù hợp để trả lời câu hỏi của bạn")
        return None


    context = "\n\n".join(
        retrieved_documents
    )
    print("\nCONTEXT: ", context)  

    return context

def generate_answer(question, context):
        
    #Dựng prompt cho LLM
    prompt = f"""
    Bạn là Mộc, chatbot AI hỗ trợ nông dân.
    Hãy trả lời câu hỏi của người dùng dựa trên thông tin được cung cấp bên dưới.
    Quy tắc:
    1. Ưu tiên sử dụng thông tin trong Context
    2. Không tự bịa thông tin hoặc số liệu kĩ thuật
    3. Nếu Context không có thông tin để trả lời, hãy nói rõ rằng chưa tìm thấy thông tin phù hợp
    4. Trả lời bằng tiếng Việt, dễ hiểu và ngắn gọn
    5. Có thể trình bày câu trả lời theo từng bước nếu cần

    CONTEXT:
    {context}

    CÂU HỎI:
    {question}

    CÂU TRẢ LỜI:
    """

    primary_model = "gemini-3.5-flash"
    fallback_model = "gemini-3.5-flash-lite"

    try:
        # Thử sinh câu trả lời bằng mô hình chính
        generate_response = client.models.generate_content(
            model=primary_model,
            contents=prompt
        )

        print(f"Sử dụng mô hình: {primary_model}")
        return generate_response.text

    except errors.APIError as e:

        # Chỉ chuyển mô hình khi gặp lỗi 503
        if e.code != 503:
            raise

        print("Mô hình chính đang quá tải, chuyển sang mô hình dự phòng...")

        try:
            generate_response = client.models.generate_content(
                model=fallback_model,
                contents=prompt
            )

            print(f"Sử dụng mô hình dự phòng: {fallback_model}")
            return generate_response.text

        except errors.APIError as fallback_error:
            print("Cả hai mô hình đều không thể xử lý yêu cầu.")
            print("Lỗi:", fallback_error)
            return None

def main():

    question = input("Nhập câu hỏi: ").strip()

    if not question:
        print("Vui lòng nhập câu hỏi!")
        return

    # Bước 1: Tạo embedding
    query_embedding = embed_query(question)

    # Bước 2: Truy xuất Context
    context = retrieve_context(query_embedding)

    if context is None:
        print("\nMộc chưa tìm thấy thông tin đủ phù hợp để trả lời.")
        return

    # Bước 3: Sinh câu trả lời
    answer = generate_answer(question, context)

    if answer is None:
        print("Mộc hiện chưa thể tạo câu trả lời. Vui lòng thử lại sau.")
        return
    else:
        print("\nCÂU TRẢ LỜI CỦA MỘC:")
        print(answer)

# Chỉ chạy main khi thực thi trực tiếp file này
if __name__ == "__main__":
    main()
