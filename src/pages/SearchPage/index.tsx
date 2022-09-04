import React from "react";
import { SearchInput } from "../../components/Common/SearchInput";

export const SearchPage = () => {
  return (
    <div className="p-8 ">
      <div className="flex justify-center">
        <div className="w-[50%]">
          <p className="text-xl font-semibold text-center mb-4">
            Search for movie, anime, author, cast, etc
          </p>
          <SearchInput />
        </div>
      </div>
    </div>
  );
};
