import React from "react";
import { useParams } from "react-router-dom";
import { getDetailFilm } from "../../shared/home";
import { useQuery } from "react-query";
import { IMAGE_URL } from "../../shared/constants";
import getImage from "../../shared/getImage";
import { useGenre } from "../../hooks/useGenre";
import { url } from "inspector";

export const MovieDetailPage = () => {
  const params = useParams();
  const { data, isFetched } = useQuery("detail-movie", () => {
    if (params.id) {
      return getDetailFilm("movie", +params.id);
    }
  });

  if (!data) return null;
  let film = data[0].data;
  let credits = data[1].data;

  console.log(credits);

  if (!params.id) return <div>404</div>;
  console.log(film);
  return (
    <div className="relative flex justify-center items-center h-screen w-screen ">
      <div
        className="absolute top-0 left-0 h-full w-full bg-center brightness-50 opacity-95"
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
          <div>
            <div className="flex justify-between">
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

              <div className="flex justify-center items-center gap-2 bg-yellow-400 rounded-l-full w-[200px]">
                <p className="text-[48px] text-white">{film.vote_average}</p>
                <div className="text-gray-400 text-sm">
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

              <p className="mt-4">{film.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
