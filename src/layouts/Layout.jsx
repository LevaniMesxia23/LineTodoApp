import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
function Layout() {
  return (
    <>
      <Header />
      <div className=" w-full min-h-screen">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
