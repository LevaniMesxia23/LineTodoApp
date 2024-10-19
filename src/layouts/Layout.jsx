import { Outlet } from "react-router-dom";
import Header from "../components//Header";
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
