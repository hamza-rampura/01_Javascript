console.log(`JavaScript Destructuring`);

let a,b;

[a, b]=  [34, 564];
console.log(a, b);

// destructuring array

[a, b, c,d,...e] = [10,20,30,40,50,60,7,50,80,90,150];
console.log(a,b,c,d,e);
console.log(e);

//w/o destrucuring 
[a, b, c,d,e] = [10,20,30,40,50,60,7,50,80,90,150];
console.log(e);

// destructuring object


/*code from harry */

/* console.log('This is tutorial 60');
// Destructuring in JavaScript

let a, b;
[a, b] = [34, 564];
// console.log(a, b);

[a, b, c, ...d] = [1,2,3,4,5,6,7,8,9,10, 11, 12, 13];
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)


// Array Destructuring
({a, b, c, ...d} = {a: 34, b:345, c:67, d:45, e:34})
// console.log(a, b, c, d)

const fruits = ['Apple', 'Bananas', 'Mangoes'];
[a, b, c] = fruits;
// console.log(a, b, c)


// Object Destructuring
const laptop ={
    model: "HP Pavilion",
    age: "23 days",
    gender: "Male",
    net: 1233,
    start: function (){console.log('started');}
    }

const {model, age, gender, net, start} = laptop;
console.log(model, age, gender, net, start);
start() */