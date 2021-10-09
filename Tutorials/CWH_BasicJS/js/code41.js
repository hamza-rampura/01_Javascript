console.log("Arrow functions in Javascript");


/* 

Creating a regular
const hamza = function ()  {
    console.log("This is the best person ever")
}

function hamza()  {
    console.log("This is the best person ever")
} */

// converting to arrow function 

// const hamza = ()=>{
//     console.log("This is the best person ever");
// }

// hamza();

// function returning something

// let greet = ()=>{
//     return "Thank you!"
// }

// remove braces and remove return // one liners

// let greet = () => "Thank you!"

// for returnign object

// let greet = () => ({greeting: "hello!"});

// for single argument functions

// let greet = params => "Good Morning " + params;

// for multiple params

let greet = (params,work)  => "Good Morning " + params + work;

console.log(greet("Hamza", "Please continue with yesterdays task!"))

