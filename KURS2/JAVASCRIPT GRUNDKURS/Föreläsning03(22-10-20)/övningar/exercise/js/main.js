window.onload = function() {

let name = 'L o u c m a n e';      // this variable  is my name in a string.
console.log(name.length);   // here we console log the length of my name which is 8 characters.




for (let i = 0; i < name.length; i++) { 
    console.log(name[i]);               //
    // in this for loop we start at the index 0 which is the first letter;
    // the condition is the middle part, here we say loop as long as name.length is greater than i
    // and for the duration where the condition is true add 1 to the index.
    // console 
}

let numbers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55] // an array with the fibonacci sequence
var sum = 0; // starting value of sum is 0
for (let i = 0; i < numbers.length; i++) { 
    sum += numbers[i]; //sum = numbers?(what does += mean? I'm guessing we make the sum the index of numbers?)
    
}

console.log(sum);




let animalList = document.createElement('ul'); // creates an unordered list in HTML
animalList.id = 'animalList'; // gives the element we create an ID of animalList



document.getElementById('animalContainer').appendChild(animalList) // gets our div and makes a child element inside that div in our case an unordered list



let animals = ['Katt', 'Hund', 'Fisk', 'Zebra'];

for (let i = 0; i < animals.length; i++) { //loops through the index of the array and does the things below until last item.
    let zooInHere = animals[i] //put the array index in a variable
    let animalListItem = document.createElement('li'); //creates a list item in html for each time it loops
    document.getElementById('animalList').appendChild(animalListItem) // targets the unordered list we just created and appends the listitem element we made earlier
                                                                     //for the duration of the for loop
    animalListItem.innerHTML = zooInHere; // makes it so the html of the list item is the index of the animals variable.
}


}