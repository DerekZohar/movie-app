import { useNavigate } from "react-router-dom";

const sides = {
  menu: [
    { path: "/", name: "Home", icon: "home.svg" },
    { path: "/explore", name: "Explore", icon: "explore.svg" },
    { path: "/search", name: "Search", icon: "search.svg" },
  ],
  social: [
    { path: "/wishlist", name: "Wishlist", icon: "wishlist.svg" },
    { path: "/history", name: "History", icon: "history.svg" },
    { path: "/parties", name: "Parties", icon: "parties.svg" },
    // { path: "/friends", name: "Friends", icon: "friends.svg" },
  ],
  general: [
    { path: "/settings", name: "Settings", icon: "settings.svg" },
    { path: "/login", name: "Login", icon: "login.svg" },
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
  return (
    <div className="w-[250px] h-screen border-r-2 pl-12 py-4 flex flex-col sticky top-0">
      <h2 className="text-2xl font-medium">MoClub</h2>

      <div className="flex-1 flex flex-col justify-between">
        <div className="flex flex-col gap-12 mt-6">
          {Object.entries(sides).map(([key, value]) => (
            <div key={key} className="">
              <h4 className="text-gray-400 text-sm capitalize">{key}</h4>
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
                    <img src={"/icons/sidebar/" + route.icon} alt="" />
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
  );
};
