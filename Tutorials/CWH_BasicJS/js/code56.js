console.log(`For.. of Loop vs For.. in Loop (When to use which?)`);

let people = ["Harry", "Rohan", "SkillF", "Shubham", "Vikrant"];


// **********For in loop*******

// Traditional for loop:
// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);   
// }

/* for each */

people.forEach(element => {
    console.log(element);
});


// 1. ITERATING AN OBJECT
let obj = {
    "name": "Harry",
    "language": "JavaScript",
    "hobbies": "Android app development"
}
// console.log(obj);
// 1.1 Iterating an object using Traditional for loop:
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);   
// }

// 1.2 Iterating an object using for-in loop:
/* for (let key in obj){
    console.log(key)
    console.log(obj[key]);
} */

// 2. ITERATING A STRING
// We can use for in with strings to loop through all the characters
myString = "This is my string";
for (let char in myString){
    console.log(char)
    console.log(myString[char]);
}

// Quiz: Use traditional for loop to iterate through the same string

console.log("Using traditional for loop");
for (let index = 0; index < myString.length; index++) {
    let element = myString[index];
}

// **********For of loop***********   used for Arrays and string mainly
console.log("*****************For of loop starts here**************")
people = ["Harry", "Rohan", "SkillF", "Shubham", "Vikrant"];

for(let name of people){
    console.log(name);
}

for(let name of myString){
    console.log(name);
}
