const url = 'https://www.mskj.one/wp-json/wc/store/products/';
const gamesContainer = document.querySelector (".game-container");

async function getGames() {
    try {
        const response = await fetch(url);
        const getResults = await response.json();
        createHTML(getResults);
    }
    catch(error) {
        console.log("An error has ocurred.");
        gamesContainer.innerHTML = displayError();
    }
}

getGames();

function createHTML(games){
    games.forEach(function(games) {
        console.log(games);

        gamesContainer.innerHTML += 
        `
        <div class="games">
        <a href="/game-details.html?id=${games.id}">
        <h3>${games.name}</h3>
        <img src="${games.images[0].src}" alt="${games.name}">
        </a>
        
        <div class="game-price>
        <p>Price: ${games.price_html}</p>
        </div>
        
        <div class="cart-btn">
        <a href="/shopping-cart.html">
        <button class="add-to-cart">Add to cart</button>
        </div>
        </a>
        </div>
        `;
    })
}