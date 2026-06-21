const formulario = document.querySelector("#formulario");
const listaMissoes = document.querySelector("#lista-missoes");

const missoesSalvas = JSON.parse(localStorage.getItem("missoes")) || [];

missoesSalvas.forEach(missao => {
    listaMissoes.innerHTML += `
        <div class="card mt-3 p-3">
            <img src="${missao.monstro}" alt="Imagem do monstro" class="img-fluid">
            <h5>Nome: ${missao.nome}</h5>
            <p>Descrição: ${missao.descricao}</p>
            <h6>Perigo: ${missao.perigo}</h6>
            <h6>Localização: ${missao.localizacao}</h6>
            <h6>Recompensa: ${missao.recompensa}</h6>
        </div>
    `;
});

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const missao = {
        nome: document.querySelector("#nome").value,
        descricao: document.querySelector("#descricao").value,
        perigo: document.querySelector("#perigo").value,
        localizacao: document.querySelector("#localizacao").value,
        recompensa: document.querySelector("#recompensa").value,
        monstro: document.querySelector("#monstro").value
    };

        const missoes = JSON.parse(localStorage.getItem("missoes")) || [];
    missoes.push(missao);
    localStorage.setItem("missoes", JSON.stringify(missoes));

   

        listaMissoes.innerHTML += `
        <div class="card mt-3 p-3">
            <img src="${missao.monstro}" alt="Imagem do monstro" class="img-fluid">
            <h5>Nome: ${missao.nome}</h5>
            <p>Descrição: ${missao.descricao}</p>
            <h6>Perigo: ${missao.perigo}</h6>
            <h6>Localização: ${missao.localizacao}</h6>
            <h6>Recompensa: ${missao.recompensa}</h6>
        </div>
    `;
    formulario.reset();
});