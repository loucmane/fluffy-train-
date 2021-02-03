/*
let name = 'Loucmane';
localStorage.setItem('name', 'Loucmane'); //setItem lets us save information in the browser, sort of like a variable.

// retrieve values through the function getItem:

let name = localStorage.getItem('name');

console.log(name);


//remove things from localStorage

removeItem('name'); //removes a variable from localstorage


clear(); // empties the whole localStorage



// sessionStorage works the same way as localStorage except it only lasts for the session, 
//meaning if you exit the browser the info is gone but if you just go back a  page to edit the info will still be there.
//the same 


//more complex structures.

localStorage.setItem(key: string, value: string); //we need a name on the variable and a value on the variable.

let car = {
    brand: 'Tesla',
    model: 'S',
    year: 2019 
}

localStorage.setItem('selectedCar', car) // does not work because car is an object. We need to turn the object into a string

// to turn an object into a string use JSON.stringify 


let carAsText = JSON.stringify(car);

localStorage.setItem('selectedCar', carAsText);


let carFromLS = localStorage.getItem('selectedCar')


console.log(carFromLS.brand); //doesnt work because we turned the object to a string so it is not an object anymore

//we need to make the string inside localStorage to an object again.

let carAsObject = JSON.parse(carFromLS); // turns the string into an object again.

console.log(carAsObject.brand) //works again



*/


let cars = [{}, {}, {} ];

let carsAsText = JSON.stringify(cars);
localStorage.setItem("cars", carsAsText);

//a week later


let carsAsTextFromLS = localStorage.getItem('cars');
let carsList = JSON.parse(carsAsTextFromLS);


for (let i = 0; i < carsList.length; i++) {
    const element = carsList[i];
    
}