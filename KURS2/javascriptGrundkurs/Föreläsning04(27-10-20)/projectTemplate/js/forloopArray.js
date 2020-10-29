

// arrays
// dont mix data types in arrays.

let numbers = [1, 1, 2, 3, 5, 8]; //the length of the list is 6 values long

// console.log(numbers) would log the whole array, but what if I want each number to be run in multiple segments(?)?
//To get access to values in a list/array we need to create a loop. There are different kinds of loops. Why do we choose one over the other?

// i = index, what position in the list are we at? The starting position is always 0. so in our numbers variable i = 0 = [1]



numbers[0] // will return value 1

// now we will learn about for loops.

//  start; condition; after every loop
for(let i = 0; i < 6; i++ ){
console.log(numbers[i])
}


// we dont know the maximum index in an array, an array knows the maximum index we can make a loop without knowing the index like this

for(let i = 0; i < numbers.length; i++) {
    // this is the preffered way to make loops 
    //.length is way more dynamic then hard locked values. 
    //Because its going to keep going until the array is finished
    //dont change in the array WHILE the loop is running

}


// lets do the loop backwards

for(let i = numbers.length -1; i >= 0; i-- ) {
console.log(numbers[i]);
}

// lets do the loop backwards but only ever other number

for(let i = numbers.length -1; i >= 0; i-=2){
    console.log(numbers[i]);
}


//changing things in arrays

let numbers = [1, 1, 2, 3, 5, 8];

numbers.push(13);
[1, 1, 2, 3, 5, 8, 13]    

//using push will put the value you input inside at the end of the array

numbers.pop();
[1, 1, 2, 3, 5, 8]
//using pop will remove the last value of the array.

numbers.splice(3,1);
[1, 1, 2, 5, 8]


//removes values from the first argument (in this case 3) and as many from the second argument (in this case 1) (not sure i understand exactly)