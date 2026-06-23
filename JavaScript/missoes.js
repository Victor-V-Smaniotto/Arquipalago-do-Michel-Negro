const formulario = document.querySelector("#formulario");
const listaMissoes = document.querySelector("#lista-missoes");


function renderizarMissao(){
    listaMissoes.innerHTML = "";

    const missoes = JSON.parse(localStorage.getItem("missoes")) || [];

    missoes.forEach((missao, index) => {
        listaMissoes.innerHTML += `
        <div class="card mt-3 p-3">
            <img src="${missao.monstro}" alt="Imagem do monstro" class="img-fluid">
            <h5>Nome: ${missao.nome}</h5>
            <p>Descrição: ${missao.descricao}</p>
            <h6>Perigo: ${missao.perigo}</h6>
            <h6>Localização: ${missao.localizacao}</h6>
            <h6>Recompensa: ${missao.recompensa}</h6>
            <button class="btn btn-danger btn-excluir mt-2" data-index="${index}">Excluir</button>
        </div>
    `;
    });
};

function deletarCadastro(index){
    const missoes = JSON.parse(localStorage.getItem("missoes")) || [];

    missoes.splice(index, 1);

    localStorage.setItem("missoes", JSON.stringify(missoes));

    renderizarMissao();
}

listaMissoes.addEventListener("click", (event) => {

    if(event.target.classList.contains("btn-excluir")) {

        const index = event.target.dataset.index;

        deletarCadastro(index);
    }
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
    <div class="Item-card">
        <div class="card h-100">
            <img src="${missao.monstro}" alt="Imagem do monstro" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${missao.nome}</h5>
                <p class="card-text">Descrição: ${missao.descricao}</p>
                <h6 class="card-subtitle">Perigo: ${missao.perigo}</h6>
                <p class="card-text">Localização: ${missao.localizacao}</p>
                <p class="card-text"><strong>Recompensa: ${missao.recompensa}</strong></p>
            </div>
        </div>
    </div>
    `;
    renderizarMissao();
    formulario.reset();
});