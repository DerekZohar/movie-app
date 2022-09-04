import { Outlet } from "react-router-dom";
import { SideBar } from "../Common/SideBar";

export const HomeLayout = () => {
  return (
    <div className="flex ">
      <SideBar />
      {/* header */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};
