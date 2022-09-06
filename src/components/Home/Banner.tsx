import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGenre } from "../../hooks/useGenre";
import { IMAGE_URL } from "../../shared/constants";
import { GenreTag } from "../Common/GenreTag";

interface BannerProps {
  type: "movie" | "tv";
  data: any[];
}
export const Banner = (props: BannerProps) => {
  return (
    <div className="">
      <Swiper
        modules={[Navigation, Autoplay]}
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        slidesPerView={1}
        className="rounded-lg  h-[400px]"
      >
        {props.data.map((film: any, index: number) => (
          <SwiperSlide key={index}>
            <BannerItem {...film} type={props.type} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
const BannerItem = (props: any) => {
  const genres = useGenre(props.type, props.genre_ids);

  // console.log(genres1);
  // const renderGenres = (num: number) => {
  //   return (
  //     genres !== undefined &&
  //     genres[num].data.genres.map((genre: any) => {
  //       if (props.genre_ids.includes(genre.id)) {
  //         return (
  //           <span
  //             key={genre.id}
  //             className="text-sm text-gray-400 border border-gray-400 rounded-full px-2 py-1 mr-1"
  //           >
  //             {genre.name}
  //           </span>
  //         );
  //       }
  //     })
  //   );
  // };
  // let genresTags = <div></div>;
  // if (genres !== undefined) {
  //   if (props.type === "movie") {
  //     genresTags = renderGenres(1);
  //   } else {
  //     genresTags = renderGenres(0);
  //   }
  // }

  return (
    <div className="relative cursor-pointer">
      <img
        src={IMAGE_URL + "/w1280" + props.backdrop_path}
        alt=""
        className="w-full h-full object-cover tw-black-backdrop"
      />
      <div className="absolute top-0 left-0 w-full h-full rounded-lg pointer-events-none tw-black-backdrop group-hover:bg-[#00000026] transition duration-7000"></div>
      <div className="flex absolute top-[5%] right-[3%] bg-blue-500 px-3 py-1 rounded-full text-white items-center gap-1">
        <span>{props.vote_average.toFixed(1)}</span>
        <img src="/icons/star.svg" alt="" className="w-4 h-4" />
      </div>
      {/* Content */}
      <div className="flex flex-col gap-4 w-[80%] absolute -top-3 left-0 px-20 py-10">
        <h1 className="text-4xl font-semibold text-blue-500">
          {props.original_name || props.original_title}
        </h1>

        <div>
          <h3 className="text-2xl font-semibold text-white">
            {props.name || props.title}
          </h3>
          {/* <p className="text-white">2 sections - 46 episodes</p> */}
          <p className="text-sm text-gray-400">
            Release: {props.first_air_date || props.release_date}
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {genres.map((genre: any) => (
            <GenreTag key={genre.id} name={genre.name} />
          ))}
        </div>
        <p className="text-gray-400 line-clamp-4">{props.overview}</p>
      </div>
    </div>
  );
};
