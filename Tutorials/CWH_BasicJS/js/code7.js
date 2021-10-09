console.log("Arrays and Objects In JavaScript");

const marks = [10, 20, 80, 90, 100];
const fruits = ["mango", "orange", "banana"];
const mixed = ["str", 43, [40,80,90]];
const arr = new Array(23,78,91, "Hamza")
console.log(arr);
console.log(mixed);
console.log(fruits);
console.log(fruits[1]);
console.log(Array.isArray(arr));
arr[0] = "23 Replaced";
console.log(arr);
console.log(typeof marks);
marks[3] = 45;
console.log(marks);
marks.push(150);
console.log(marks);
// marks = [40, 50, 60] not possible since declared with const
marks.concat([45, 50]);
console.log(marks)

// code from harry 

console.log('We are in tut7.js and lets discuss about arrays');
let marks = [34, 23, 24, 93 ,73, 25];
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 89, [3, 5]];

const arr = new Array(23,123,21, 'Orange');
// console.log(marks);
// console.log(mixed);
// console.log(fruits[1]);

// console.log(arr.length);
// console.log(Array.isArray('dfdf'));
arr[0] = 'harry';
let arrelement = arr[0];
// console.log('element :', arrelement);
// console.log(arr);

let value = marks.indexOf(73);
// console.log(value)

// Mutating or Modifying arrays
// marks.push(3564);
// marks.unshift(1009);
// marks.pop()
// marks.shift()
// marks.splice(2, 3);
// marks.reverse()
let marks2 = [1, 2,3, 7]
marks = marks.concat(marks2);
// console.log(marks);

let myobj = {
    'first name': 'harry', 
    channel: 'CodeWithHarry',
    isActive: true,
    marks: [1,5,3,6]
}

console.log(myobj)
console.log(myobj['channel'])
console.log(myobj.channel)
