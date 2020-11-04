window.onload = function() {


}


function calculate() {
    
    let firstNumberText = document.getElementById('firstNumber').value;
    let secondNumberText = document.getElementById('secondNumber').value;    
    
    let firstNumber = parseInt(firstNumberText)
    let secondNumber = parseInt(secondNumberText)

    let sum = firstNumber + secondNumber
    
    
    // let firstNumber = parseInt(document.getElementById('firstNumber').value);
    // let secondNumber = parseInt(document.getElementById('secondNumber').value);

    document.getElementById('result').innerHTML = firstNumber + secondNumber;

}