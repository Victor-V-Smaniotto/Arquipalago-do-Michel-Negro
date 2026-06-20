const formulario = document.querySelector("#formulario");
const listaMissoes = document.querySelector("#lista-missoes");

formulario.addEventListener("submit", () => {
    event.preventDefault();

    const missao = {
        nome: document.querySelector("#nome").value,
        descricao: document.querySelector("#descricao").value,
        perigo: document.querySelector("#perigo").value,
        localizacao: document.querySelector("#localizacao").value,
        recompensa: document.querySelector("#recompensa").value,
    };

        listaMissoes.innerHTML += `
        <div class="card mt-3 p-3">
            <h5>${missao.nome}</h3>
            <p>: ${missao.descricao}</p>
            <h6>Raça: ${missao.perigo}</p>
            <h6>fraqueza: ${missao.localizacao}</p>
            <h6>localização: ${missao.recompensa}</p>
        </div>
    `;
    formulario.reset();
});