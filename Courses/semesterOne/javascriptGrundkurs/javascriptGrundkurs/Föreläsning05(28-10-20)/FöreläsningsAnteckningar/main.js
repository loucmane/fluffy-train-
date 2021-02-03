window.onload = function () {

// let pTag = document.createElement('p'); //creates a <p></p> in html.



// pTag.innerHTML = 'lorem ipsum'; // <p>lorem ipsum</p>



document.body //this is the body in html. standard in the document. no need to getElementByID('')

// document.body.appendChild(pTag); //creates the <p></p> using pTag variable as a child element of the body.


let wrapper = document.createElement('div'); //creates a div in html¨
wrapper.id = 'wrapper'; // gives the element we created an id of wrapper

let pTag = document.createElement('p'); //creates a <p></p>
pTag.innerHTML = 'lorem ipsum'; // makes the content of "p" lorem ipsum, like so: <p>lorem ipsum</p>

wrapper.appendChild(pTag); //creates the pTag inside of our wrapper div




let numbers = [1, 1, 2, 3, 5, 8,]
let  ulElement = document.createElement('ul'); // <ul></ul>

for (let i = 0; i < numbers.length; i++ ) {
    let liElement = document.createElement('li')    // <li></li>
    liElement.innerHTML = numbers[i];
    ulElement.appendChild(liElement);
}

document.body.appendChild(ulElement); // 


let animals = [{id: 5, name: 'Lunnefågel'}, {id: 8, name: 'Leopard'}, {id: 100, name: 'Giraff'} ];
   //list with a bunch of objects with properties.

   for (i = 0; i < animals.length; i++) {
       let button = document.createElement('button'); //<button></button>

       button.type = 'button'; //gives all the buttons we create a type of button
       button.innerHTML = animals[i].name //makes the text of the button of every [i] in the loop

       //button.setAttribute('src', 'urlOfTheImage') in case there is an attribute that isnt in javascript.

       button.addEventListener('click', () => { handleClick(animals[i]); }); // event listener that listens to being clicked, we call a function that logs it to the console



       document.body.appendChild(button);

   }
}


//here we create a p tag and make the content lorem ipsum and put it directly inside the body.

function createPtag(){
let pTag = document.createElement('p');
pTag.innerHTML = 'lorem ipsum'
document.body.appendChild(pTag)


}

 // here we create a div and put a p tag with the content of lorem ipsum within that div.
function createWrapperAndPtag() {
    let wrapper = document.createElement('div');
    wrapper.id = 'wrapper';
    let pTag = document.createElement('p');
    pTag.innerHTML = 'lorem ipsum';
    wrapper.appendChild(pTag);
}


function handleClick(animal) {
    console.log('oibruvva, are we clickin or wot? You like the: ', animal.name) 
    //for some reason this doesnt want to work, it says 'Cannot read property 'name' of undefined at handleClick'
}