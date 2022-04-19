import { getPopularMovies } from "./api.js";
import { config } from "./config.js";

const moviesDiv = document.getElementById("movies-div");

export async function renderMovies() {
  const movies = await getPopularMovies();
  moviesDiv.innerHTML = movies
    .map((movie) => renderSingleMovie(movie))
    .join("");

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
}

function renderSingleMovie(movie) {
  return `
        <div class="item">
          <img class="box-filme" src="${
            config.IMAGE_BASE_URL + movie.poster_path
          }" alt="" srcset="" />
        </div>
        `;
}
