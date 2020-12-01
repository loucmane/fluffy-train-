class Movie {
    constructor(id, title, image) {
        this.id = id;
        this.title = title;
        this.image = image;
    }
}

function add(x, y) {
    return x + y; // Skicka tillbaka 10 + 20
}

let searchResult = document.getElementById("searchResult");

window.onload = function() {
    document.getElementById("search").addEventListener('click', search);

    // let sum = add(10, 20);
    // console.log(sum); // 30

    let numbers = [1, 1, 2, 3, 5, 8];
    let biggerNumbers = numbers.map((theNumber) => {
        return theNumber * 2;
    });
    console.log(biggerNumbers);
}

function mapFunction(theNumber) {
    return theNumber * 2;
}

function search() {
    let searchFor = document.getElementById("searchText").value;

    fetch('http://www.omdbapi.com/?apikey=416ed51a&s=' + searchFor)
        .then((response) => { return response.json() })
        .then((searchResult) => { 
            console.log(searchResult);

            for(let i = 0; i < searchResult.Search.length; i++) {
                let m = new Movie(searchResult.Search[i].imdbID, searchResult.Search[i].Title, searchResult.Search[i].Poster);
    
                createHTML(m);
            }

            let movies = searchResult.Search.map((movieFromOmdb) => {
                // console.log(movieFromOmdb);
                let m = new Movie(movieFromOmdb.imdbID, movieFromOmdb.Title, movieFromOmdb.Poster);
                return m;
            });

            console.log(movies);
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