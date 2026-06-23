const formulario = document.querySelector("#formulario");
const listaUsers = document.querySelector("#lista-users");

const pontosR = document.querySelector("#pontos-restantes");
const forca = document.querySelector("#val-forca");
const agi = document.querySelector("#val-agilidade");
const int = document.querySelector("#val-inteligencia");


const btn_dec = document.querySelectorAll(".btn-dec");
const btn_inc = document.querySelectorAll(".btn-inc");
const btn_exc = document.querySelectorAll(".btn-excluir");

let pontoRestante = 10;



function renderizarCadastro(){
    listaUsers.innerHTML = "";

    const personagensSalvos = JSON.parse(localStorage.getItem("personagens")) || [];

    personagensSalvos.forEach((user, index) => {
        listaUsers.innerHTML += `
        <div class="card mt-3 p-3">
            <h3>${user.nome}</h3>
            <h4>Raça: ${user.raca}</h4>
            <h4>Classe: ${user.classe}</h4>
            <h4>Força: ${user.forca}</h4>
            <h4>Agilidade: ${user.velocidade}</h4>
            <h4>Inteligência: ${user.inteligencia}</h4>
            <button type="button" class="btn-excluir" data-index="${index}">excluir</button>
        </div>
        `;
    });
};

function deletarCadastro(index){
    const personagensSalvos = JSON.parse(localStorage.getItem("personagens")) || [];

    personagensSalvos.splice(index, 1);

    localStorage.setItem("personagens", JSON.stringify(personagensSalvos));

    renderizarCadastro();
}

listaUsers.addEventListener("click", (event) => {

    if(event.target.classList.contains("btn-excluir")) {

        const index = event.target.dataset.index;

        deletarCadastro(index);
    }
});

console.log(pontoRestante);

btn_dec.forEach(btn =>{
    btn.addEventListener("click", () => {
        
        if(pontoRestante >= 0 && pontoRestante <= 10){

            console.log(pontoRestante);
            
            if(btn.dataset.attr === "forca" && Number(forca.textContent) > 0){
                forca.textContent = Number(forca.textContent) - 1;
                pontoRestante += 1;
                pontosR.textContent = `Pontos restantes: ${pontoRestante}`;
    
            } else if(btn.dataset.attr === "agilidade" && Number(agi.textContent) > 0) {
                agi.textContent = Number(agi.textContent) - 1;
                pontoRestante += 1;
                pontosR.textContent = `Pontos restantes: ${pontoRestante}`;
    
            } else if(btn.dataset.attr === "inteligencia" && Number(int.textContent) > 0) {
                int.textContent = Number(int.textContent) - 1;
                pontoRestante += 1;
                pontosR.textContent = `Pontos restantes: ${pontoRestante}`;
            }
        }
    })
})

btn_inc.forEach(btn =>{
    btn.addEventListener("click", () => {

        if(pontoRestante > 0 && pontoRestante <= 10){

            console.log(pontoRestante);

            if(btn.dataset.attr === "forca" && Number(forca.textContent) < 10){
                forca.textContent = Number(forca.textContent) + 1;
                pontoRestante -= 1;
                pontosR.textContent = `Pontos restantes: ${pontoRestante}`;
    
            } else if(btn.dataset.attr === "agilidade" && Number(agi.textContent) < 10) {
                agi.textContent = Number(agi.textContent) + 1;
                pontoRestante -= 1;
                pontosR.textContent = `Pontos restantes: ${pontoRestante}`;
    
            } else if(btn.dataset.attr === "inteligencia" && Number(int.textContent) < 10) {
                int.textContent = Number(int.textContent) + 1;
                pontoRestante -= 1;
                pontosR.textContent = `Pontos restantes: ${pontoRestante}`;
            }
        }
    })
})

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const user = {
        nome: document.querySelector("#nome").value,
        raca: document.querySelector("#raca").value,
        classe: document.querySelector("#classe").value,
        forca: Number(document.querySelector("#val-forca").textContent),
        velocidade: Number(document.querySelector("#val-agilidade").textContent),
        inteligencia: Number(document.querySelector("#val-inteligencia").textContent)
    };


    const personagens = JSON.parse(localStorage.getItem("personagens")) || [];
    personagens.push(user);
    localStorage.setItem("personagens", JSON.stringify(personagens));


    renderizarCadastro();
    formulario.reset();

    pontoRestante = 10;
    pontosR.textContent = "Pontos restantes: 10";
    forca.textContent = 0;
    agi.textContent = 0;
    int.textContent = 0;
});
renderizarCadastro();