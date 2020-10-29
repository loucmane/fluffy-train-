window.onload = function() {

let me = new Person('Loucmane', 29, 180, 'brown'); // outside this window onload we defined a Person class.
console.log(me); // here we create a variable and give it a class of Person. with the constructor property values inside the parenthesis.
                // then we log it to the console.




let myself = new Person('Loicmoine', 29, 179, 'eyes arent real m8'); // another object, same class different values.
let andI = new Person('Loucieboy', 29, 178, 'brownies'); // another object, same class different values.

let meMyselfAndI = [me, myself, andI] // we create an array with all the objects we created.



for (let i = 0; i < meMyselfAndI.length; i++) { // here we make a for loop that loops through the entire array until finished
    console.log(meMyselfAndI[i].name, meMyselfAndI[i].age, meMyselfAndI[i].height, meMyselfAndI[i].eyecolor); // we log the name and age of meMyselfAndI
    
}



}



class Person { //here is the class of the object. Classes are like a template and objects are the ones using these templates to categorize their values. 
               // its important that we follow the order properties of the values inside  the constructor. when we define our object  
    constructor (name, age, height, eyecolor){
        this.name = name;
        this.age = age; 
        this.height = height;
        this.eyecolor = eyecolor;
    }

}

