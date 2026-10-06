function Message({ message }) {
  const isUser = message.role === "user";
  return (
    <div>
      {isUser && (
        <div className="flex flex-col justify-end items-end mb-5">
          <div className="p-3 bg-primary inline-block rounded-xl text-white dark:text-black">
            {message.content}
          </div>
          <span className="pt-1">{message.time}</span>
        </div>
      )}
      {!isUser && (
        <div className="flex justify-start items-start gap-3 max-w-xl mb-5 ">
          <span className="inline-block py-2.5 px-3 bg-green-100 rounded-xl text-[16px] text-primary dark:text-green-400 dark:bg-green-800 ">
            <i className="fa-solid fa-seedling "></i>
          </span>
          <div>
            <div className="p-3 bg-light inline-block rounded-xl dark:bg-dark dark:text-white">
              {message.content}
            </div>
            <span className="pt-1">{message.time}</span>
          </div>
        </div>
      )}
    </div>
  );
}
export default Message;
