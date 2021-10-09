
console.log(`JavaScript Sets`);
// Set stores unique values
let mySet = new Set();

// adding values to Set

mySet.add('this');
mySet.add('my name');

mySet.add(true);
mySet.add(1);
mySet.add('this');
console.log(`The set looks like this`, mySet);

let mySet2 = new Set(["this", "hamza", true, 0, 1, {}]); // need to give everything in array for Set constructor
console.log(mySet2);

console.log(mySet.has("this")); // return true/false

mySet.delete("my name"); //delete one element

console.log(mySet)


// iterating a set

for (const item of mySet) {
    console.log(item)
}

mySet.forEach(element => {
    console.log(element);
});

// quiz complete 
let arr = Array.from(mySet);
console.log(arr);

/* code from harry */

/* console.log('This is tutorial 58');

// Set stores unique values
const mySet = new Set();  // Initialize an empty set
console.log('The set looks like :',mySet);

// Adding values to this set
mySet.add('this');
mySet.add('My name');
mySet.add('this');
mySet.add('that');
mySet.add(34);
mySet.add(true);
mySet.add(false);
mySet.add('that2');
console.log('The set looks like this now:',mySet);

// Use a constructor to initialize the set
let mySet2 = new Set([1, 45, 'this', false, {a:4, b:8}, 'this']);
console.log('New set:',mySet2);


console.log(mySet.size); // Get the size of the set

console.log(mySet.has(346)); // Check whether set has 346 or not

console.log('Before removal', mySet.has('that2'));
mySet.delete('that2'); // Remove an element from the set
console.log('After removal', mySet.has('that2'));


// Iterating a set
// for(let item of mySet){
//     console.log('Item is  :', item );
// }

mySet.forEach((item)=>{
    console.log('Item is  :', item );
})

// Quiz: Can you use Array.from(mySet) to convert set into an array? */