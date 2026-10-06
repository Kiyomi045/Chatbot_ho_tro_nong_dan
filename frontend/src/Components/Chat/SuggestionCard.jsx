function SuggestionCard() {
  const suggestCard = [
    {
      icon: "fa-solid fa-bug",
      title: "Chẩn đoán sâu bệnh",
      describe: "Mô tả triệu chứng trên cây để được gợi ý",
    },
    {
      icon: "fa-solid fa-bug",
      title: "Chẩn đoán sâu bệnh",
      describe: "Mô tả triệu chứng trên cây để được gợi ý",
    },
    {
      icon: "fa-solid fa-bug",
      title: "Chẩn đoán sâu bệnh",
      describe: "Mô tả triệu chứng trên cây để được gợi ý",
    },
    {
      icon: "fa-solid fa-bug",
      title: "Chẩn đoán sâu bệnh",
      describe: "Mô tả triệu chứng trên cây để được gợi ý",
    },
  ];
  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 gap-5">
      {suggestCard.map((item) => {
        return (
          <div className="group p-3 border border-gray-200 rounded-[5px]  flex  items-center transition-all duration-300 hover:bg-green-50 hover:border-green-500  dark:border-gray-700 dark:hover:bg-green-700/30 ">
            <span className="py-2 px-2.5 rounded-xl bg-light mr-3 group-hover:bg-green-200 dark:bg-[#283126] dark:group-hover:bg-green-700/50">
              <i
                className={`${item.icon} text-gray-400 group-hover:text-green-500 dark:group-hover:text-green-200 `}
              ></i>
            </span>
            <div className="leading-tight">
              <h3 className="font-semibold text-[18px]">{item.title}</h3>
              <span className="text-[14px]">{item.describe}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default SuggestionCard;
