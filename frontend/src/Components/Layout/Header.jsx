import { useState } from "react";
import { Link } from "react-router";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-20 h-(--header-height) bg-primary text-white  text-[18px]">
        <div className="h-full container mx-auto flex items-center justify-between">
          <div className=" text-3xl font-semibold ml-6 ">
            <i className=" fa-solid fa-leaf pr-1 "></i>
            MỘC
          </div>
          <div className="hidden lg:block">
            <ul className="h-full flex justify-between items-center gap-2">
              <li className="p-2 rounded-[5px] transition-all duration-300 hover:text-yellow-300  font-medium  ">
                <a href="#features">Tính năng</a>
              </li>
              <li className="p-2 rounded-[5px] transition-all duration-300 hover:text-yellow-300  font-medium ">
                <a href="#cropsection">Cây trồng hỗ trợ</a>
              </li>
              <li className="p-2 rounded-[5px] transition-all duration-300 hover:text-yellow-300  font-medium ">
                <a href="#howitworks">Cách hoạt động</a>
              </li>
              <li className="p-2 rounded-[5px] transition-all duration-300 hover:text-yellow-300  font-medium ">
                <a href="#faqsection">Câu hỏi</a>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <Link
              to="/auth"
              className="p-2 rounded-[5px] transition-all duration-300 hover:text-yellow-300  font-medium "
            >
              Đăng nhập
            </Link>
            <Link
              to="/guest-chat"
              className="inline-block px-5 py-2 rounded-[5px] text-[16px] transition-all duration-300 text-black bg-second hover:bg-[#EAB308]  ml-4 font-medium"
            >
              <i class="fa-regular fa-message pr-2.5"></i>
              Dùng thử miễn phí
            </Link>
          </div>

          <div
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="pr-6 lg:hidden"
          >
            <i
              className={
                isOpen
                  ? "fa-solid fa-xmark text-2xl"
                  : "fa-solid fa-bars text-2xl"
              }
            ></i>
          </div>
        </div>
        {isOpen && (
          <div className="relative block bg-white p-3 text-black z-10">
            <ul className="flex flex-col gap-2">
              <li className="py-1 px-2 rounded-[5px] transition-all hover:bg-green-100/50 ">
                <a href="#features" className="block">
                  Tính năng
                </a>
              </li>
              <li className="py-1 px-2 rounded-[5px] transition-all hover:bg-green-100/50 ">
                <a href="#cropsection" className="block">
                  Cây trồng hỗ trợ
                </a>
              </li>
              <li className="py-1 px-2 rounded-[5px] transition-all hover:bg-green-100/50 ">
                <a href="#howitworks" className="block">
                  Các hoạt động
                </a>
              </li>
              <li className="py-1 px-2 rounded-[5px] transition-all hover:bg-green-100/50 ">
                <a href="#faqsection" className="block">
                  Câu hỏi
                </a>
              </li>
              <li className="py-1 px-2 rounded-[5px] border text-center   ">
                <Link to="/auth" className="block">
                  Đăng nhập
                </Link>
              </li>
              <li className="py-1 px-2 rounded-[5px] bg-second text-center ">
                <Link to="/guest-chat" className="block">
                  Dùng thử miễn phí
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
