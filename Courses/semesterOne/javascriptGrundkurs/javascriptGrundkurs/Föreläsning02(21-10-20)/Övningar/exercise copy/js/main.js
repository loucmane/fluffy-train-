window.onload = function () {

  let button = document.getElementById('jsButton');
  button.addEventListener('click', handleClick);
  
  
  let conditionalsButton = document.getElementById('conditionalsButton');
  conditionalsButton.addEventListener('click', logicTest);

};

function  handleClick() {
  
  let name = document.getElementById('name'); // variable  we call name gets the html id name and targets it
  let textFromUser = name.value; //name.value displays input from name
  // let finalTextFromUser = document.getElementById('finalTextFromUser'); // variable we call finalTextFromUser access DOM and targets element with ID finalTextFromUser
  // finalTextFromUser.innerHTML = textFromUser; //here we change the html to be the user input which is textFromUser
  let numbers = document.getElementById('numbers'); // variable we call numbers gets the DOM id numbers and targets it
  let numbersFromUser = numbers.value; //numbers.value displays input from numbers
  let finalNumbersFromUser = document.getElementById('finalNumbersFromUser'); // variable finalNumbersFromUser targets html element with id FinalNumbersFromUser
  finalNumbersFromUser.innerHTML = numbersFromUser; //here we change the html to be the user input which is numberFromUserxx
  finalNumbersFromUser.innerHTML = parseInt(textFromUser) + parseInt(numbersFromUser);
  
  
  console.log('You pressed the button');

}

function logicTest() {
  let numbersConditionalTest = document.getElementById('numbersConditionalTest');
  let numbersConditionalInput = numbersConditionalTest.value;
  let numbersConditionalTestResult = document.getElementById('numbersConditionalTestResult');
  let result;
 

  if (numbersConditionalInput > 100) {
    result = "The number you have entered is greater than 100!";
  } else {
    if (numbersConditionalInput == 100) {
      result = "The number you have entered is exactly 100!";
    } else {
      result = "The number you have entered is less than 100!";
    }
    
  }
  numbersConditionalTestResult.innerText = result; // make sure this is not inside the last else statement brackets but inside the first ifs
}


function senpai() {
  let ezikiel = '';

  if (ezikiel = 'senpai') {
    console.log('big time, we are going on an adventure zoomin, just like the olden days')
  } else if (ezekiel = 'new phone who dis') {
    console.log('abonnenten du försöker nå kan inte nås för tillfället, men du kan skicka ett sms med ditt telefonnummer...')
  } else if {ezekiel = 'too busy but I might know a guy'
    console.log('I appreciate every bit of guidance and help I can get')
  } else {
    console.log('Let me know my bro, walk and talk, fika, whatever you feel!')
  }

}





// function logicTest() {
//   let x = 100;

//   if (x > 100) {
//     console.log("x är större än 100");
//   } else {
//     if (x == 100) {
//       console.log("x är exakt 100");
//     } else {
//       console.log("x är mindre än 100");
//     }
//   }
// }

// function printName(name) {
//   console.log("Namnet är:", name);
// }

// function addition(x, y) {
//   return x + y;
// }

// function handleClick() {
//     alert("Du klickade på knappen");
// }

// function changeColor() {
//     let thePTag = document.getElementById("name");
//     thePTag.className = "red";
// }