/* 





*/


let world [] //world is a list

world[0] = [] // every new position is a new list


let forest = new World('Forest','whatever', []);
let lava  = new World('Lava', 'lava happens here', []);


class World {
    constructor(name, description, items) {
    this.name = name;
    this.description = description;
    this.items = items;
    }    
}

world[0] = [forest, lava, {}, {}]



class Person {
constructor(name, strength, life, items, coordinates,){
this.name = name;
this.strength = strength;
this.life = life;
this.items = items;
this.coordinates = coordinates;

}


}

let hero = new Person('Oibruvver', 100, 5, [], [0,0])


let currentDescription = world[hero.coordinates[0]][hero.coordinates[1]]; // = World[0][0]?????
document.getElementById('description').innerHTML = currentDescription;

document.getElementById('command');


function doCommand() {
    let commands 
}

