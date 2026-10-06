import useDarkMode from "~/hooks/useDarkMode";

import ChatHeader from "~/Components/Chat/ChatHeader";
import Sidebar from "~/Components/Chat/Sidebar";
import ChatWelcome from "~/Components/Chat/ChatWelcome";
import SuggestionCard from "~/Components/Chat/SuggestionCard";
import { useState } from "react";
import ChatInput from "~/Components/Chat/ChatInput";
import MessageList from "~/Components/Chat/MessagList";

function ChatPage() {
  const messages = [
    {
      id: 1,
      role: "user",
      content: "Chẩn đoán sâu bệnh",
      time: "11:11",
    },
    {
      id: 2,
      role: "bot",
      content:
        "Mình đã ghi nhận tình hình của bạn. Để chẩn đoán chính xác hơn, bạn cho mình biết thêm 3 thông tin nhé:\n\n1. Cây trồng đang ở giai đoạn nào (mạ, đẻ nhánh, làm đòng...)?\n2. Triệu chứng xuất hiện bao lâu rồi và lan nhanh hay chậm?\n3. Vùng đất nhà bạn thuộc loại nào, mấy ngày gần đây có mưa không?\n\nCó đủ 3 điểm này mình sẽ gợi ý hướng xử lý ngay.",
      time: "11:11",
    },
    {
      id: 3,
      role: "user",
      content: "Chẩn đoán sâu bệnh",
      time: "11:11",
    },
    {
      id: 4,
      role: "bot",
      content:
        "Mình đã ghi nhận tình hình của bạn. Để chẩn đoán chính xác hơn, bạn cho mình biết thêm 3 thông tin nhé:\n\n1. Cây trồng đang ở giai đoạn nào (mạ, đẻ nhánh, làm đòng...)?\n2. Triệu chứng xuất hiện bao lâu rồi và lan nhanh hay chậm?\n3. Vùng đất nhà bạn thuộc loại nào, mấy ngày gần đây có mưa không?\n\nCó đủ 3 điểm này mình sẽ gợi ý hướng xử lý ngay.",
      time: "11:11",
    },
    {
      id: 5,
      role: "user",
      content: "Chẩn đoán sâu bệnh",
      time: "11:11",
    },
    {
      id: 6,
      role: "bot",
      content:
        "Mình đã ghi nhận tình hình của bạn. Để chẩn đoán chính xác hơn, bạn cho mình biết thêm 3 thông tin nhé:\n\n1. Cây trồng đang ở giai đoạn nào (mạ, đẻ nhánh, làm đòng...)?\n2. Triệu chứng xuất hiện bao lâu rồi và lan nhanh hay chậm?\n3. Vùng đất nhà bạn thuộc loại nào, mấy ngày gần đây có mưa không?\n\nCó đủ 3 điểm này mình sẽ gợi ý hướng xử lý ngay.",
      time: "11:11",
    },
    {
      id: 7,
      role: "user",
      content: "Chẩn đoán sâu bệnh",
      time: "11:11",
    },
    {
      id: 8,
      role: "bot",
      content:
        "Mình đã ghi nhận tình hình của bạn. Để chẩn đoán chính xác hơn, bạn cho mình biết thêm 3 thông tin nhé:\n\n1. Cây trồng đang ở giai đoạn nào (mạ, đẻ nhánh, làm đòng...)?\n2. Triệu chứng xuất hiện bao lâu rồi và lan nhanh hay chậm?\n3. Vùng đất nhà bạn thuộc loại nào, mấy ngày gần đây có mưa không?\n\nCó đủ 3 điểm này mình sẽ gợi ý hướng xử lý ngay.",
      time: "11:11",
    },
    {
      id: 9,
      role: "user",
      content: "Chẩn đoán sâu bệnh",
      time: "11:11",
    },
    {
      id: 10,
      role: "bot",
      content:
        "Mình đã ghi nhận tình hình của bạn. Để chẩn đoán chính xác hơn, bạn cho mình biết thêm 3 thông tin nhé:\n\n1. Cây trồng đang ở giai đoạn nào (mạ, đẻ nhánh, làm đòng...)?\n2. Triệu chứng xuất hiện bao lâu rồi và lan nhanh hay chậm?\n3. Vùng đất nhà bạn thuộc loại nào, mấy ngày gần đây có mưa không?\n\nCó đủ 3 điểm này mình sẽ gợi ý hướng xử lý ngay.",
      time: "11:11",
    },
  ];
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="lg:grid lg:grid-cols-[287px_1fr] h-auto  dark:bg-black dark:text-white">
      <div className={`${openSidebar ? "block" : "hidden"} lg:block`}>
        <div
          class="fixed inset-0 z-1 bg-gray-800/20 lg:hidden"
          aria-hidden="true"
        ></div>
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      </div>
      <div className="h-screen flex flex-col ">
        <ChatHeader
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <div className="mx-3 min-h-0 flex-1 ">
          <div className="moc-scroll h-full">
            <div className="max-w-4xl mx-auto ">
              {messages.length ? (
                <MessageList messages={messages} />
              ) : (
                <div className="flex flex-col items-center">
                  <ChatWelcome />
                  <SuggestionCard />
                </div>
              )}
            </div>
          </div>
        </div>
        <ChatInput />
      </div>
    </div>
  );
}

export default ChatPage;
