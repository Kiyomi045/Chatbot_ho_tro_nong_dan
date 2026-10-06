import { useState } from "react";

function Sidebar({ openSidebar, setOpenSidebar }) {
  const questions = [
    {
      title: "Lá lúa nhà mình bị vàng đốm nâu, xử lý sao?",
      time: "10:23",
    },
    {
      title: "Lá lúa nhà mình bị vàng đốm nâu, xử lý sao?",
      time: "10:23",
    },
    {
      title: "Lá lúa nhà mình bị vàng đốm nâu, xử lý sao?",
      time: "10:23",
    },
    {
      title: "Lá lúa nhà mình bị vàng đốm nâu, xử lý sao?",
      time: "10:23",
    },
    {
      title: "Lá lúa nhà mình bị vàng đốm nâu, xử lý sao?",
      time: "10:23",
    },
    {
      title: "Lá lúa nhà mình bị vàng đốm nâu, xử lý sao?",
      time: "10:23",
    },
    {
      title: "Lá lúa nhà mình bị vàng đốm nâu, xử lý sao?",
      time: "10:23",
    },
    {
      title: "Lá lúa nhà mình bị vàng đốm nâu, xử lý sao?",
      time: "10:23",
    },
  ];
  const [isAction, setIsAction] = useState();
  const [activeChat, setActiveChat] = useState(0);

  return (
    <div className="p-3 w-72 fixed left-0 top-0 bottom-0 z-10 transition-transform duration-300  flex flex-col h-screen bg-light border-r border-r-gray-200 dark:border-gray-700 dark:text-white dark:bg-dark">
      <div className="flex justify-between items-center text-2xl font-semibold ">
        <div>
          <div className="inline-block py-2.5 px-3 mr-3 bg-primary rounded-xl text-[16px] ">
            <i className=" fa-solid fa-leaf text-white "></i>
          </div>
          Mộc
        </div>
        <button
          onClick={() => {
            setOpenSidebar(!openSidebar);
          }}
          className="p-2 lg:hidden"
        >
          <i class="fa-solid fa-x text-xs"></i>
        </button>
      </div>

      <button
        className="p-3 w-full bg-primary/80 hover:bg-primary
       rounded-xl text-white font-bold my-5 dark:text-black dark:bg-green-600 dark:hover:bg-green-500"
      >
        + Cuộc trò chuyện mới
      </button>

      <div className=" p-3 bg-white border border-gray-200 rounded-xl dark:bg-black dark:border-gray-700">
        <span className="mr-1 text-gray-400 dark:border-gray-700">
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
        <input
          className="outline-none"
          type="text"
          placeholder="Tìm hội thoại..."
        />
      </div>
      <div className="flex-1 min-h-0">
        {questions.length > 0 ? (
          <div className="h-full flex flex-col">
            <h1 className="my-3 font-semibold text-gray-700 dark:text-gray-300">
              Hôm nay
            </h1>
            <div className="moc-scroll flex-1 flex flex-col gap-3 -mr-3 pr-3 ">
              {questions.map((item, index) => {
                return (
                  <div className="relative">
                    <div
                      onClick={() => {
                        setActiveChat(index);
                      }}
                      className={`group  w-full flex justify-between items-center  p-2 rounded-xl ${
                        activeChat === index
                          ? "bg-white dark:bg-black"
                          : "bg-none"
                      }`}
                    >
                      <span
                        className={`inline-block py-2 px-2.5 mr-3  rounded-xl text-[16px] ${
                          activeChat === index
                            ? "bg-green-100 dark:bg-green-800"
                            : "bg-gray-300 dark:bg-gray-800/70"
                        } `}
                      >
                        <i
                          class={`fa-regular fa-message ${
                            activeChat === index
                              ? "text-primary dark:text-green-400"
                              : "text-gray-700 dark:text-gray-300"
                          }`}
                        ></i>
                      </span>
                      <div className="min-w-0 flex justify-between items-center gap-2">
                        <span className=" flex-1 truncate">{item.title}</span>
                        <span className="group-hover:hidden">{item.time}</span>
                      </div>
                      <button
                        onClick={() => {
                          setIsAction(isAction == index ? "true" : index);
                        }}
                        className="hidden group-hover:block"
                      >
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                      </button>
                    </div>
                    {isAction === index && (
                      <button
                        className="absolute z-10 
                right-3 top-10 p-3 rounded-xl bg-white border border-gray-200  text-amber-400 hover:bg-amber-100 dark:bg-black dark:border-gray-700  hover:dark:bg-[#f9e9bf] dark:text-amber-500"
                      >
                        <span>
                          <i class="fa-solid fa-trash mr-1 "></i>
                        </span>
                        Xóa
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <p className="pt-8 p-4 text-center text-gray-500 text-[14px]">
            Chưa có hội thoại nào. Hãy đặt câu hỏi đầu tiên nhé!
          </p>
        )}
      </div>
      <div className=" flex justify-between items-center gap-2 pt-2 border-t border-gray-200 dark:border-gray-700">
        <span className="px-3 py-2.5 font-semibold rounded-full bg-amber-100 text-amber-400 dark:text-amber-100 dark:bg-amber-400/40">
          TT
        </span>
        <div className="flex-1 font-medium">Đinh Thanh Tâm</div>
        <button>
          <i class="fa-solid fa-right-from-bracket"></i>
        </button>
      </div>
    </div>
  );
}
export default Sidebar;
