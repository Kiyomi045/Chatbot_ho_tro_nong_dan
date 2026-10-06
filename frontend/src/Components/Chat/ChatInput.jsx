function ChatInput() {
  return (
    <div className="border-t text-center border-gray-200 px-4 py-4 md:px-8 dark:border-gray-700">
      <div className="flex justify-between items-center py-2 px-4 rounded-2xl border border-gray-200 bg-light  focus-within:border-gray-300 dark:bg-dark dark:border-gray-700 dark:focus-within:border-gray-600">
        <textarea
          className="moc-scroll max-h-40 h-10 flex-1 resize-none bg-transparent py-2 text-sm leading-relaxed outline-none"
          type="text"
          placeholder="Hỏi về cây trồng, sâu bệnh, phân bón"
        />
        <i class="fa-solid fa-paper-plane"></i>
      </div>
      <p className="text-gray-800/50 mt-2">
        Mộc có thể đưa ra thông tin chưa chính xác. Hãy kiểm tra lại những nội
        dung quan trọng.
      </p>
    </div>
  );
}

export default ChatInput;
