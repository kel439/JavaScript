const frm = document.querySelector("form");
const resp = document.querySelector("h3");

function raizQuadrada() {
    const numero = Number(frm.inNumero.value); //obtem numero digitado do form
    const raiz = Math.sqrt(numero);        // calucula a raiz do numero
    if (Number.isInteger(raiz)) {
        resp.innerText = "Raiz: " + raiz;

    }
    else {
        resp.innerText = "Não a  raiz para: " + raiz;
    }
}