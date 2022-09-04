import React from "react";
import { IMAGE_URL } from "../../shared/constants";

export const Film = (props: any) => {
  return (
    <div className="relative cursor-pointer transition-300 w-full h-[300px]">
      <img
        src={IMAGE_URL + "/w342" + props.poster_path}
        alt=""
        className="w-full h-[90%] rounded-md object-cover"
      />
      <p className="text-center font-semibold">
        {props.original_name || props.original_title}
      </p>
      <div className="flex absolute top-[2%] right-[3%] bg-blue-500 px-2 rounded-full text-white items-center gap-1">
        <span className="text-sm">{props.vote_average.toFixed(1)}</span>
        <img src="/icons/star.svg" alt="" className="w-3 h-3 object-contain" />
      </div>
    </div>
  );
};
