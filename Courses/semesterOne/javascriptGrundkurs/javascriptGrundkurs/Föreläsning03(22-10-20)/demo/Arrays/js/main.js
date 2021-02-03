window.onload = function() {
    let numbers = [1, 1, 2, 3, 5, 8];

    let texts = ["Hej", "Det", "var", "länge", "sedan"];

    for(let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }

    for (let i = 0; i < texts.length; i++) {
        console.log(texts[i]);
    }
}

function handleClick() {
    let name = document.getElementById("name"); // name är <input>

    let textFromUser = name.value; // "10"
    let numberFromUser = parseInt(textFromUser);

    console.log(textFromUser);
    console.log(numberFromUser);

    for(let i = 0; i < numberFromUser; i++) {
        console.log(i + 1);
    }
}