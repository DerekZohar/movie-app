import React from "react";

const AvatarGroup = () => {
  return (
    <div className="flex -gap-2">
      {[0, 1, 2, 3].map((item, index) => (
        <img
          alt=""
          className={
            "w-6 h-6 rounded-full bg-gray-200 " +
            (index > 0 ? "-translate-x-" + 2 * index : "")
          }
          src="https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-thumb.jpg"
        />
      ))}
    </div>
  );
};
export const PartyCard = () => {
  return (
    <div className="h-[100px] w-[175px] border rounded-md flex flex-col p-2">
      <div className="flex justify-between">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/142/751/831/landscape-anime-digital-art-fantasy-art-wallpaper-thumb.jpg"
          alt=""
          className="w-8 h-8 rounded-md"
        />
        <AvatarGroup />
      </div>

      <p className="text-md font-semibold">Chilling</p>
      <p className="text-xs text-gray-400">We are on a break!</p>
    </div>
  );
};
