import { FC } from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Film } from "../../components/Common/Film";
import useSwiperRef from "../../hooks/useSwiperRef";
import { PartyCard } from "./PartyCard";

interface Props {
  title: string;
  data: any[];
  type?: "movie" | "tv" | "anime" | "party";
}

export const SectionSlider: FC<Props> = (props) => {
  const [nextEl, nextElRef] = useSwiperRef<HTMLButtonElement>();
  const [prevEl, prevElRef] = useSwiperRef<HTMLButtonElement>();

  return (
    <>
      <div className="flex justify-between">
        <p className="font-semibold text-xl capitalize">{props.title}</p>
        <div className="flex gap-2">
          <button ref={prevElRef}>
            <img
              src="/icons/left.svg"
              alt=""
              className="bg-white shadow-md rounded-md"
            />
          </button>
          <button ref={nextElRef}>
            <img
              src="/icons/right.svg"
              alt=""
              className="bg-white shadow-md rounded-md"
            />
          </button>
        </div>
      </div>
      <div className="flex w-full">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl,
            nextEl,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          spaceBetween={50}
          className="rounded-lg tw-section-slider"
          slideNextClass="sw-button-next"
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((film, index) => (
            <SwiperSlide key={index} className="w-[175px]">
              <Film />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
