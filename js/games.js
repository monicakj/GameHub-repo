const url = 'https://www.mskj.one/wp-json/wc/store/products/';
const gamesContainer = document.querySelector(".game-container");

async function getGames () {
    try {
        const response = await fetch(url);
        const getResults = await response.json();
        createHTML(getResults);
    }

    catch(error) {
        console.log(error);
    }
}

getGames();


function createHTML(games){
    games.forEach(function(games) {
        console.log(games);

        gamesContainer.innerHTML += 
        `<div class="games">
        <h3>${games.name}</h3>
        <img src="${games.images[0].src}" alt="${games.name}">
        </div>`;
    })
}