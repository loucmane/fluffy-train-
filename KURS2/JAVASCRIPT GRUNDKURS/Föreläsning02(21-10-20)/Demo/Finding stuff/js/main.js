window.onload = function () {
  // Här finns all HTML tillgänglig

  //   logicTest();
  // printName("Sebastian");
  //   printName("Hanna");
  //   printName("Astrid");

//   let sum = addition(10, 2);
//   console.log("Summan är:", sum);

    let thePTag = document.getElementById("name");
    console.log(thePTag);

    // thePTag.id = "firstname";
    console.log(thePTag.innerHTML);
    thePTag.innerHTML = "Tegel";
    thePTag.className = "green";

    let button = document.getElementById("lorem");
    button.addEventListener('click', changeColor);
};

function logicTest() {
  let x = 100;

  if (x > 100) {
    console.log("x är större än 100");
  } else {
    if (x == 100) {
      console.log("x är exakt 100");
    } else {
      console.log("x är mindre än 100");
    }
  }
}

function printName(name) {
  console.log("Namnet är:", name);
}

function addition(x, y) {
  return x + y;
}

function handleClick() {
    alert("Du klickade på knappen");
}

function changeColor() {
    let thePTag = document.getElementById("name");
    thePTag.className = "red";
}