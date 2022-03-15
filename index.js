const API_URL = "http://hp-api.herokuapp.com";
const xhr = new XMLHttpRequest();
function onRequestHandler() {
    if (this.readyState === 4 && this.status === 200) {
        //console.log(this.response);
        const data = JSON.parse(this.response);
        //console.log(data);
        const HTMLResponse = document.querySelector("#appService");
        const tblGrid = data.map(character => `<tr><td>${character.name}</td><td>${character.house}</td><td>${character.actor}</td></tr>`);
        HTMLResponse.innerHTML = `<table class="blue"><thead><tr><th>name</th><th>house</th><th>actor</th></tr></thead><tbody>${tblGrid}</tbody></table>`;



    }
}
xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${API_URL}/api/characters`);
xhr.send();
