function Hero() {
  return (
    <div className="relative mt-(--header-height) h-125 bg-[url('/assets/anh_bia.png')] bg-cover bg-center">
      <div className="absolute inset-0 z-0 bg-linear-to-t from-[#222]/85 to-[rgba(34_34_34/_0)/15"></div>

      <div className="relative z-1 max-w-4xl mx-auto flex flex-col justify-center items-center text-center min-h-125 text-white ">
        <h1 className="text-5xl font-bold block  mx-3 md:text-6xl">
          Hỏi Mộc một câu,
          <span className="text-second"> ruộng vườn thêm yên tâm</span>
        </h1>
        <p className="text-[14px] max-w-2xl mx-3 mt-5 md:text-[18px]">
          Mộc Nông giúp bạn chăm sóc cây trồng, chẩn đoán sâu bệnh, tính phân
          bón và tìm đầu ra cho nông sản. Chỉ cần kể tình hình ruộng vườn bằng
          lời nói thường ngày, Mộc sẽ hướng dẫn từng bước cụ thể.
        </p>
      </div>
    </div>
  );
}
export default Hero;
