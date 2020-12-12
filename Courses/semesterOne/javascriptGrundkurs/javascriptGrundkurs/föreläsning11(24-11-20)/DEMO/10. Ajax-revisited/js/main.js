class Movie {
    constructor(id, title, image) {
        this.id = id;
        this.title = title;
        this.image = image;
    }
}

let searchResult = document.getElementById("searchResult");

window.onload = function() {
    document.getElementById("search").addEventListener('click', search);
}

function search() {
    let searchFor = document.getElementById("searchText").value;

    fetch('http://www.omdbapi.com/?apikey=[apiKey]&s=' + searchFor)
        .then((response) => { return response.json() })
        .then((searchResult) => { 
            console.log(searchResult);

            for(let i = 0; i < searchResult.Search.length; i++) {
                let m = new Movie(searchResult.Search[i].imdbID, searchResult.Search[i].Title, searchResult.Search[i].Poster);
    
                createHTML(m);
            }
        });
}

function createHTML(movie) {
    let container = document.createElement('div');
    container.addEventListener('click', () => { getMovieData(movie.id); });

    let heading = document.createElement('h3');
    heading.innerHTML = movie.title;
    container.appendChild(heading);

    let image = document.createElement('img');
    image.src = movie.image;
    container.appendChild(image);

    searchResult.appendChild(container);
}

function getMovieData(id) {
    console.log(id);

    fetch('http://www.omdbapi.com/?apikey=416ed51a&i=' + id)
        .then((response) => { return response.json(); })
        .then((movie) => { console.log(movie); });
}