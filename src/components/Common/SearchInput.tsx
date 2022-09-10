import React, { useDeferredValue, useState } from "react";
import { getSearchKeywordList } from "../../shared/home";
import { useAppDispatch } from "../../store/hooks";
import { getHistory } from "../../store/store";
import { addNewHistory, removeHistory } from "../../store/user/userSlice";

interface SearchProps {
  // keyword: string;
  setSelectedKeyword: (keyword: string) => void;
}
export const SearchInput = ({ setSelectedKeyword }: SearchProps) => {
  const [keyword, setKeyword] = useState("");
  const deferredSearch = useDeferredValue(keyword);
  const [recommendKeywords, setRecommendKeywords] = useState([]);
  const [shouldModalShow, setShouldModalShow] = useState(false);
  const dispatch = useAppDispatch();
  const history = getHistory();
  const forceUpdate = React.useReducer(() => ({}), {})[1] as () => void;

  console.log(history);

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await getSearchKeywordList(deferredSearch.trim());

      setRecommendKeywords(res as []);
    };

    if (deferredSearch.trim().length > 0) {
      fetchData();
    } else {
      setRecommendKeywords([]);
    }
  }, [deferredSearch]);

  const handleKeywordClicked = (recKeyword: string) => {
    setSelectedKeyword(recKeyword);
    setKeyword(recKeyword);
    setRecommendKeywords([]);

    if (!history.includes(recKeyword)) {
      dispatch(addNewHistory(recKeyword));
    }
  };

  const handleHistoryItemRemoved = (selectedKeyword: string) => {
    dispatch(removeHistory(selectedKeyword));
    forceUpdate();
  };

  return (
    <div className="relative w-full">
      <div
        className="h-[40px] w-full flex justify-center items-center border-2 border-gray-200 
        rounded-3xl px-2 py-1 focus-within:border-blue-400 transition-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4 mr-1 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search for anything"
          className="flex-1 outline-none border-none bg-transparent font-normal text-sm"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onFocus={() => setShouldModalShow(true)}
          onBlur={() => setShouldModalShow(false)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 cursor-pointer"
          onClick={() => setKeyword("")}
          style={{ display: keyword ? "block" : "none" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>

      {(recommendKeywords.length > 0 || history.length > 0) && shouldModalShow && (
        <div className="absolute top-12 left-0 bg-white w-full border py-2 flex flex-col gap-2 z-10 rounded-md">
          {history.map((recKeyword: any) => (
            <div
              className="flex gap-2 items-center w-full px-3 py-2 hover:bg-gray-200"
              key={recKeyword}
            >
              <img
                src="/icons/sidebar/history.svg"
                alt=""
                className="w-4 h-4"
              />
              <p
                className="flex-1"
                onMouseDown={() => handleKeywordClicked(recKeyword)}
              >
                {recKeyword}
              </p>
              <p
                className="text-gray-400 hover:text-red-500 cursor-pointer text-sm"
                onMouseDown={(e) => {
                  handleHistoryItemRemoved(recKeyword);
                  e.preventDefault();
                }}
              >
                Remove
              </p>
            </div>
          ))}

          {recommendKeywords.map((recKeyword: any) => (
            <div
              className="flex gap-2 items-center w-full px-3 py-2 cursor-pointer hover:bg-gray-200"
              key={recKeyword}
            >
              <img src="/icons/sidebar/search.svg" alt="" className="w-4 h-4" />
              <p
                className=""
                onMouseDown={() => handleKeywordClicked(recKeyword)}
              >
                {recKeyword}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
