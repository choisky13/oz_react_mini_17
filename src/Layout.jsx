import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function Layout() {
  return (
    <div className="bg-[#f5f5f7] min-h-screen flex flex-col font-sans">
      <NavBar />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}
