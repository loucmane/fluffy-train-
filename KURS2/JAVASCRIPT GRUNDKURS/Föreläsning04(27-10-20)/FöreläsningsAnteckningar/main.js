//Repition

Repetition

let myList = [1, 1, 2, 3, 5, 8, 13];

myList.push(21);  ->  [ ... , 8, 13, 21]; //.push() lägger till ett värde på sista positionen i listan

myList.pop();        ->  [..., 8, 13]; //tar bort ett vörde på sista positionen

myList.splice(4,1); // tar bort position/index 4 i en lista. första värdet är vilken position, andra värdet är hur många man tar bort


let removedValues = myList.splice(4,1) // tar bort 5an och lägger den i variabeln removedValues




//Loopar

//Vi använder loopar för att gå igenom värden i en lista i tur och ordning. 

for(let i = 0; i < myList.length; i++) {
console.log(myList[i]);
}
//loopen kommer börja på index 0, så länge i är mindre än myList.length; plussa på 1.


for (let i = myList.length -1; i >= 0; i--) {
    console.log(myList[i]);
    //denna räknar baklänges. 
}



while (condition) { //använder inget startvärde utan vilkor.. tex while this is true or false.
    



}
//while används på när vi inte på förhand vet hur många gånger vi behöver loopa

let i = 0; 
while (i < myList.length) {
    console.log(myList[i]); //denna loop kommer köras oändligt många gånger 

    i++; // lägg till något som ändrar vilkoret.
                            //i slutet på while loopen måste vi ändra ett vilkor så att den går från falsk till sant eller tvärtom

}


// objekt

/* syftet med en variabel är att ha ett värde, tex 17, 'Loucmane', true etc.

   En funktion innehåller rader med kod

   Ett objekt innehåller många vörden istället för ett värde som en variabel har.

 */

 let person = {name:'Loucmane', age: 41} //måsvingar definerar ett objekt. inuti objekt finns egenskaper/properties som definerar dina värden/values.

let person = {
    name: 'Loucmane',
    age: 41
}
// dessa 2 egenskaper har ett värde vardera, detta ör ett objekt.

console.log(person.name) //detta loggar värdet name i objektet person.

let person = {
    name: 'Loucmane',
    age: 41,
    height: 180,
    eyecolor: 'brown'
}

//objekt används för att beskriva saker. Vad som helst. Det beror på vad man vill visa på sin sida.
//objekt används hela tiden, överallt för typ allting.
//

let otherPerson = {
    name: 'Who dis?',
    age: 41,
    height: 179,
    eyecolor: 'iceblue'
}


let persons = [person, otherPerson];

for (let i = 0; i < persons[i].height; i++) {
    console.log(persons[i].height);
    
}


// ofta vill vi skapa flera objekt som ser likadana ut, alltså har likadana egenskaper

// för att få våra objekt att se likadana ut behöver vi en mall

//en mall i programmering kallas klass (class)

//klass är en mall som beskriver ett framtida objekt. Vi kan skapa en klass utan att ha objekt.

// objekt = pepparkaka, klass = pepparkaksform.

class person {
    
}