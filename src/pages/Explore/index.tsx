import React, { useState } from "react";
import { Film } from "../../components/Common/Film";
import { tabs } from "../../shared/constants";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { SelectFilter } from "../../components/Common/SelectFilter";
import { TypeSelect } from "../../components/Common/TypeSelect";

export const ExplorePage = () => {
  const [filterClicked, setFilterClicked] = useState(false);
  const [searchParams] = useSearchParams();

  return (
    <div className="p-8 flex">
      <div className="">
        <div className="flex justify-between items-center">
          <TypeSelect />
          <div className="flex gap-4 items-center">
            <p>Sort</p>
            {/* <div
              className="flex items-center gap-2 border px-2 py-1 rounded-md cursor-pointer"
              onClick={() => setFilterClicked((val) => !val)}
            >
              <img src="/icons/filter.svg" alt="" className="w-4 h-4" />
              <p>Filters</p>
            </div> */}
          </div>
        </div>
        {/* filter content
        <div
          className={
            "" +
            (filterClicked
              ? "h-20 flex gap-4 transition-all 0.3s ease-linear "
              : "hidden h-0 ")
          }
        >
          <SelectFilter />
          <SelectFilter />
          <SelectFilter />
        </div> */}
        <div className="grid grid-cols-5 gap-4 mt-4">
          {Array.from({ length: 20 }).map((_, index) => (
            <Film key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
