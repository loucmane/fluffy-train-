window.onload = function() {

    // createPTag();

    // createWrapperAndPTag();

    // placepTagInContainer();

    // createUlLi();

    // buttons();

    // inputs();
}

// addition(2, 4);

// function addition(x, y) {
//     // x = 2
//     // y = 4
// }

function inputs() {
    let input = document.createElement("input");
    input.type = "text";
    input.id = "firstname";
    document.body.appendChild(input);

    let input2 = document.createElement("input");
    input2.type = "text";
    input2.id = "lastname";
    document.body.appendChild(input2);

    let button = document.createElement("button");
    button.type = "button";
    button.addEventListener('click', getUserInput);
    button.innerHTML = "Get the text";
    document.body.appendChild(button);
}

function getUserInput() {
    let theText = document.getElementById("firstname").value;
    let theText2 = document.getElementById("lastname").value;

    console.log(theText, theText2);

    let result = document.createElement("p");
    result.innerHTML = theText + " " + theText2;

    document.body.appendChild(result);
}

function handleClick(animal) { // animal = animals[i]
    console.log("Du klickade på:", animal);
}

function createPTag() {
    let pTag = document.createElement("p"); // <p></p>

    pTag.innerHTML = "Lorem ipsum";  // <p>Lorem ipsum</p>

    document.body.appendChild(pTag);
}

function createWrapperAndPTag() {
    let wrapper = document.createElement("div");

    wrapper.id = "wrapper";

    document.body.appendChild(wrapper);

    let pTag = document.createElement("p"); // <p></p>

    pTag.innerHTML = "Lorem ipsum";  // <p>Lorem ipsum</p>

    wrapper.appendChild(pTag);
}

function placepTagInContainer() {
    let pTag = document.createElement("p"); // <p></p>

    pTag.innerHTML = "Lorem ipsum";  // <p>Lorem ipsum</p>

    let div = document.getElementById("container");

    div.appendChild(pTag);
}

function createUlLi() {
    let numbers = [1, 1, 2, 3, 5, 8]; // Listan finns vanligtvis inte här... 

    let ulElement = document.createElement("ul"); // <ul></ul>

    for(let i = 0; i < numbers.length; i++) {
        let liElement = document.createElement("li"); // <li></li>
        liElement.innerHTML = numbers[i];  // <li>1</li>

        ulElement.appendChild(liElement);  // <ul><li>...</li></ul>
    }

    document.body.appendChild(ulElement);
}

function buttons() {
    let animals = [{id: 5, name: 'Lunnefågel'}, { id: 8, name: 'Leopard'}, { id: 100, name: 'Giraff'}];

    for(let i = 0; i < animals.length; i++) {
        let button = document.createElement("button"); //<button></button>

        button.type = "button";
        button.innerHTML = animals[i].name;

        // button.setAttribute("src", "urlOfTheImage");

        button.addEventListener('click', () => { handleClick(animals[i]); });
        
        document.body.appendChild(button);
    }
}