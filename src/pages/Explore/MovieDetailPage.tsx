import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import getImage from "../../shared/getImage";
import { getDetailFilm } from "../../shared/home";

const Cast = ({ cast }: any) => {
  return (
    <div className="flex gap-4 items-center">
      <img
        src={
          cast.profile_path == null
            ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc4rdi7yIcgCYMI76dCj_182YiiGyPN-TXzQ&usqp=CAU"
            : getImage(cast.profile_path, "/original")
        }
        alt=""
        className="rounded-full h-16 w-16"
      />
      <div>
        <h1 className="text-lg font-bold">{cast.name}</h1>
        <p className="text-sm text-gray-300">{cast.character}</p>
      </div>
    </div>
  );
};

export const MovieDetailPage = () => {
  const params = useParams();
  const { data } = useQuery("detail-movie", () => {
    if (params.id) {
      return getDetailFilm("movie", +params.id);
    }
  });

  if (!data) return null;
  let film = data[0].data;
  let credits = data[1].data;
  let videos = data[4].data;
  console.log(videos);

  if (!params.id) return <div>404</div>;
  console.log(film);
  return (
    <div className="relative flex justify-center items-center h-screen ">
      <div
        className="absolute top-0 left-0 h-screen  w-full bg-center brightness-50 opacity-95"
        style={{
          backgroundImage: `url(${getImage(film.backdrop_path, "/original")})`,
        }}
      ></div>
      {/* <img
        src={getImage(film.backdrop_path, "/original")}
        alt=""
        className="blur-sm tw-black-backdrop"
      /> */}

      {/* content  */}
      <div className="absolute top-10 w-[70%]">
        <div className="flex gap-12">
          <img
            src={getImage(film.poster_path, "/original")}
            alt=""
            className="w-[200px] h-[300px] rounded-md"
          />
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

              <div className="mt-2 flex gap-4 h-12">
                <button className="text-xl w-[200px] h-12 bg-red-600 text-white rounded-md cursor-pointer">
                  Watch
                </button>
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
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
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
            <div className="mt-4 grid grid-cols-4 gap-4">
              {videos.results.slice(0, 8).map((video: any) => (
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
        </div>
      </div>
    </div>
  );
};
