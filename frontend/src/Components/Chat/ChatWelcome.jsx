function ChatWelcome() {
  return (
    <div className=" flex flex-col items-center mt-15 text-center max-w-2xl">
      <div className=" font-semibold inline-block py-3 px-3.5 bg-primary rounded-xl text-[16px] ">
        <i className=" fa-solid fa-leaf text-white text-2xl "></i>
      </div>
      <h1 className="text-2xl font-semibold my-2.5 md:text-3xl lg:text-5xl">
        Xin chào bạn, mình là Mộc
      </h1>
      <p className="mb-5 max-w-125 ">
        Trợ lý nông nghiệp của bạn. Mình giúp chăm sóc cây trồng, phòng trừ sâu
        bệnh, chọn phân bón và tìm đầu ra cho nông sản. Chọn một gợi ý bên dưới
        để bắt đầu nhé.
      </p>
    </div>
  );
}

export default ChatWelcome;
