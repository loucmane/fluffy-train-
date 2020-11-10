localStorage

Tillåter oss att spara variabler i webbläsaren.

let name = "Sebastian";

Key används ofta för att beskriva namnet på variabeln. 

localStorage.setItem("name", "Sebastian");

setItem skapar/skriver över variabler i localStorage. 

let nameFromLS = localStorage.getItem("name");


let car = { brand: 'Tesla', year: 2019, model: 'S' };

localStorage.setItem("car", car); // [object object] kommer visas

JSON.stringify(car);

let carFromLS = localStorage.getItem("car");

carFromLS är en text (string). Allting som hämtas från LS är texter. Även om vi vet att vi har sparat objekt eller listor. 

let car = JSON.parse(carFromLS);

console.log(car.brand);


// kolla upp programmatisk validering(?)