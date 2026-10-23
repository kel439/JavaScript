// criar referencias do form e os elemento de resposta (h3)
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

// cria um ouvinte de evento pro submit
frm.addEventListener("submit", (e) =>{
    // obter os valores dos campos de entrada
    const veiculo = frm.inVeiculo.value;
    const preco = Number(frm.inPreco.value);

    const entrada = preco * 0.50; // calculo valor da entrada
    const parcela = (preco * 0.50) /12;  //calculo valor da parcela

    //exibir resposta
    resp1.innerText = `Promoção ${veiculo}`;
    resp2.innerText = `Entrada de R$ ${entrada.toFixed(2)}`;
    resp3.innerText = `+12x de R$ ${parcela}`;
    
    e.preventDefault(); //evita envio do form

})