const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const user = {
        nome: document.querySelector("#nome").value,
        raca: document.querySelector("#raca").value,
        classe: document.querySelector("#classe").value
    };

    console.log(user);
});


const pontosR = document.querySelector("#pontos-restantes");

const forca = document.querySelector("#val-forca");
const agi = document.querySelector("#val-agilidade");
const int = document.querySelector("#val-inteligencia");

const feedback = document.querySelector("#feedback");
const btn_dec = document.querySelectorAll(".btn-dec");
const btn_inc = document.querySelectorAll(".btn-inc");

let pontoRestante = 10;

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