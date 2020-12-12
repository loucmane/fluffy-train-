window.onload = function() {
    console.log("Start");
    
    console.log("Skapa löfte");
    let p = new Promise(function(resolve, reject) {
      setTimeout(() => { 
          let x = 100;

          if(x > 10) {
              resolve('x är större än 10');
          }
          
          reject('Oj, x är mindre än eller lika med 10');
          
        }, 5000);
    });
  
    console.log("Kör success om allt gick bra");

    // Beskriver för mitt löfte vad som skall hända när resolve körs
    p.then(success, failure);
  
    console.log("The end");

    let title = 'Interstellar';
    
    let promise = fetch('http://www.omdbapi.com/?apikey=&t=' + title);
    promise.then(gotData, errorGettingData);
  }

function gotData(response) {
    console.log(response);
    let p = response.json();
    p.then(presentData);
}

function presentData(movie) {
    console.log(movie);

    let heading = document.createElement("h1");
    heading.innerHTML = movie.Title;

    document.body.appendChild(heading);
}

function errorGettingData() {
    
}
  
function success(result) {
    console.log(result);
}

function failure(error) {
    console.log("Reject:", error);
}