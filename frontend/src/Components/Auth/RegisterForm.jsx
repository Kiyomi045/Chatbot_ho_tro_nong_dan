function RegisterForm({ setIsLogin }) {
  return (
    <form className=" flex gap-2 flex-col">
      <label className="text-[18px] font-medium" htmlFor="name">
        Tên của bạn
      </label>
      <input
        className="mb-2 p-2 border rounded-xl border-gray-500 transition-colors focus:border-green-500 focus:outline-none focus:shadow-[0_0_0_2px_rgba(34,197,94,0.15)]"
        type="text"
        id="name"
        placeholder="Ví dụ: Phạm Thế Hùng"
      />

      <label className="text-[18px] font-medium" htmlFor="email">
        Email
      </label>
      <input
        className="mb-2 p-2 border rounded-xl border-gray-500 transition-colors focus:border-green-500 focus:outline-none focus:shadow-[0_0_0_2px_rgba(34,197,94,0.15)]"
        type="email"
        id="email"
        placeholder="tenban@gmail.com"
      />

      <label className="text-[18px] font-medium" htmlFor="password">
        Mật khẩu
      </label>
      <input
        className="mb-2 p-2 border rounded-xl border-gray-500 transition-colors focus:border-green-500 focus:outline-none focus:shadow-[0_0_0_2px_rgba(34,197,94,0.15)]"
        type="password"
        id="password"
        placeholder="Ít nhất 6 kí tự"
      />

      <button className="rounded-xl p-2 text-white font-semibold bg-primary/80 hover:bg-primary">
        Tạo tài khoản
      </button>
      <div className="text-center">
        Đã có tài khoản?
        <a
          className="pl-2 text-primary underline"
          onClick={() => {
            setIsLogin(true);
          }}
        >
          Đăng nhập
        </a>
      </div>
    </form>
  );
}

export default RegisterForm;
