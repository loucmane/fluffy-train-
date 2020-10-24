window.onload = function() {

let name = 'L o u c m a n e';      // this variable  is my name in a string.
console.log(name.length);   // here we console log the length of my name which is 8 characters.




for (let i = 0; i < name.length; i++) { 
    console.log(name[i]);               //
    // in this for loop we start at the index 0 which is the first letter;
    // the condition is the middle part, here we say loop as long as name.length is greater than i
    // and for the duration where the condition is true add 1 to the index.
}

let numbers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55] // an array with the fibonacci sequence
var sum = 0; // starting value of sum is 0
for (let i = 0; i < numbers.length; i++) { 
    sum += numbers[i]; //sum = numbers?(what does += mean? I'm guessing we make the sum the index of numbers?)
    
}

console.log(sum);

}