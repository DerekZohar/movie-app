import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { SectionSlider } from "../../components/Common/SectionSlider";
import getImage from "../../shared/getImage";
import { getDetailFilm } from "../../shared/home";
import { Cast } from "./Cast";

export const MovieDetail = () => {
  const params = useParams();
  const { data } = useQuery("detail-movie", () => {
    if (params.id) {
      return getDetailFilm("movie", +params.id);
    }
  });

  if (!data) return null;
  let film = data[0].data;
  let credits = data[1].data;
  let similarVideos = data[3].data.results;
  let videos = data[4].data;

  return (
    <div className="bg-black h-fit">
      <div
        id="banner-movie"
        className="h-[70vh] w-full bg-cover brightness-50 opacity-95"
        style={{
          backgroundImage: `url(${getImage(film.backdrop_path, "/original")})`,
        }}
      ></div>

      <div className="relative top-10 w-[80%] mx-auto -mt-[400px]">
        {/* info */}
        <div className="flex gap-12">
          <div className="flex justify-center items-center relative w-[200px] h-[300px] rounded-md group">
            <div
              className="absolute top-0 left-0 w-full h-full transition .3s ease bg-center bg-cover 
              group-hover:brightness-50"
              style={{
                backgroundImage: `url(${getImage(
                  film.poster_path,
                  "/original"
                )})`,
              }}
            ></div>
            <img
              src="/icons/play.svg"
              alt=""
              className="w-12 h-12 hidden group-hover:block z-10 cursor-pointer"
            />

            <div className="absolute top-1 left-0 w-full flex justify-between invert px-1">
              <img src="/icons/sidebar/bookmark.svg" alt="" />
              <img src="/icons/share.svg" alt="" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex justify-between w-full">
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-white">Movie</p>
                  <div className="w-[2px] h-[16px] bg-gray-400"></div>
                  <p className="text-red-500">
                    {film.genres
                      .map((genre: { name: string; id: number }) => genre.name)
                      .join(", ")}
                  </p>
                </div>

                <h1 className="text-4xl text-white font-bold mt-2">
                  {film.original_title}
                </h1>
              </div>

              <div
                className="flex justify-center items-center gap-2 bg-yellow-400 rounded-l-full 
              w-[150px]"
              >
                <p className="text-[32px] text-white">{film.vote_average}</p>
                <div className="text-gray-100 text-sm">
                  <p>/10</p>
                  <p>{film.vote_count}</p>
                </div>
              </div>
            </div>

            <div className="text-gray-200 text-sm mt-4">
              {/* <p>
                Rating: {film.vote_average}{" "}
                <span className="text-[10px]">({film.vote_count})</span>
              </p> */}
              <p className="flex gap-2">
                <p>Languages: </p>
                <span className="flex items-center gap-2">
                  {film.spoken_languages
                    .map((lang: any) => lang.english_name)
                    .join(", ")}
                </span>
              </p>
              <p className="">Release date: {film.release_date}</p>
              <p>Time: {film.runtime} minutes</p>

              <p className="mt-4 lime-clamp-4">{film.overview}</p>

              {/* <div className="mt-2 flex gap-4 h-12">
                <button className="w-12 h-12 flex justify-center items-center border rounded-full">
                  <img
                    src="/icons/sidebar/bookmark.svg"
                    alt=""
                    className="w-6 h-6 invert"
                  />
                </button>
                <button className="w-12 h-12 flex justify-center items-center border rounded-full">
                  <img
                    src="/icons/share.svg"
                    alt=""
                    className="w-6 h-6 invert"
                  />
                </button>
              </div> */}
            </div>
          </div>
        </div>

        {/* media, cast, similar */}
        <div className="flex flex-col gap-8 mt-10">
          <div className="text-white mt-8">
            <p className="text-xl uppercase tracking-widest font-semibold">
              Cast
            </p>
            <div className="mt-4 grid grid-cols-4 space-y-2">
              {credits.cast.slice(0, 8).map((cast: any) => (
                <Cast key={cast.cast_id} cast={cast} />
              ))}
            </div>
          </div>
          <div className="text-white">
            <p className="text-xl uppercase tracking-widest font-semibold">
              Media
            </p>
            <div className="mt-4 grid grid-cols-3 gap-8">
              {videos.results.slice(0, 6).map((video: any) => (
                <div key={video.id}>
                  <div className="relative h-0 pb-[56.25%]">
                    <iframe
                      frameBorder="0"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      title="Video trailer"
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.key}?enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A3000&amp;widgetid=1`}
                      id="widget2"
                      className="absolute top-0 left-0 !w-full !h-full"
                    ></iframe>
                  </div>
                  <p className="mt-2 text-lg whitespace-nowrap overflow-hidden text-ellipsis">
                    {video.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-white">
            <SectionSlider
              title="Similar"
              data={similarVideos.slice(0, 8)}
              className="text-xl uppercase tracking-widest font-semibold mb-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
