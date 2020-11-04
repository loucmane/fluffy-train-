// repitition

// Repetition

// Vi vill skapa html från javascript därför att vi inte vet vilken html som finns när sidan skall visas.

let pTag = document.createElement("p");  //<p></p>
let img = document.createElement("img");  //<img></img>

{/* <p>Lorem</p>
<img src="url" alt="" /> */}

pTag.innerHTML = "Lorem";
img.setAttribute("src", "urlToImage"); // <img src="imageToUrl" />

document.body.appendChild(pTag);
document.body.appendChild(img);



// loopar/listor

let numbers = [1, 1, 2, 3, 5, 8]; // our array

let ulElement = document.createElement('ul'); // variable that creates an unordered list in HTML

for (let i = 0; i < numbers.length; i++) { // our loop that runs through the index of numbers
    let liElement = numbers[i]; // every index place of numbers becomes a liElement
     liElement = document.createElement('li'); // creates an html element a list item
    liElement.innerHTML = numbers[i]; // li elements innerhtml becomes the index
    ulElement.appendChild(liElement)
}

document.body.appendChild(ulElement);



let animals = [{id: 2, name: 'Leopard'}, {id: 7, name: 'Koala'}, {id: 10, name: 'Panda'}]; 

for(let i = 0; i < animals.length; i++) {

  let container = document.createElement('div'); //creates a div in html
  container.className = 'animal-container'; // gives the div a class
  container.addEventListener('click', () => {handleClick(animals[i])});
  
  let heading = document.createElement('h2'); //creates a h2 element in html
  heading.innerHTML = animals[i].name //animals at position [i] is one object.  animals[i].name is a name of an object in this case of an animal 

 container.appendChild(heading); // creates our h2 element inside our animal-container div.
 document.body.appendChild(container); // creates the div in our body. 


}

function handleClick(animal) {
console.log(animal);
}