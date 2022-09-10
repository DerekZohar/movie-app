import React from "react";
import { IMAGE_URL } from "../../shared/constants";
import { useNavigate } from "react-router-dom";

export const Film = (props: any) => {
  const navigate = useNavigate();
  return (
    <div
      className="relative cursor-pointer transition-300 w-full h-[300px]"
      onClick={() => navigate("/movie/" + props.id)}
    >
      <img
        src={
          props.poster_path
            ? IMAGE_URL + "/w342" + props.poster_path
            : "http://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png"
        }
        alt=""
        className="w-full h-[90%] rounded-md object-cover"
      />
      <p className="text-center font-semibold line-clamp-3">
        {props.original_name || props.original_title}
      </p>
      <div className="flex absolute top-[2%] right-[3%] bg-blue-500 px-2 rounded-full text-white items-center gap-1">
        <span className="text-sm">{props.vote_average.toFixed(1)}</span>
        <img src="/icons/star.svg" alt="" className="w-3 h-3 object-contain" />
      </div>
    </div>
  );
};
