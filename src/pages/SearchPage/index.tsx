import React, { useEffect, useRef, useState } from "react";
import { Film } from "../../components/Common/Film";
import { SearchInput } from "../../components/Common/SearchInput";
import { getSearchByKeyword, getSearchKeywordList } from "../../shared/home";

let isInitial = true;
export const SearchPage = () => {
  const [selectedKeyword, setSelectedKeyword] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getSearchByKeyword(selectedKeyword.trim());

      setResults(res as []);
    };

    if (selectedKeyword.trim().length > 0) {
      fetchData();
    }
  }, [selectedKeyword]);

  return (
    <div className="p-8 ">
      <div className="w-[90%] mx-auto">
        <div className="w-[50%] mx-auto flex justify-center flex-col items-center">
          <p className="text-xl font-semibold text-center mb-4">
            Search for movie, anime, author, cast, etc
          </p>
          <SearchInput
            // keyword={selectedKeyword}
            setSelectedKeyword={setSelectedKeyword}
          />

          {results.length === 0 && (
            <img
              src="/icons/stickman-watching-tv.svg"
              alt=""
              className="w-[400px] h-[400px]"
            />
          )}
        </div>

        <div className="grid grid-cols-5 gap-8 mt-8">
          {results.length > 0 &&
            results.map((film: any) => <Film key={film.id} {...film} />)}
        </div>
      </div>
      <div className="h-8"></div>
    </div>
  );
};
