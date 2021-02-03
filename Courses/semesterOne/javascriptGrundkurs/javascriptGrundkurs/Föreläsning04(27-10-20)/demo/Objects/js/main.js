window.onload = function() {
    let person = {
        name: "Sebastian",
        age: 41
    };

    // JSON - JavaScript Object Notation

    // console.log(person.name);
    // console.log(person.age);
    // console.log(person);

    let wife = {
        name: "Hanna",
        agw: 41
    };

    let persons = [person, wife];

    for(let i = 0; i < persons.length; i++) {
        console.log(persons[i].age);
    }

    // let myself = new Person("Sebastian", 41, 165);
    let myself = new Person();
    myself.name = "Sebastian"
    myself.age = 41;
    myself.height = 165;

    //let daughter = new Person("Astrid", 10, 135);
    let daughter = new Person();
    daughter.name = "Astrid";
    daughter.age = 10;
    daughter.height = 135;

    let family = [myself, daughter];

    for (let i = 0; i < family.length; i++) {
        console.log(family[i].age);
    }

    console.log(daughter);
}

class Person {
    // constructor(n, age, height) {
    //     this.name = n;
    //     this.age = age;
    //     this.height = height;
    // }

    name;
    age;
    height;
}