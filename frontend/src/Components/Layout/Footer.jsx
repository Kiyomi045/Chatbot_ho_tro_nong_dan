import { Link } from "react-router";

function Footer() {
  return (
    <footer className="bg-primary/15 pt-20 pb-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr_1fr] mx-5">
          <div className="flex-1">
            <div className=" text-3xl font-semibold mb-3">
              <i className=" fa-solid fa-leaf pr-1 "></i>
              MỘC
            </div>
            <p>
              Trợ lý nông nghiệp tiếng Việt giúp bà con chăm sóc cây trồng,
              phòng trừ sâu bệnh và tìm đầu ra cho nông sản mỗi ngày.
            </p>
          </div>
          <div className="flex flex-col gap-y-3">
            <h2 className="font-semibold text-xl">Khám phá</h2>
            <a href="#features">Tính năng</a>
            <a href="#cropsection">Cây trồng hỗ trợ</a>
            <a href="#howitworks">Cách hoạt động</a>
            <a href="#faqsection">Câu hỏi thường gặp</a>
          </div>
          <div className="flex flex-col gap-y-3">
            <h2 className="font-semibold text-xl">Tài khoản</h2>
            <Link to="/auth">Đăng nhập</Link>
            <a href="">Dùng thử miễn phí</a>
          </div>
        </div>
        <div className="h-[1px] bg-gray-300 my-5"></div>
        <div className="text-center opacity-50">
          Mộc _ Trợ lý nông nghiệp cho bà con Việt Nam
        </div>
      </div>
    </footer>
  );
}
export default Footer;
