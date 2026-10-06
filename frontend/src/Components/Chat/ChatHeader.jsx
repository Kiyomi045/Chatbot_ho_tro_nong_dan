function ChatHeader({ openSidebar, setOpenSidebar, darkMode, toggleDarkMode }) {
  return (
    <div className="p-3 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
      <button
        onClick={() => {
          setOpenSidebar(!openSidebar);
        }}
        className="lg:hidden"
      >
        <i className="fa-solid fa-bars "></i>
      </button>
      <div className="  text-xl font-medium">
        <div className="inline-block py-2.5 px-3 mr-3 bg-green-100 rounded-xl text-[16px] text-primary dark:text-green-400 dark:bg-green-800 ">
          <i class="fa-solid fa-seedling "></i>
        </div>
        Trò chuyện cùng Mộc
      </div>
      <div className="relative h-7 w-20 flex text-center items-center  p-1 rounded-xl bg-gray-50 border border-gray-200 hover:bg-green-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:border-gray-700 ">
        <div
          className={`absolute h-6 w-1/2 bg-second/80 rounded-full transition-all duration-300 dark:bg-primary ${
            darkMode ? "right-1 " : "left-1"
          }`}
        ></div>
        <button
          onClick={toggleDarkMode}
          className={`relative z-10 w-1/2 ${
            !darkMode ? "text-black" : "text-gray-400 "
          }`}
        >
          <i className="fa-regular fa-sun "></i>
        </button>
        <button
          onClick={toggleDarkMode}
          className={`relative  z-10 w-1/2  ${
            darkMode ? "text-white" : "text-gray-400 "
          }`}
        >
          <i className="fa-regular fa-moon "></i>
        </button>
      </div>
    </div>
  );
}

export default ChatHeader;
