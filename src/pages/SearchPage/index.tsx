import React, { useEffect, useRef, useState } from "react";
import { Film } from "../../components/Common/Film";
import { SearchInput } from "../../components/Common/SearchInput";
import { getSearchKeyword } from "../../shared/home";

let isInitial = true;
export const SearchPage = () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getSearchKeyword(keyword.trim());

      setResults(res as []);
    };

    fetchData();
  }, [keyword]);

  return (
    <div className="p-8 ">
      <div className="w-[90%] mx-auto">
        <div className="w-[50%] mx-auto flex justify-center flex-col items-center">
          <p className="text-xl font-semibold text-center mb-4">
            Search for movie, anime, author, cast, etc
          </p>
          <SearchInput keyword={keyword} setKeyword={setKeyword} />

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
    </div>
  );
};
