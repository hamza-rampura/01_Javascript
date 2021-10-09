console.log("JavaScript Regular Expressions & related functions");

// let reg = /Hamza/

reg = /Hamza/g //making global regex

//reg = /Hamza/i //making case insensitive regex

console.log(reg, reg.source);

//Funcions to match with expression

let s = "This is a great day with Hamza and Hamza"

let result = reg.exec(s); // returns array when match found and null otherwise
// console.log(result);
result = reg.exec(s);

let result2 = reg.test(s); //returns true or false
// console.log(result2);

/* this for complex expressions */
let result3 = s.match(reg) //match() it will return an array of results(to get array of result, the regex should be global) or none , isko ulta lagate hai, string pe
//let result3 = reg.match(s) // this is wrong syntax!
// console.log(result3);


let result4 =  s.search(reg); // returns index of first match else -1
// console.log(result4);

// returns new replcaed string with all the replcaemnts

let result5 = s.replace(reg, "Shubham"); //to replcae all instances change regex to global, or else only first match will be replaced
console.log(result5);

/** quiz **/


