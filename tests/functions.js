
// FUNCTION - ORGANIZE THE CODE INTO REUSABLE CODE

// DECLARATIVE

function helloOne(){
    console.log("Hello one!")
}
helloOne() // you need to call the function // you can put before the block and will be invoked

// Anonoymus

const helloTwo = function(){
    console.log("Hello two!")
}
helloTwo();  // if you will put before the block it wont work

// ES6 or arrow function

const helloThree = () =>{
    console.log("Hello three!")
}
helloThree()

//Function with arguments
function printName(name, lastName){  //parameters
    console.log(name + ' ' + lastName)
}
printName('John', 'Smith');  //arguments

// Function with return

function multiplyByTwo(number){
    const result = number * 2
    return result
}
const myResult = multiplyByTwo(5);
console.log(myResult)

// import function
import {printAge} from '../helpers/printHelper.js'
printAge(5)

//import everything 
import * as helper from '../helpers/printHelper.js'
helper.printAge(10)

function devideBy(number){
    const result = number / 5
    return result
}
const myResult1 = devideBy(25)
console.log(myResult1);

function multiplyBy(number){
    const result = number * 25
    return result
}
const myResult2 = multiplyBy(25)
console.log(myResult2);


