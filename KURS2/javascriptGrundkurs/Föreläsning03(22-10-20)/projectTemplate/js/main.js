window.onload = function() {
    let numbers = [1, 1, 2, 3, 5, 8];
    let texts = ['hej', 'det', 'var', 'länge', 'sedan'];


    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
        
    }

    for (let i = 0; i < texts.length; i++) {
            console.log(texts[i]);        
    }


}


function handleClick() {
    let name = document.getElementById('name') //name är <input>

    let textFromUser = name.value;
    let numberFromUser = parseInt()

    console.log(textFromUser);
    console.log(numberFromUser);
    
}

// let name = document.getElementById('name');

// let inputFromUser = name.value;

// console.log(inputFromUser.length);


// let numberFromUser = parseInt(inputFromUser);

// numberFromUser.toString();