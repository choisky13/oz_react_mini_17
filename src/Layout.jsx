import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function Layout() {
  return (
    <div>
      <NavBar />

      <div className="layout-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
