window.onload = function() {
    localStorage.setItem("name", "Sebastian");

    let car = {
        brand: 'Tesla',
        model: 'S',
        year: 2019
    }

    let car2 = {
        brand: 'Tesla',
        model: 'X',
        year: 2017
    }

    let car3 = {
        brand: 'Tesla',
        model: '3',
        year: 2020
    }

    let cars = [car, car2, car3];

    let carAsText = JSON.stringify(car);
    localStorage.setItem("car", carAsText);

    localStorage.setItem("cars", JSON.stringify(cars));

    document.getElementById("getFromLS").addEventListener('click', getFromLS);
    document.getElementById("getCarFromLS").addEventListener('click', getCarFromLS);
    document.getElementById("getCarsFromLS").addEventListener('click', getCarsFromLS);
    document.getElementById("clearLS").addEventListener('click', clearLS);   
}

function clearLS() {
    localStorage.clear();

    let carsFromLS = localStorage.getItem("cars");
    console.log(carsFromLS);

    if(carsFromLS == null) {
        console.log("Listan cars finns inte i LS");
    }
    else {
        getCarsFromLS();
    }
}

function getCarsFromLS() {
    let carsFromLS = localStorage.getItem("cars");
    let cars = JSON.parse(carsFromLS);  // Text -> Lista

    for(let i = 0; i < cars.length; i++) {
        console.log(cars[i]);
    }
}

function getCarFromLS() {
    let carFromLS = localStorage.getItem("car");

    console.log(carFromLS);

    let car = JSON.parse(carFromLS);

    console.log(car);

    let container = document.getElementById("container");

    let heading = document.createElement("h4");
    heading.innerHTML = car.brand;

    container.appendChild(heading);
}

function getFromLS() {
    let nameFromLS = localStorage.getItem("name");

    let container = document.getElementById("container");

    // Töm vår behållare på taggar och text
    container.innerHTML = "";

    let pTag = document.createElement("p");
    pTag.innerHTML = nameFromLS;
    container.appendChild(pTag);
}