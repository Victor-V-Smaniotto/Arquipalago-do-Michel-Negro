const pesquisa = document.querySelector("#pesquisa");
const resultado = document.querySelector("#resultadoPesquisa");

const paginas = [
    { nome: "Bestiário", caminho: "/Html/Bestiario.html" },
    { nome: "NPCs", caminho: "/Html/Npcs.html" },
    { nome: "Itens", caminho: "/Html/Itens.html" },
    { nome: "Missões", caminho: "/Html/Missoes.html" },
    { nome: "Histórias", caminho: "/Html/Historias.html" }
];

if (pesquisa && resultado) {
    pesquisa.addEventListener("input", () => {
        const texto = pesquisa.value.toLowerCase();
        resultado.innerHTML = "";

        if (texto === "") {
            return;
        }

        paginas.forEach((pagina) => {
            fetch(pagina.caminho)
                .then((resposta) => resposta.text())
                .then((html) => {
                    if (html.toLowerCase().includes(texto)) {
                        resultado.innerHTML += `
                            <a href="${pagina.caminho}" class="d-block">
                                Resultado encontrado em ${pagina.nome}
                            </a>
                        `;
                    }
                });
        });
    });
}