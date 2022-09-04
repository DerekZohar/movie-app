import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const BannerItem = () => {
  const genres = ["Action", "Adventure", "Comedy"];
  return (
    <div className="relative cursor-pointer">
      <img
        src="https://image.tmdb.org/t/p/w1280/56v2KjBlU4XaOv9rVYEQypROD7P.jpg"
        alt=""
        className="w-full h-full object-cover tw-black-backdrop"
      />
      <div className="absolute top-0 left-0 w-full h-full rounded-lg pointer-events-none tw-black-backdrop group-hover:bg-[#00000026] transition duration-7000"></div>
      <div className="flex absolute top-[5%] right-[3%] bg-blue-500 px-3 py-1 rounded-full text-white items-center gap-1">
        <span>4.5</span>
        <img src="/icons/star.svg" alt="" className="w-4 h-4" />
      </div>
      {/* Content */}
      <div className="flex flex-col gap-4 w-[60%] absolute -top-3 left-0 px-20 py-10">
        <h1 className="text-4xl font-semibold text-blue-500">
          House of the Dragon
        </h1>

        <div>
          <h3 className="text-2xl font-semibold text-white">Gia tộc rồng</h3>
          <p className="text-white">2 sections - 46 episodes</p>
          <p className="text-sm text-gray-400 text-white">
            Release: 01-09-2020
          </p>
        </div>
        <div className="flex gap-2">
          {genres.map((item) => (
            <span
              key={item}
              className="w-fit text-sm text-gray-400 rounded-full border-2 border-gray-400 px-2 py-1"
            >
              {item}
            </span>
          ))}
        </div>
        <p className="text-gray-400 line-clamp-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis amet
          exercitationem non, animi eos porro qui ipsa adipisci modi quo quam
          minus minima, nesciunt laboriosam esse omnis, soluta quasi! Dolore?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum tempora
          nobis eligendi omnis, reprehenderit excepturi dolor facere maxime
          laudantium magnam, inventore tempore molestiae deserunt quibusdam
          numquam? Fuga provident perferendis ex?
        </p>
      </div>
    </div>
  );
};

export const Banner = () => {
  const films = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
        onSlideChange={() => console.log("slide change")}
        className="rounded-lg  h-[400px]"
      >
        {films.map((film, index) => (
          <SwiperSlide key={index}>
            <BannerItem />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
