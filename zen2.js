
async function recovery() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    const url = `https://www.omdbapi.com/?&type=movie&i=${productId}&apikey=7815baba`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const fetchMoviesContainer = document.getElementById("film");
        fetchMoviesContainer.innerHTML = ''; 

        let movieDetails = `
            <div class="container-fetch-plus">
                <div class="movie-poster">
                    <img src="${data.Poster}" alt="movie poster">
                </div>
                <div class="movie-info">
                    <h3 class="movie-title">${data.Title}</h3>
                    <ul class="movie-misc-info">
                        <li class="year">Year: ${data.Year}</li>
                        <li class="rated">Ratings: ${data.Rated}</li>
                        <li class="released">Released: ${data.Released}</li>
                    </ul>
                    <p class="genre"><b>Genre:</b> ${data.Genre}</p>
                    <p class="writer"><b>Writer:</b> ${data.Writer}</p>
                    <p class="actors"><b>Actors:</b> ${data.Actors}</p>
                    <p class="plot"><b>Plot:</b> ${data.Plot}</p>
                    <p class="language"><b>Language:</b> ${data.Language}</p>
                    <p class="awards"><b><i class="fas fa-award"></i></b> ${data.Awards}</p>
                </div>
            </div>
        `;
        fetchMoviesContainer.innerHTML = movieDetails;
    } catch (error) {
        console.error(error);
    }
}
recovery();





// async function showMovieDetails(movieId) {
//     const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}`);
//     const movieDetails = await response.json();

   
//     alert(`Title: ${movieDetails.Title}\nYear: ${movieDetails.Year}\nDirector: ${movieDetails.Director}\nPlot: ${movieDetails.Plot}`);
// }


// async function recovery() {
//     const params = new URLSearchParams(window.location.search);
//     console.log(diff)
//     const productId = params.get('id');
//     console.log(productId)

//     const url =`http://www.omdbapi.com/?&type=movie&i=${produitId}&apikey=7815baba`;
//     console.log(url)
//     try {
//         const response = await fetch(url);
//         const data = await response.json();

//         console.log(data);

//         const fetchMoviesContainer = document.getElementById("fetchMovies");
//         fetchMoviesContainer.innerHTML = '';
//     }
// } 




// async function searchMovies() {
  
//     const searchInput = document.getElementById('produitId').value;

//     if (productId.trim() !== '') {
//         const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${productId}`);
//         const data = await response.json();

//         displayMovies(data.Search);
//     }
// }




// function displayMovies(movies) {
//     const moviesList = document.getElementById('moviesList');
//     moviesList.innerHTML = '';

//     if (movies) {
//         movies.forEach(movie => {
//             const movieElement = document.createElement('div');
//             movieElement.classList.add('movie');
//             movieElement.innerHTML = `<h3>${movie.Title}</h3><p>${movie.Year}</p>
//             <img src="${movie.Poster}"> <a href="./zin.html?id=${movie.imdbID}">plus info</a>`;

//             movieElement.addEventListener('click', () => showMovieDetails(movie.imdbID));
//             moviesList.appendChild(movieElement);
//         });
//     } else {
//         moviesList.innerHTML = '<p>No movies found</p>';
//     }
// }


// const params = new URLSearchParams(window.location.search);
// const productId = params.get('id');
// const apiKey = '402c0814';