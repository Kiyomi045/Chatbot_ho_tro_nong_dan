import { Link } from "react-router";
import { useState } from "react";
import AuthTabs from "~/Components/Auth/AuthTabs";
import LoginForm from "~/Components/Auth/LoginForm";
import RegisterForm from "~/Components/Auth/RegisterForm";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="py-6 mx-3 flex justify-center items-center ">
      <div className="w-[500px] min-h-80">
        <Link to="/" className="text-[18px] hover:text-green-800">
          <i className="fa-solid fa-left-long mr-2"></i>
          Về trang chủ
        </Link>
        {isLogin ? (
          <div className="my-5">
            <h1 className="font-semibold text-4xl">Đăng nhập để tiếp tục</h1>
            <p className=" text-gray-500 mt-2">
              Lịch sử hỏi đáp của bạn đã được lưu lại và chờ bạn quay về.
            </p>
          </div>
        ) : (
          <div className="my-5">
            <h1 className="font-semibold text-4xl">Tạo tài khoản miễn phí</h1>
            <p className=" text-gray-500 mt-2">
              Chỉ mất một phút để bắt đầu trò chuyện cùng Mộc.
            </p>
          </div>
        )}
        <AuthTabs isLogin={isLogin} setIsLogin={setIsLogin} />
        {isLogin ? (
          <LoginForm setIsLogin={setIsLogin} />
        ) : (
          <RegisterForm setIsLogin={setIsLogin} />
        )}
      </div>
    </div>
  );
}

export default AuthPage;
