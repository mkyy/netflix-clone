import { getPopularMovies } from './api.js';
import { config } from './config.js';

const principalDiv = document.querySelector('.main');

export async function renderPrincipalMovie() {
  const movies = await getPopularMovies();
  const maxMoviesPerPage = 20;
  const randomMovie = movies[Math.floor(Math.random() * maxMoviesPerPage)];

  principalDiv.innerHTML = `
  <div
        class="filme-principal"
        style="
          background: linear-gradient(
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5) 100%
            ),
            url(${config.IMAGE_BASE_URL + randomMovie.backdrop_path});
          background-size: cover;
        ">
        <div class="container">
            <h3 class="titulo">${randomMovie.original_title}</h3>
            <p class="descricao">
                ${randomMovie.overview}
            </p>
            <div class="botoes">
                <button role="button" class="botao">
                <i class="fas fa-play"></i>
                ASSISTIR AGORA
                </button>
                <button role="button" class="botao">
                <i class="fas fa-info-circle"></i>
                MAIS INFORMAÇÕES
                </button>
            </div>
        </div>
    </div>
    `;
}
