function GuestSidebar({ openSidebar, setOpenSidebar }) {
  return (
    <div className="p-3 w-72 fixed z-10  left-0 top-0 bottom-0 transition-transform duration-300 h-screen bg-light border-r border-r-gray-200 dark:border-gray-700 dark:bg-dark dark:text-white">
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
      <div className="bg-second/20 border border-second/30 p-4 rounded-xl  leading-normal dark:bg-yellow-800/40 dark:border-yellow-800/60">
        <h3 className="text-yellow-800 font-semibold text-[18px] dark:text-yellow-100">
          Bản dùng thử
        </h3>
        <p className="text-xs text-yellow-600 dark:text-yellow-300">
          Bạn đang hỏi Mộc mà không cần đăng nhập. Hội thoại sẽ không được lưu
          lại. Đăng nhập để lưu lịch sử và xem lại bất cứ lúc nào.
        </p>
        <button className="p-3 w-full font-bold mt-4 text-yellow-800 bg-second hover:bg-yellow-500  rounded-xl dark:text-yellow-100 dark:bg-yellow-600 dark:hover:bg-yellow-500">
          Tạo tài khoản miễn phí
        </button>
        <button className="p-3 w-full font-bold mt-4 text-yellow-800 border border-second hover:bg-yellow-100  rounded-xl dark:text-yellow-100 dark:hover:bg-second/20 dark:border-yellow-800/60">
          Đăng nhập
        </button>
      </div>
    </div>
  );
}
export default GuestSidebar;
