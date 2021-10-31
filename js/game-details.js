const detailsContainer = document.querySelector(".game-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = 'https://www.mskj.one/wp-json/wc/store/products/' + id;


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
    detailsContainer.innerHTML = `
        <div class="game-title">
        <h1>${details.name}<h1>
        </div>

        <div class="game-img">
        <img src="${details.images[0].src}">
        </div>
        `;
}


