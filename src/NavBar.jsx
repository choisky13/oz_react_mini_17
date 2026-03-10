import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <Link
          to="/"
          className="text-[#1d1d1f] text-xl font-bold no-underline tracking-tight"
        >
          OZ무비
        </Link>

        <input
          type="text"
          placeholder="검색"
          className="w-[400px] h-10 rounded-full bg-[#f5f5f7] px-5 text-sm text-[#1d1d1f] outline-none transition-colors"
        />

        <div className="flex gap-2 items-center">
          <button className="text-[#1d1d1f] border border-[#1d1d1f] bg-white px-5 py-2 rounded-full text-sm font-semibold cursor-pointer">
            로그인
          </button>
          <button className="bg-[#1d1d1f] text-white border-none px-5 py-2 rounded-full text-sm font-semibold cursor-pointer">
            회원가입
          </button>
        </div>
      </div>
    </nav>
  );
}
