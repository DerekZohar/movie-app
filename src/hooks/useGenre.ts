import { useQuery } from "react-query";
import { getGenres } from "../shared/home";

interface Props {
  type?: "tv" | "movie";
}

/**
 * get genres for tv and movies
 * @returns [tvGenres, movieGenres]
 */
export const useGenre = () => {
  return useQuery("status", getGenres, {
    cacheTime: 1000 * 60 * 60 * 24,
    staleTime: 1000 * 60 * 60 * 24,
  }).data;
};
