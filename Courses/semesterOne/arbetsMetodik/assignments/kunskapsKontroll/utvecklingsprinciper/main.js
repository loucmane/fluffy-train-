//kod 1

let cars = ['volvo', 'saab', 'bmw', 'tesla']; 

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
    
}
//kod 2

let fruits = ['apple', 'banana', 'orange'];  

fruits.concat(cars).forEach((carFruitDelivery) => {
    console.log(carFruitDelivery)
  });
//kod 3

let flowers = ['rose', 'tulip', 'lily', 'orchid'];

const favouriteFlowers = () => {
    for (let i = 0; i < flowers.length; i++) {
    console.log(flowers[i]);

    }
}

favouriteFlowers(flowers);
