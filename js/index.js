const trendingContainer = document.querySelector (".trending-container");

const url = 'https://www.mskj.one/wp-json/wc/store/products/';

console.log(url);

async function fetchPosts() {
      const response = await fetch(url);
      const results = await response.json();
      
      const games = results;
  
      console.log(results);

      trendingContainer.innerHTML = "";

      for (let i = 0; i < games.length; i++) {   

        if(i === 4) {
            break;
        }
        
        trendingContainer.innerHTML +=
        `
        <div class="trending-games">
        <p>${games[i].name}</p>
        <img src="${games[i].images[i].src}">
        </div>
        `;
      }

}

fetchPosts();