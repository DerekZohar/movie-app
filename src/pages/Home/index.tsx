import { NavLink } from "react-router-dom";
import { SearchInput } from "../../components/Common/SearchInput";
import { SectionSlider } from "../../components/Common/SectionSlider";
import { Banner } from "../../components/Home/Banner";
import { WishlistCard } from "../../components/Home/WishlistCard";

const tabs = [
  {
    title: "Movie",
    path: "/movie",
  },
  {
    title: "Tv Show",
    path: "/tv",
  },
  {
    title: "Anime",
    path: "/anime",
  },
];

export default function Home() {
  return (
    <div className="flex">
      {/* content */}
      <div className="w-[800px] flex flex-col gap-6 p-8">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-black" : "text-gray-400"
                }
                to={tab.path}
              >
                {tab.title}
              </NavLink>
            ))}
          </div>
          <div>Light/Night</div>
        </div>

        <Banner />

        <SectionSlider title="Popular" data={[]} />
        <SectionSlider title="Top rated" data={[]} />
        <SectionSlider title="Trending" data={[]} />
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
              See all{" "}
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            {[1, 2, 3, 4, 5].map((item) => (
              <WishlistCard />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
