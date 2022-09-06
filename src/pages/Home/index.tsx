import { useQuery } from "react-query";
import { SearchInput } from "../../components/Common/SearchInput";
import { SectionSlider } from "../../components/Common/SectionSlider";
import { TypeSelect } from "../../components/Common/TypeSelect";
import { Banner } from "../../components/Home/Banner";
import { WishlistCard } from "../../components/Home/WishlistCard";
import { getHomeFilms } from "../../shared/home";

export default function Home() {
  const { isLoading, isFetched, data } = useQuery("home", () =>
    getHomeFilms("movie")
  );

  return (
    <div className="flex">
      {/* content */}
      <div className="w-[800px] flex flex-col gap-6 p-8">
        <div className="flex justify-between items-center">
          <TypeSelect />
          <div>Light/Night</div>
        </div>
        <Banner
          data={data !== undefined ? data[0].data.results : []}
          type={"movie"}
        />

        <SectionSlider
          title="Popular"
          data={data !== undefined ? data[1].data.results : []}
        />
        <SectionSlider
          title="Top rated"
          data={data !== undefined ? data[2].data.results : []}
        />
        <SectionSlider
          title="Upcoming"
          data={data !== undefined ? data[3].data.results : []}
        />
      </div>
      {/* right section */}
      <div className="w-[30%] h-screen border-l-2  pt-6 px-8 sticky top-0">
        <SearchInput />

        {/* <div className="flex gap-2 flex-wrap mt-4">
          {["Action", "Adventure", "Comedy", "Crime", "Drama", "Fantasy"].map(
            (item) => (
              <span
                key={item}
                className="w-fit text-sm text-gray-600 rounded-full border-2 cursor-pointer
                border-gray-200 px-2 py-1 hover:text-black hover:border-black transition-300"
              >
                {item}
              </span>
            )
          )}
        </div> */}
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold">Wishlist</p>
            <p className="text-sm text-gray-400 cursor-pointer hover:text-black">
              See all
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            {[1, 2, 3, 4, 5].map((item) => (
              <WishlistCard key={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
