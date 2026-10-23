const resp = document.querySelector("#teste")

for (let i = 0; ; ){

    if (i > 3) break;
    resp.innerHTML += `${i}`;
    i++
}