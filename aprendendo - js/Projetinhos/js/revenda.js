const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const carros = []; //declarei array global

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const modelo = frm.inModelo.value;
    const preco = Number(frm.inPreco.value);
    carros.push({modelo, preco}); // adiciona dados ao array de objetos
    frm.inModelo.value = "";
    frm.inPreco.value = "";
    frm.inModelo.focus();
    // disparar um evento de click em btListar (equivale a um click no botão)
    frm.btListar.dispatchEvent(new Event("click"));    
});

frm.btListar.addEventListener("click", () => {
    if (carros.length == 0) {
        alert("Não ah carros na lista");
        return;
    }
    // método reduce() concatena um string, obtendo modelo e preço
    const lista = carros.reduce((acumulador, carro) => 
    acumulador + carro.modelo + " - R$: " + carro.preco.toFixed(2) + "\n", "");
    resp.innerText = `Lista dos carros cadatrados \n ${"-".repeat(40)}\n ${lista}`
});
frm.btFiltrar.addEventListener("click", () => {
    const maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"));
    if(maximo == 0 || isNaN(maximo)){
        return;
    }
    // criar um novo array com os objetos que atendem a condição do filtro
    const carrosFilter = carros.filter(carro => carro.preco <= maximo);
    if(carrosFilter.length == 0) {
        alert("Não há carros com preço inferior ou igual ao solicitado");
        return;
    }
    let lista = "";
    for (const carro of carrosFilter) { //percorre cada elemento do array
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`;
    }    
    resp.innerText = `Carros até R$: ${maximo.toFixed(2)}\n${"-".repeat(40)}\n ${lista}`;
});

frm.btSimular.addEventListener("click", () => {
    const desconto = Number(prompt("Qual o percentual de desconto: "));
    if (desconto == 0 || isNaN(desconto)) {     // se não informou um valor valido
        return;
    }
    const carrosDesc = carros.map(aux => ({
        modelo: aux.modelo,
        preco: aux.preco - (aux.preco * desconto / 100)
    }))
    let lista = "";
    for (const carro of carrosDesc) {
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`;
    }
    resp.innerText = `Carros com desconto: ${desconto}%\n${"-".repeat(40)}\n${lista}`;
})