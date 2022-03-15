const API_URL = "https://hp-api.herokuapp.com";
const HTMLResponse = document.querySelector("#appService");

fetch(`${API_URL}/api/characters`)
    .then((response) => response.json())
    .then((characters) => {
        const tblGrid = characters.map((character) => `<tr><td>${character.name}</td><td>${character.house}</td><td>${character.actor}</td></tr>`);
        console.log(characters);
        HTMLResponse.innerHTML = `<table class="blue"><thead><tr><th>name</th><th>house</th><th>actor</th></tr></thead><tbody>${tblGrid}</tbody></table>`;
    });
