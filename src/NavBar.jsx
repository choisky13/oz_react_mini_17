import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        OZ무비
      </Link>

      <input type="text" className="nav-search" placeholder="" />

      <div className="nav-buttons">
        <button className="btn-login">로그인</button>
        <button className="btn-signup">회원가입</button>
      </div>
    </nav>
  );
}

export default NavBar;
