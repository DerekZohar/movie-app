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

export const getExploreFilms = (type: "movie" | "tv" | "anime", page: number) =>
  axiosClient.get(`/discover/${type}`, {
    params: {
      page,
    },
  });

export const getDetailFilm = (type: "movie" | "tv" | "anime", id: number) =>
  Promise.all([
    axiosClient.get(`/${type}/${id}`),
    axiosClient.get(`/${type}/${id}/credits`),
    // axiosClient.get(`/${type}/${id}/reviews`),
    axiosClient.get(`/${type}/${id}/similar`),
    axiosClient.get(`/${type}/${id}/videos`),
  ]);

export const getWatchFilm = (
  type: "movie" | "tv" | "anime",
  id: number | string
) =>
  Promise.all([
    axiosClient.get(`/${type}/${id}`),
    axiosClient.get(`/${type}/${id}/recommendations`),
  ]);
export const getSearchByKeyword = async (query: string): Promise<string[]> => {
  return (
    await axiosClient.get("/search/movie", {
      params: {
        query,
      },
    })
  ).data.results;
};

export const getSearchKeywordList = async (
  query: string
): Promise<string[]> => {
  return (
    await axiosClient.get("/search/keyword", {
      params: {
        query,
      },
    })
  ).data.results
    .map((item: any) => item.name)
    .filter((_: any, index: number) => index < 5);
};
