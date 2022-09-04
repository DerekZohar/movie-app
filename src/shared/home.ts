import axiosClient from "./api/config";

export const getGenres = () =>
  Promise.all([
    axiosClient.get("/genre/tv/list"),
    axiosClient.get("/genre/movie/list"),
  ]);

// interface IHomeFilms {
//   type: "movie" | "tv" | "anime";
// }
export const getHomeFilms = (type: "movie" | "tv" | "anime") => {
  return Promise.all([
    axiosClient.get(`/trending/${type}/day`),
    axiosClient.get(`/${type}/popular`),
    axiosClient.get(`/${type}/top_rated`),
    axiosClient.get(`/${type}/upcoming`),
  ]);
};
