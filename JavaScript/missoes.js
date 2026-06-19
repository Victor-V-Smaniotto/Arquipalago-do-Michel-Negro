const formulario = document.querySelector("#formulario");
const listaUsers = document.querySelector("#lista-users");

formulario.addEventListener("submit", () => {
    event.preventDefault();

    const user = {
        nome: document.querySelector("#nome").value,
        raca: document.querySelector("#raca").value,
        fraqueza: document.querySelector("#fraqueza").value,
        localizacao: document.querySelector("#localizacao").value,
    };

        listaUsers.innerHTML += `
        <div class="card mt-3 p-3">
            <h3>${user.nome}</h3>
            <p>Raça: ${user.raca}</p>
            <p>fraqueza: ${user.fraqueza}</p>
            <p>localização: ${user.localizacao}</p>
        </div>
    `;
    formulario.reset();
});