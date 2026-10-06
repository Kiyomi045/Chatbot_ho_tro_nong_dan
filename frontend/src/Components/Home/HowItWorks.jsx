function HowItWorks() {
  const howIsWork = [
    {
      key: "01",
      icon: "fa-regular fa-message",
      title: "Kể cho Mộc nghe",
      describe:
        "Bạn mô tả tình hình ruộng vườn bằng lời nói thường ngày, không cần dùng từ ngữ chuyên môn.",
    },
    {
      key: "01",
      icon: "fa-regular fa-message",
      title: "Kể cho Mộc nghe",
      describe:
        "Bạn mô tả tình hình ruộng vườn bằng lời nói thường ngày, không cần dùng từ ngữ chuyên môn.",
    },
    {
      key: "01",
      icon: "fa-regular fa-message",
      title: "Kể cho Mộc nghe",
      describe:
        "Bạn mô tả tình hình ruộng vườn bằng lời nói thường ngày, không cần dùng từ ngữ chuyên môn.",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="mx-3 mb-5 max-w-3xl">
        <h3 className="uppercase text-primary font-semibold">
          Mộc giúp được gì
        </h3>
        <h1 className="text-3xl font-semibold my-3 md:text-4xl">
          Mọi việc thường ngày trên đồng ruộng, gói gọn trong một cuộc trò
          chuyện
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-6 mx-3 md:grid-cols-2 lg:grid-cols-3">
        {howIsWork.map((item, i) => {
          return (
            <div className="p-6 bg-green-50 border-2 border-green-200 rounded-[5px] transition-all duration-300 hover:bg-green-100 hover:border-green-400">
              <div className="flex justify-between items-center">
                <div className="p-2.5 bg-yellow-300/30 text-yellow-800 inline-block rounded-[5px]">
                  <i className={`${item.icon} text-2xl`}></i>
                </div>
                <h1 className="text-5xl font-black text-green-800/20">
                  {item.key}
                </h1>
              </div>
              <h2 className="text-xl font-semibold mt-3 mb-2">{item.title}</h2>
              <p className="text-[14px]">{item.describe}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default HowItWorks;
