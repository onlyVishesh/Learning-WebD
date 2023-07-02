let fruits = ['Apple', 'Banana', 'Tomato']
console.log(fruits);
// to display specific element

console.log(fruits[1])

// To add element at end - push()

fruits[3] = 'Mango' 
// or
fruits.push('Cheery')
console.log(fruits);

// To add element at start - unshift()

fruits.unshift('Orange')
console.log(fruits);

// To remove last element - pop()

fruits.pop();
console.log(fruits);

// To remove first element - shift()

fruits.shift();
console.log(fruits);

//to get length/no of element of array - length
let length = fruits.length;
console.log(length)

// to get index of an element - indexof('element)
let index = fruits.indexOf("Banana")

// looping method 1 - for loop

// forward

for (let i = 0; i<fruits.length; i++) {
    console.log(fruits[i])
}

// backword

for (let i=fruits.length-1; i>=0; i--) {
    console.log(fruits[i])
}

// looping method 2 - for up

for (let fruit of fruits ){
    console.log(fruit)
}

// sorting 
let languages = ['Python', 'Java', 'Kotlin', 'C', 'Javascript'];

    // ascending
    languages = languages.sort();
    console.log(languages);

    // descending
    languages = languages.sort().reverse();
    console.log(languages);



// 2d array
// method 1

let vegetables = ['carrat','onion','patato'];
let stationary = ['pen','pencel', 'eraser'];
let books = ['let us c', 'hmm', 'I can see you'];

let lists = [vegetables,stationary,books];
console.log(lists);

for (let list of lists){
    for (let item of list){
        console.log(item);
    }
}

// to alter element 
lists[1][0] = 'sharpner'
console.log(lists)


// spread operator - ... 
//  it helps to give input array element as argument in functions

console.log(...fruits)  //it will take one element out of array at a time

let marks = [12,4,23,123,54,32,44,56,54,57]
maxMarks = Math.max(...marks)
console.log(maxMarks)

//  Append using spread operator

let subject = ['english', 'chem', 'maths','ME','Soft sklls']
let additionalSubject = ['CPP', 'Soft skill lab']

subject.push(...additionalSubject)
console.log(subject)

// rest parameter - to represent indefinite no of parameter

let a = 2;
let b = 4;
let c = 8;
let d = 5;
let e = 2;

console.log(sum(a,b,e));
console.log(sum(a,e,c,d));


function sum(...numbers) { // convert argument to array
    let total = 0;
    for (let i of numbers){
        total += i;
    }
    return total;
}

function tax(basic,...numbers) { // convert argument to array and should be at last
    let total = 0;
    for (let i of numbers){
        total += i;
    }
    return total+basic;
}

let taxa = 2;
let taxd = 5;
let taxc = 8;
let taxb = 4;
let taxe = 2;

console.log(sum(10,taxa,taxb,taxe));
console.log(sum(20,taxa,taxe,taxc,taxd));


// callback function - a function passed as a argument to another function
// basic method
// let total = totalSum(2,4);
// displayToDom(total)
// displayToConsole(total)


// function totalSum(x,y) {
//     return x+y
// }

// function displayToDom(output){
//     document.getElementById('total').innerHTML =`Your total is ${output}`
// }
// function displayToConsole(output){
//     console.log(output)
// }

// callback method
// Ensure that a fn is not going to run before a task is completed
// Help us develop asynchronous code that help us avoid errors

totalSum(2,4,displayToDom);
totalSum(2,4,displayToConsole);


function totalSum(x,y,callbackFN) {
    let result = x+y
    callbackFN(result)
}

function displayToDom(output){
    document.getElementById('total').innerHTML =`Your total is ${output}`
}
function displayToConsole(output){
    console.log(output)
}

// forEach - executes a provided callback fn once for each array element
// it provides 

let students = ['tomato', 'potato','carrot', 'pineapple']

// using forEach to uppercase first letter of each name element,index and array

students.forEach(capitalize)
students.forEach(print)

function capitalize(element,index,array ) {
    array[index] = element[0].toUpperCase() + element.substring(1)
    
}

function print(element) {
    console.log(element)
}

// map() - executes a provided callback fn once for each array element AND creates a new array

let no = [1,34,5,6,7,8,990,3]
let sq = no.map(square) // store to new array
sq.forEach(print) // doesn't store

function square(element) {
    return element*element
}

// filter() - create a new array with all elements that pass the provided test in form of function

let ages = [12,4,18,19,23,47]
let adult = ages.filter(checkAge)
adult.forEach(print)

function checkAge(element) {
    return element >= 18;
    
}

// reduce() - reduce an array to a single value
let prices = [12,4,67,43,23,456,42]
let total = prices.reduce(checkOut)
console.log(total)

function checkOut(total, element) {
    return total+element
}

// 