const resp = document.querySelector("#ano")
for (let i = 2026; i >= 1900; i -- ){
    resp.innerHTML += `<option value = ${i}> ${i} </option> `;
}