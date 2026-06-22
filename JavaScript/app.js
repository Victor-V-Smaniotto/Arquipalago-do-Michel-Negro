const pesquisa = document.querySelector("#pesquisa");
const resultado = document.querySelector("#resultadoPesquisa");
const contador = document.querySelector("#contadorItens");
const semResultado = document.querySelector("#semResultado");
const filtroCategoria = document.querySelector("#filtroCategoria");

const paginas = {
    todos: ["/Html/Bestiario.html", "/Html/Npcs.html", "/Html/Itens.html", "/Html/Missoes.html", "/Html/Historias.html"],
    monstro: ["/Html/Bestiario.html"],
    npc: ["/Html/Npcs.html"],
    item: ["/Html/Itens.html"],
    missao: ["/Html/Missoes.html"]
};


if (pesquisa && resultado && contador && semResultado) {
    pesquisa.addEventListener("input", () => {
        const texto = pesquisa.value.toLowerCase();

        resultado.innerHTML = "";
        contador.textContent = "Itens exibidos: 0";
        semResultado.classList.add("d-none");

        if (texto === "") {
            return;
        }

        let total = 0;

        paginas[filtroCategoria.value].forEach((pagina) => {
            fetch(pagina)
                .then((resposta) => resposta.text())
                .then((html) => {
                    const documento = new DOMParser().parseFromString(html, "text/html");
                    const cards = documento.querySelectorAll(".card[id]");

                    cards.forEach((card) => {
                        const titulo = card.querySelector(".card-title");

                        if (titulo && titulo.textContent.toLowerCase().includes(texto)) {
                            total++;

                            resultado.innerHTML += `
                                <a href="${pagina}#${card.id}" class="d-block">
                                    ${titulo.textContent}
                                </a>
                            `;

                            contador.textContent = `Itens exibidos: ${total}`;
                        }
                    });

                    if (total === 0) {
                        semResultado.classList.remove("d-none");
                    }
                });
        });
    });

    filtroCategoria.addEventListener("change", () => {
        pesquisa.dispatchEvent(new Event("input"));
    });
}