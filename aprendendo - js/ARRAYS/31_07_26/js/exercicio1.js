const frm = document.querySelector("form"); 
const resp = document.querySelector("pre");

const compras = [];
const Final = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const produto = frm.inProduto.value;
    compras.push(produto);
    let lista = "";

    atualizarLista();
 
    frm.reset();
    frm.inProduto.focus();
 
 
});