class Car {
    constructor(brand, model,year) {
        this.brand =  brand;
        this.model = model;
        this.year = year;
    }
}

let cars []


window.onload = () => {
    let car = new Car('Tesla', 'S', 2019);
    let car2 = new Car('Tesla', 'X', 2017);
    let car3 = new Car('Tesla', '3', 2021);


    cars.push(car);
    cars.push(car2);
    cars.push(car3)


    for (let i = 0; i < cars.length; i++) {
        let pTag = document.createElement('p')
        pTag.innerHTML = cars[i].brand + ' - ' + cars[i].model + ' - ' + cars[i].year;

        document.body.appendChild(pTag);
        
    }

}

function createCar() {
   let newCarBrand =  document.getElementById('brand').value;
   let newCarModel =  document.getElementById('model').value;
   let newCarYear =  document.getElementById('year').value;

   let car = new Car(newCarBrand, newCarModel, newCarYear)
   
   cars.push(car);
}