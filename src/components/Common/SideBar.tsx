import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { MdExplore, MdHistory, MdLogin } from "react-icons/md";
import { BsSearch, BsBookmarkHeartFill } from "react-icons/bs";
import { GiPartyPopper } from "react-icons/gi";
import { AiFillSetting } from "react-icons/ai";

const size = 22;
const sides = {
  menu: [
    { path: "/", name: "Home", icon: <FaHome size={size} /> },
    {
      path: "/explore",
      name: "Explore",
      icon: <MdExplore size={size} />,
    },
    {
      path: "/search",
      name: "Search",
      icon: <BsSearch size={size} />,
    },
  ],
  social: [
    {
      path: "/wishlist",
      name: "Wishlist",
      icon: <BsBookmarkHeartFill size={size} />,
    },
    {
      path: "/history",
      name: "History",
      icon: <MdHistory size={size} />,
    },
    {
      path: "/parties",
      name: "Parties",
      icon: <GiPartyPopper size={size} />,
    },
    // { path: "/friends", name: "Friends",icon: <FaHome  size={size} /> },
  ],
  general: [
    {
      path: "/settings",
      name: "Settings",
      icon: <AiFillSetting size={size} />,
    },
    {
      path: "/login",
      name: "Login",
      icon: <MdLogin size={size} />,
    },
  ],
};

const Avatar = () => {
  return (
    <div className="h-[40px] flex gap-2 items-center">
      <img
        src="https://i.imgur.com/zLvEGAu.jpg"
        alt="avatar"
        className="rounded-full w-10 h-10 object-cover"
      />
      <div>
        <h1 className="text-sm font-semibold">Hi, Anonymous</h1>
        <p className="text-xs text-gray-400">Continue watching</p>
      </div>
    </div>
  );
};

export const SideBar = () => {
  let navigate = useNavigate();
  const [sbOpen, setSbOpen] = useState(true);

  return (
    <div
      className={
        "h-screen sticky top-0 transition-all .3s ease-in-out dark:bg-dark dark:text-white " +
        (sbOpen ? "w-[250px]" : "w-[100px]")
      }
    >
      <div className="h-full w-full border-r-2 pl-12 py-4 flex flex-col ">
        {/* <img
          src="/icons/left.svg"
          alt=""
          className="w-4 h-4 border rounded-full absolute top-4 -right-2 cursor-pointer bg-white"
          onClick={() => setSbOpen((val) => !val)}
        /> */}
        <h2 className="text-2xl font-medium">MoClub</h2>

        <div className="flex-1 flex flex-col justify-between">
          <div className="flex flex-col gap-12 mt-6">
            {Object.entries(sides).map(([key, value]) => (
              <div key={key} className="">
                <h4 className="text-gray-400 dark:text-gray-300 text-sm capitalize">
                  {key}
                </h4>
                <div className="flex flex-col justify-center gap-6 mt-4 text-gray-400">
                  {value.map((route) => (
                    <div
                      key={route.name}
                      className={
                        "flex gap-6 cursor-pointer hover:text-blue-500 hover:border-blue-500 transition-300" +
                        (route.path === window.location.pathname
                          ? " text-blue-500 border-r-4 border-blue-500"
                          : "")
                      }
                      onClick={() => navigate(route.path)}
                    >
                      {route.icon}
                      <p className="font-semibold">{route.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Avatar />
        </div>
      </div>
    </div>
  );
};
