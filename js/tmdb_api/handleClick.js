function handleClick(title, overview, backdrop) {
  const principalDiv = document.querySelector('.main');

  principalDiv.innerHTML = `
      <div
            class="filme-principal"
            style="
              background: linear-gradient(
                  rgba(0, 0, 0, 0.5),
                  rgba(0, 0, 0, 0.5) 100%
                ),
                url(https://image.tmdb.org/t/p/w1280${backdrop});
              background-size: cover;
            ">
            <div class="container">
                <h3 class="titulo">${title}</h3>
                <p class="descricao">
                    ${overview}
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
