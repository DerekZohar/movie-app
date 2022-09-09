import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Film } from "../../components/Common/Film";
import { GenreTag } from "../../components/Common/GenreTag";
import { embedMovie } from "../../shared/getFilm";
import { getWatchFilm } from "../../shared/home";

export const MovieWatch = () => {
  const params = useParams();
  const { data } = useQuery(["movie", params.id], () =>
    getWatchFilm("movie", params.id as string)
  );

  if (!params.id || !data) return <div></div>;
  const film = data[0].data;
  const recommendFilm = data[1].data.results;

  return (
    <div className="w-[96%] mx-auto">
      <iframe
        className="w-full h-[500px] mx-auto rounded-md mt-4"
        src={embedMovie(params.id)}
        title="Film Video Player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <p className="text-3xl font-semibold mt-4">{film.original_title}</p>
      <p className="text-gray-400">{film.title}</p>
      <p className="text-gray-400 mt-2">{film.overview}</p>
      <div className="flex gap-2">
        <div className="flex gap-2 flex-wrap">
          {film.genres.map((genre: any) => (
            <GenreTag key={genre.id} name={genre.name} />
          ))}
        </div>
      </div>

      <div className="mt-8">
        <p className="text-xl font-semibold mb-4">Recommends</p>
        <div className="grid grid-cols-5 gap-8 ">
          {recommendFilm.slice(0, 10).map((film: any) => (
            <Film key={film.title} {...film} />
          ))}
        </div>
      </div>
    </div>
  );
};
