function AuthTabs({ isLogin, setIsLogin }) {
  return (
    <div className="relative my-5 flex h-14 bg-green-100 rounded-full p-1">
      <div
        className={`absolute top-1 h-12 bg-white w-1/2 rounded-full transition duration-400 ${
          isLogin ? "left-1" : "right-1"
        } `}
      ></div>
      <button
        onClick={() => {
          setIsLogin(true);
        }}
        className={`relative z-10 w-1/2 font-semibold ${
          isLogin ? "text-green-800" : "text-gray-600 hover:text-black"
        }`}
      >
        Đăng nhập
      </button>
      <button
        onClick={() => {
          setIsLogin(false);
        }}
        className={`relative z-10 w-1/2 font-semibold ${
          !isLogin ? "text-green-800" : "text-gray-600 hover:text-black"
        }`}
      >
        Đăng kí
      </button>
    </div>
  );
}

export default AuthTabs;
