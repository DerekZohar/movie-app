import { IMAGE_URL } from "./constants";

const getImage = (url: string, width: "/w342" | "/w1280" | "/original") =>
  IMAGE_URL + width + url;

export default getImage;
