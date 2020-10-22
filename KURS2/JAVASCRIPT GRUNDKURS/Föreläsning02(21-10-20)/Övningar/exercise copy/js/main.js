window.onload = function () {

  let button = document.getElementById('jsButton');
  button.addEventListener('click', handleClick);
  
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