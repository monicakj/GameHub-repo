const detailsContainer = document.querySelector(".game-details");
const gameDescription = document.querySelector(".game-description");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = 'https://www.gamehub.mskj.one/wp-json/wc/store/products/' + id;



async function fetchGame() {
    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHtml(details);
}
    catch(error) {
        console.log("An error has occurred.");
        detailsContainer.innerHTML = displayError();
    }   
}

fetchGame();

function createHtml(details) {
    detailsContainer.innerHTML = 
        `
        <div class="game-img">
        <img src="${details.images[0].src}">
        </div>

        <div class="game-description">
        <div class="details-title">
        <h1>${details.name}<h1>
        </div>
        
        <div class="game-price">
        <p>Price: ${details.price_html}</p>
        </div>

        <div class="game-category">
        <p>Category: ${details.categories[0].name}</p>
        </div>

        <div class="short-description">
        <p>${details.short_description}</p>

        <a href="/shopping-cart.html">
        <button class="details-cart">Add to cart</button>
        </a>
        </div>
        `;
}


