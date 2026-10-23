const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const fruta = (frm.inFruta.value);
    const num = Number(frm.inNumero.value);
    // const mult = num * 2;
    let resu = " "
    // for(let i = 1; i <= mult; i++){
    //     if(i % 2 == 1){
    //         resu += `${fruta} `;
    //     }else{
    //         resu += `* `;
    //     }
    // }
    for(let i = 1; i < num; i++){
        resu += fruta + " * ";
    }

    resp.innerText = resu + fruta + ".";
})