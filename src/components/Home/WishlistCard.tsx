import React from "react";

export const WishlistCard = () => {
  return (
    <div className="flex gap-4">
      <img
        src="https://c4.wallpaperflare.com/wallpaper/142/751/831/landscape-anime-digital-art-fantasy-art-wallpaper-thumb.jpg"
        alt=""
        className="w-[70px] h-[100px] rounded-lg"
      />
      <div>
        <p className="text-md font-semibold">The Sandman</p>
        <p className="text-sm text-gray-400">2021</p>
        <p className="text-sm text-gray-400">1h 55m</p>
      </div>
    </div>
  );
};
