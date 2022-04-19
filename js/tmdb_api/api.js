import { config } from "./config.js";

export async function getPopularMovies(page = 1) {
  let data = [];
  try {
    const response = await fetch(
      `${config.API_BASE_URL}movie/popular?api_key=${config.API_KEY}&page=${page}`
    );
    const responseData = await response.json();
    data = responseData.results;
  } catch (e) {}
  return data;
}
