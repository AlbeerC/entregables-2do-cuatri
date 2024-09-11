const container = document.getElementById("movie-list")

fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=59a8b9ea3a6d0f0d1d790d8bb5f36d94")
    .then((response) => response.json())
    .then((data) => {
        data.results.forEach((movie) => {
            container.innerHTML += `
                <div>
                    <img src="https://image.tmdb.org/t/p/w185${movie.poster_path}" alt="${movie.title}">
                    <h3>${movie.title}</h3>
                    <p>${movie.vote_average.toFixed(1)} / 10</p>
                    <p>${movie.release_date.substring(0, 4)}</p>
                </div>
            `
        })
    })
    .catch((error) => console.log(error))