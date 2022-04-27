import { getPopularMovies } from './api.js';
import { config } from './config.js';

const moviesDiv = document.getElementById('movies-div');

export async function renderMovies() {
  const movies = await getPopularMovies();
  console.log(movies);
  const moviesToInner = movies.map(movie => {
    return renderSingleMovie(movie, movie.title, movie.overview, movie.backdrop_path);
  });

  moviesDiv.innerHTML = moviesToInner.join('');

  $('.owl-carousel').owlCarousel({
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

function renderSingleMovie(movie, title, overview, backdrop) {
  return `
        <div id='${movie.id}' class="item">
          <img onclick="handleClick('${title}', '${overview}', '${backdrop}',)" class="box-filme" src="${
    config.IMAGE_BASE_URL + movie.poster_path
  }" alt="" srcset="" />
        </div>
        `;
}
