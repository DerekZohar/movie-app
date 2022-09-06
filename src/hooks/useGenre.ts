import { useQuery } from "react-query";
import { getGenres } from "../shared/home";

// interface Props {
//   type?: "tv" | "movie";
// }

/**
 * get genres for tv and movies
 * @returns [tvGenres, movieGenres]
 */
// export const useGenre = () => {
//   return useQuery("status", getGenres, {
//     cacheTime: 1000 * 60 * 60 * 24,
//     staleTime: 1000 * 60 * 60 * 24,
//   }).data;
// };
export const useGenre = (type: "tv" | "movie", values: string[]) => {
  const num = type === "tv" ? 0 : 1;
  const genres = useQuery("status", getGenres, {
    cacheTime: 1000 * 60 * 60 * 24,
    staleTime: 1000 * 60 * 60 * 24,
  }).data;

  if (!genres) return [[], []];
  return genres[num].data.genres.filter((genre: any) =>
    values.includes(genre.id)
  );
};
