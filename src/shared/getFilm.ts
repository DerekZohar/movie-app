import { EMBED_TO } from "./constants";

export const embedMovie = (id: string | number): string =>
  `${EMBED_TO}/movie?id=${id}`;
