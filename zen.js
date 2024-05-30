
async function recovery() {
    let question = document.getElementById("research-bar").value;
    const url = `https://www.omdbapi.com/?type=movie&s=${question}&apikey=402c0814`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const resultElement = document.getElementById("film");
        resultElement.innerHTML = '';

        for (let movie of data.Search) {
            let movieBlock = `
            <div class="block1">
                <div class="block2">
                    <img src="${movie.Poster}" alt="${movie.Title} Poster">
                </div>
                <div class="info">
                    <h3>${movie.Title}</h3>
                    <p>${movie.Year}</p>
                    <a href="./zen2.html?id=${movie.imdbID}">En savoir plus</a>
                </div>
            </div>
            `;

            resultElement.innerHTML += movieBlock;
        }
    } catch (error) {
        console.error(error);
    }
}

   




// function tacos() {
//     console.log("Hello World!");
//   }


  
//   tacos();

//  const url = 


//  const apiKey = "402c0814"
// const moviesList = document.getElementById('moviesList');

// function searchMovies() {
//     const searchInput = document.getElementById('searchInput');
//     const searchTerm = searchInput.value;

//     if (searchTerm.trim() !== '') {
//         fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`)
//             .then(response => response.json())
//             .then(data => {
//                 displayMovies(data.Search);
//             })
//             .catch(error => console.error('Error:', error));
//     }
// }

// function displayMovies(movies) {
//     moviesList.innerHTML = '';

//     movies.forEach(movie => {
//         const movieDiv = document.createElement('div');
//         movieDiv.classList.add('movie');
//         movieDiv.innerHTML = `<h3>${movie.Title}</h3><p>${movie.Year}</p>`;
//         movieDiv.addEventListener('click', () => showMovieDetails(movie.imdbID));
//         moviesList.appendChild(movieDiv);
//     });
// }

// function showMovieDetails(imdbID) {
//     fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`)
//         .then(response => response.json())
//         .then(data => {
           
//             console.log(data);
//         })
//         .catch(error => console.error('Error:', error));
// }


// script.js

// const { error } = require("console");


// async function searchMovies() {
//     const searchInput = document.getElementById('research-bar').value;
//     const lastchance = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchInput}`
//     if (searchInput.trim() !== '') {
//         const response = await fetch(url);
//         const data = await response.json();

//         displayMovies(data.Search);
//     }
// }


// const apiKey = '402c0814';