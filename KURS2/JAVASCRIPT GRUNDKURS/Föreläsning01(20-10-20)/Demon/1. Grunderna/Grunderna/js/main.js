function myAwsomeFunction() {
//   alert("Hello world");

    let name = "Sebastian";

    console.log(name);  // Skriv ut Sebastian i webbläsarens konsol
    console.log("name:", name);  // Skriver ut name: Sebastian i konsolen

    // console.log(Name);  // Får ett fel i konsolen
    
    let age = 41; // Skapa ett tal, inte en text
    console.log(age);

    console.log(age + 10);  // Skriver ut 51 i konsolen

    let modfiedAge = age + 10;
    console.log(modfiedAge);

    age = age + 1;  // Först görs age + 1, sedan skriver resultatet över det gamla värdet på age => age = 42
    console.log(age);  // 42

    age++;             // Ökar på age med 1. 
    console.log(age);  // 43

    age--;
    console.log(age);  // 42;

    let x = 13;        // Ett godtyckligt tal
    let q = x % 3;     // Genomför division med 3. Kontrollera täljaren av kvoten. 13/3 = 4 1/3 -> 1
    console.log(q);    // Skriv ut resultatet

    let aNumber = 1;
    console.log(aNumber, aNumber % 2);
    aNumber++;
    console.log(aNumber, aNumber % 2);
    aNumber++;
    console.log(aNumber, aNumber % 2);
    aNumber++;
    console.log(aNumber, aNumber % 2);
    aNumber++;
    console.log(aNumber, aNumber % 2);
    aNumber++;
    console.log(aNumber, aNumber % 2);
    aNumber++;
    console.log(aNumber, aNumber % 2);
    aNumber++;
    console.log(aNumber, aNumber % 2);
    aNumber++;
    console.log(aNumber, aNumber % 2);
    aNumber++;
    console.log(aNumber, aNumber % 2);
}
