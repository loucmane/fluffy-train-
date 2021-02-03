window.onload = function() {
let me = new Person('Loucmane', 29, 180)
let myAdress = new Adress ('Hantverkargatan 52', 11231, 'Stockholm')


}


class Person {
constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;

 }

}

class Adress {
    constructor(street, zip, city) {
        this.street = street;
        this.zip = zip;
        this.city = city;
    }
}