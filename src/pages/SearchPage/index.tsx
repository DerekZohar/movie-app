import React, { useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Film } from "../../components/Common/Film";
import { SearchInput } from "../../components/Common/SearchInput";
import { getSearchByKeyword, getSearchKeywordList } from "../../shared/home";

export const SearchPage = () => {
  const [selectedKeyword, setSelectedKeyword] = useState("");
  const [results, setResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") || "";

  useEffect(() => {
    const fetchData = async () => {
      const res = await getSearchByKeyword(query.trim());

      setResults(res as []);
    };

    if (query.trim().length > 0) {
      fetchData();
    }
  }, [query]);

  return (
    <div className="p-8 dark:bg-dark  h-full">
      <div className="w-[90%] mx-auto">
        <div className="w-[50%] mx-auto flex justify-center flex-col items-center">
          <p className="text-xl font-semibold text-center mb-4">
            Search for movie, anime, author, cast, etc
          </p>
          <SearchInput />

          {results.length === 0 && (
            <img
              // src="/icons/stickman-watching-tv.svg"
              src="watch.png"
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
