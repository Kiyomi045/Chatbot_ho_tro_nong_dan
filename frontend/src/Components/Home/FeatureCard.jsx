function FeatureCard() {
  const featureCard = [
    {
      icon: "fa-solid fa-bug",
      title: "Chẩn đoán sâu bệnh",
      describe:
        "Mô tả triệu chứng trên lá, thân hay quả bằng lời nói thường ngày. Mộc gợi ý nguyên nhân có thể và hướng xử lý theo từng bước.",
    },
    {
      icon: "fa-solid fa-bug",
      title: "Chẩn đoán sâu bệnh",
      describe:
        "Mô tả triệu chứng trên lá, thân hay quả bằng lời nói thường ngày. Mộc gợi ý nguyên nhân có thể và hướng xử lý theo từng bước.",
    },
    {
      icon: "fa-solid fa-bug",
      title: "Chẩn đoán sâu bệnh",
      describe:
        "Mô tả triệu chứng trên lá, thân hay quả bằng lời nói thường ngày. Mộc gợi ý nguyên nhân có thể và hướng xử lý theo từng bước.",
    },
    {
      icon: "fa-solid fa-bug",
      title: "Chẩn đoán sâu bệnh",
      describe:
        "Mô tả triệu chứng trên lá, thân hay quả bằng lời nói thường ngày. Mộc gợi ý nguyên nhân có thể và hướng xử lý theo từng bước.",
    },
    {
      icon: "fa-solid fa-bug",
      title: "Chẩn đoán sâu bệnh",
      describe:
        "Mô tả triệu chứng trên lá, thân hay quả bằng lời nói thường ngày. Mộc gợi ý nguyên nhân có thể và hướng xử lý theo từng bước.",
    },
    {
      icon: "fa-solid fa-bug",
      title: "Chẩn đoán sâu bệnh",
      describe:
        "Mô tả triệu chứng trên lá, thân hay quả bằng lời nói thường ngày. Mộc gợi ý nguyên nhân có thể và hướng xử lý theo từng bước.",
    },
  ];
  return (
    <>
      {featureCard.map((item) => {
        return (
          <div className="p-6 bg-green-50 border-2 border-green-200 rounded-[5px] transition-all duration-300 hover:bg-green-100 hover:border-green-400">
            <div className="p-2.5 bg-green-800/20 inline-block rounded-[5px]">
              <i className={`${item.icon} text-2xl`}></i>
            </div>
            <h2 className="text-xl font-semibold mt-3 mb-2">{item.title}</h2>
            <p className="text-[14px]">{item.describe}</p>
          </div>
        );
      })}
    </>
  );
}

export default FeatureCard;
