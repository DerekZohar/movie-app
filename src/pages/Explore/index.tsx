import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "react-query";
import { Film } from "../../components/Common/Film";
import { TypeSelect } from "../../components/Common/TypeSelect";
import { getExploreFilms } from "../../shared/home";

export const ExplorePage = () => {
  // const [filterClicked, setFilterClicked] = useState(false);
  // const [searchParams] = useSearchParams();
  // const [currentPage, setCurrentPage] = useState(1);

  // const { isLoading, data } = useQuery("explore", () =>
  //   getExploreFilms("movie", currentPage)
  // );

  // const films = data != undefined ? data?.data.results : [];
  const {
    data: movies,
    error: errorMovies,
    fetchNextPage: fetchNextPageMovie,
    hasNextPage: hasNextPageMovie,
  } = useInfiniteQuery(
    ["explore-result-movie"],
    ({ pageParam = 1 }) => getExploreFilms("movie", pageParam),
    {
      getNextPageParam: (lastPage: any) => lastPage.data.page + 1,
    }
  );

  return (
    <div className="p-8 flex  w-full">
      <div className=" w-full">
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
        {/* <div className="grid grid-cols-5 gap-6 mt-4 w-full"> */}
        <InfiniteScroll
          dataLength={movies?.pages.length || 0}
          next={() => fetchNextPageMovie()}
          hasMore={Boolean(hasNextPageMovie)}
          loader={<div>Loading...</div>}
          endMessage={<></>}
        >
          <div className="grid grid-cols-5 gap-6 mt-4 w-full">
            {movies?.pages
              .reduce(
                (acc: any, page: any) => [...acc, ...page.data.results],
                []
              )
              .map((film: any) => (
                <Film key={film.id} {...film} />
              ))}
          </div>
        </InfiniteScroll>
        {/* </div> */}
      </div>
    </div>
  );
};
