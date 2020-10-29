window.onload = function () {
let theDivTag = document.getElementById('thisIsHTML');
let thePTag = document.getElementById('colorSwapTest');
let textChanger = document.getElementById('textChange');





thePTag.className = 'red';


theDivTag.innerHTML = 'I changed the content of this text with Javascript using .innerhtml ';
theDivTag.className = 'green';
theDivTag.id = 'thisIsJavascript';

textChanger.innerText = 'I changed the content of this text with Javascript using .innertext';


console.log(thePTag);

};

function changeColor() {
  let thePTag = document.getElementById('colorSwapTest');
  thePTag.className = 'red';
}


