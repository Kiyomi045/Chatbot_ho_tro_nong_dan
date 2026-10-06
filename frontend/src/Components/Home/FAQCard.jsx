import { useState } from "react";

function FAQCard() {
  const [isOpen, setIsOpen] = useState();
  const cropCard = [
    {
      question: "Dùng Mộc có mất phí không?",
      answer:
        "Hiện tại Mộc hoàn toàn miễn phí cho bà con. Bạn chỉ cần tạo tài khoản bằng email để lịch sử hỏi đáp được lưu lại và xem lại khi cần.",
    },
    {
      question: "Dùng Mộc có mất phí không?",
      answer:
        "Hiện tại Mộc hoàn toàn miễn phí cho bà con. Bạn chỉ cần tạo tài khoản bằng email để lịch sử hỏi đáp được lưu lại và xem lại khi cần.",
    },
    {
      question: "Dùng Mộc có mất phí không?",
      answer:
        "Hiện tại Mộc hoàn toàn miễn phí cho bà con. Bạn chỉ cần tạo tài khoản bằng email để lịch sử hỏi đáp được lưu lại và xem lại khi cần.",
    },
    {
      question: "Dùng Mộc có mất phí không?",
      answer:
        "Hiện tại Mộc hoàn toàn miễn phí cho bà con. Bạn chỉ cần tạo tài khoản bằng email để lịch sử hỏi đáp được lưu lại và xem lại khi cần.",
    },
    {
      question: "Dùng Mộc có mất phí không?",
      answer:
        "Hiện tại Mộc hoàn toàn miễn phí cho bà con. Bạn chỉ cần tạo tài khoản bằng email để lịch sử hỏi đáp được lưu lại và xem lại khi cần.",
    },
  ];
  return (
    <div className="  flex flex-col gap-2.5 ">
      {cropCard.map((item, index) => {
        return (
          <div
            key={index}
            className="p-3  bg-green-50 border-2 rounded-[5px] border-green-200"
          >
            <div className="font-semibold flex justify-between items-center">
              <h3>{item.question}</h3>
              <div
                onClick={() => {
                  setIsOpen(isOpen === index ? null : index);
                }}
                className="w-6 h-6 text-center rounded-full bg-primary/65"
              >
                <i
                  className={`${
                    isOpen === index ? "fa-solid fa-minus" : "fa-solid fa-plus"
                  } `}
                ></i>
              </div>
            </div>
            {isOpen === index && <p className="pt-3 ">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
export default FAQCard;
