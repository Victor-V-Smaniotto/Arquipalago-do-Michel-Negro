const pesquisa = document.querySelector("#pesquisa");
const resultado = document.querySelector("#resultadoPesquisa");

const itens = [
    { nome: "Micheat", pagina: "/Html/Bestiario.html", id: "micheat" },
    { nome: "Micheat (Furious)", pagina: "/Html/Bestiario.html", id: "micheat-furious" },
    { nome: "Khalian, Dragão do Sul Ardente", pagina: "/Html/Bestiario.html", id: "khalian-dragao-do-sul-ardente" },
    { nome: "Quimera, Protetora da Fronteira", pagina: "/Html/Bestiario.html", id: "quimera-protetora-da-fronteira" },
    { nome: "Centauros", pagina: "/Html/Bestiario.html", id: "centauros" },
    { nome: "Magos", pagina: "/Html/Bestiario.html", id: "magos" },
    { nome: "Ragnarokh, O Inferno Rastejante", pagina: "/Html/Bestiario.html", id: "ragnarokh-o-inferno-rastejante" },
    { nome: "Esqueletos da praia do Oeste", pagina: "/Html/Bestiario.html", id: "esqueletos-da-praia-do-oeste" },
    { nome: "Morbis, O Errante", pagina: "/Html/Bestiario.html", id: "morbis-o-errante" },
    { nome: "Mumias, são os mortos vivos do Norte Escaldante do Arquipélago", pagina: "/Html/Bestiario.html", id: "mumias-sao-os-mortos-vivos-do-norte-escaldante-do-arquipelago" },
    { nome: "Gargulas", pagina: "/Html/Bestiario.html", id: "gargulas" },
    { nome: "Minotauros", pagina: "/Html/Bestiario.html", id: "minotauros" },
    { nome: "Skarvex, Lobos das Cinzas", pagina: "/Html/Bestiario.html", id: "skarvex-lobos-das-cinzas" },
    { nome: "Tharok, Chefe dos Centauros do Leste Gelado", pagina: "/Html/Bestiario.html", id: "tharok-chefe-dos-centauros-do-leste-gelado" },

    { nome: "Arthur Morgan", pagina: "/Html/Npcs.html", id: "arthur-morgan" },
    { nome: "Elarion", pagina: "/Html/Npcs.html", id: "elarion" },
    { nome: "Brann Kord", pagina: "/Html/Npcs.html", id: "brann-kord" },
    { nome: "O Eco", pagina: "/Html/Npcs.html", id: "o-eco" },
    { nome: "Nira Solen", pagina: "/Html/Npcs.html", id: "nira-solen" },
    { nome: "Darius Vennor", pagina: "/Html/Npcs.html", id: "darius-vennor" },
    { nome: "Seraphine Vale", pagina: "/Html/Npcs.html", id: "seraphine-vale" },
    { nome: "Lyara Venn", pagina: "/Html/Npcs.html", id: "lyara-venn" },

    { nome: "Espada em Chama", pagina: "/Html/Itens.html", id: "espada-em-chama" },
    { nome: "Arco Sussurante", pagina: "/Html/Itens.html", id: "arco-sussurante" },
    { nome: "Machado Devorador", pagina: "/Html/Itens.html", id: "machado-devorador" },
    { nome: "Bastão do Arconte", pagina: "/Html/Itens.html", id: "bastao-do-arconte" },
    { nome: "Lança Aurora", pagina: "/Html/Itens.html", id: "lanca-aurora" },
    { nome: "Adaga do Silêncio", pagina: "/Html/Itens.html", id: "adaga-do-silencio" },
    { nome: "Martelo do Trovão", pagina: "/Html/Itens.html", id: "martelo-do-trovao" },
    { nome: "Espada do Sangue Real", pagina: "/Html/Itens.html", id: "espada-do-sangue-real" },
    { nome: "Besta da Sombra Eterna", pagina: "/Html/Itens.html", id: "besta-da-sombra-eterna" },
    { nome: "Escudo do Juramento", pagina: "/Html/Itens.html", id: "escudo-do-juramento" },

    { nome: "Ecos na Vila dos Coqueiros", pagina: "/Html/Missoes.html", id: "ecos-na-vila-dos-coqueiros" },
    { nome: "Caçada às Gárgulas", pagina: "/Html/Missoes.html", id: "cacada-as-gargulas" },
    { nome: "Patrulha do Leste Gelado", pagina: "/Html/Missoes.html", id: "patrulha-do-leste-gelado" },
    { nome: "A Maldição da Areia Eterna", pagina: "/Html/Missoes.html", id: "a-maldicao-da-areia-eterna" },

    { nome: "Capítulo I - O Leste Gelado", pagina: "/Html/Historias.html", id: "capitulo-i-o-leste-gelado" },
    { nome: "Capítulo II - O Sul Ardente", pagina: "/Html/Historias.html", id: "capitulo-ii-o-sul-ardente" },
    { nome: "Capítulo III - O Oeste Sombrio", pagina: "/Html/Historias.html", id: "capitulo-iii-o-oeste-sombrio" },
    { nome: "Capítulo IV - O Norte Escaldante, a Guerra Final", pagina: "/Html/Historias.html", id: "capitulo-iv-o-norte-escaldante-a-guerra-final" }
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