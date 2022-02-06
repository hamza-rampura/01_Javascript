// create object using a constrcutor

/* function GeneralCar(gname, gspeed) {
    this.name = gname;
    this.speed = gspeed;
    this.run = function() {
        console.log(`Top speed is ${this.speed * 2.5}`);
        return this.name;
    }
}

let car1 = new GeneralCar("maruti", 100);
let car2 = new GeneralCar("nissan", 120);

console.log(car1.run(), car2.run()); */

// object using literal - prototype

// constructor

/* function Obj1(gname, gage) {
    this.name = gname;
    this.age = gage;
}

Obj1.prototype.getName = function () {
    console.log("hello")
}

let obj1 = new Obj1("Hamza", 24);

obj1.getName(); */

/* let objx = {
    name = "hamza",
    age = 20
} */

// prototype inheritance

/* const proto = {
    slogan: function () {
        console.log("This is the best company")
    },
    run: function(gName) {
        this.name = gName;
    }
}

let obj1 = Object.create(proto);
obj1.name = "beforeRun";
console.log(obj1);
obj1.run("afterRun");
console.log(obj1); */

//ES6 Classes and Inheritance | JavaScript Tutorial In Hindi #31

/* class Employee {
    constructor(gName,gExp,gDept) {
        this.name = gName;
        this.exp = gExp;
        this.dept = gDept; 
    }

    greet() {
        console.log("Hello All. Greetings!")
    }

    static add(a,b) {
        return a + b;
    }
}

class Programmer extends Employee {
    constructor(gName,gExp,gDept,gLang) {
        super(gName,gExp,gDept);
        this.lang = gLang;
    }

    favLang() {
        console.log(`My fav language is ${this.lang}`);
    }

    static product(a,b) {
        console.log(a*b)
    }
}

let emp1 = new Employee("Hamza", 56, "R&D");
console.log(emp1);

let emp2 =  new Programmer("Hamza", 56, "UI", "Python");
console.log(emp2);

emp2.favLang();

Programmer.product(20,40); // using Class, obj not required */

// Call back function, random color implemented at intervals

/* setInterval(() => {
    document.body.style.backgroundColor = getRandomColor();
}, 1500);

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  } */

/* Promise */

/* function func1() {
  return new Promise(function (res, rej) {
    setTimeout(() => {
      const error = true;
      if (!error) {
        console.log("Your promsie has been resolved");
        res();
      } else {
          console.log("your promise has been rejected");
          rej();
      }
    }, 2000);
  });
}

func1().then(function(passed) {
    console.log("Hmaza:thanks for resolving");
}).catch(function(error) {
    console.log("Hamza: not resoslved: very bad bro" + error);
}); */

/*********** */
/*   */

/* //through constructor
function Students(gname, gsubject) {
    this.name = gname;
    this.subject = gsubject;
} */

/* let stud1 = new Students("Hamza", "Physilogy");
let stud2 = new Students("Jazy", "Song wraps")

const students = [stud1, stud2];

function enrollStudent(newStudent) {
    return new Promise((res,rej)=> {
        setTimeout(() => {
            let error = false;
            if(!error) {
                console.log("student enrolled");
                students.push(newStudent);
                res();
            } else {
                console.log("some error occured, student not enrolled");
                rej("apologies");
            }
            
        }, 3000);
    })
}

function printStudent() {
    setTimeout(() => {
        console.log(students)
    }, 1000);
}

let newStudent = new Students("Sunny", "Python") // student to be pushed

enrollStudent(newStudent).then(()=>{
    console.log("Promise resolsved");
    printStudent();
}).catch((error)=>{
    console.log("error occured promise rejected " + error);
    printStudent();
}) */

// Arrow functions 

/* let greet = () => {
    return "Good Morning!"
} */


/* one liners without braces */

// let greet = () => "Good Morning!";

/* function greet1() {
    console.log(this)
}

let greet = () => {
    console.log(this);
    return "Good Morning!"
}

console.log(greet(), greet1()); */

// fetch API 

/* function getData() {
    return new Promise((res,rej) => {
        let error = false; 
        if(!error) {
            console.log("promise resolved");
            res("Hurray");
        } else {
            console.log("Promise rejected");
            rej();
        }
    })
}

getData().then((s)=>{
    console.log("User: Function completed succesfully. " + s)
}).catch(()=> {
    console.log("User: Function incomplete.")
}); */

//

/* function getData() {
    const url = "hamza.txt";
    fetch(url).then((response)=> {
        console.log("Inside 1st then. Success");
        return response.text();
    }).then((data) => {
        console.log("Inside second then")
        console.log(data);
    }).catch(()=>{
        console.log("promise unresolved.")
    })
}

console.log("before getData");
getData();
console.log("After getData"); */

/* get request using fecth API */

/* function getData() {
    const url = "http://dummy.restapiexample.com/api/v1/employees";
    fetch(url).then((response)=> {
        console.log("Inside 1st then. Success");
        return response.json();
    }).then((data) => {
        console.log("Inside second then")
        console.log(data);
    }).catch(()=>{
        console.log("promise unresolved.")
    })
} */

/* function postData() {
    const url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"Harry1456465465","salary":"123","age":"23"}';
    params = {
        method: "POST",
        header: {
            "Content-type": "application/json"
        },
        body: data
    };
    fetch(url,params).then(response=> response.json()).then(data => console.log(data)).catch(()=>{})
} */

/* function postData(){
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"hamza786515253","salary":"123","age":"23"}'
    params = {
        method:'post',
        header: {
            'Content-Type': 'application/json'
        },
        body: data
    }
    fetch(url, params).then(response=> response.json())
    .then(data => console.log(data)
    )
} */

/* console.log("before getData");
getData();
console.log("After getData"); 
// postData();*/


// Async & Await


let url = "http://dummy.restapiexample.com/api/v1/employees";

/* async function promFunc() {
    console.log("inside function");
    const response = await fetch(url);
    console.log("after fetch: waiting for response");
    const data = await response.json();
    return data;
}


console.log("before calling function");
let promise = promFunc();
console.log("after calling function");
console.log(promise)
promise.then(data => console.log(data));
console.log("last line of JS"); */

/* test to write fecth api */

/* url = "hamza.txt";

fetch(url).then((response) => {
    return response.json();
}).then(data => {
    console.log(data);
}) */

// error handling try and catch

/* try {
    console.log("no error")
    eafaefaef
} catch (error) {
    console.log(error)
} finally {
    console.log("finally we will run this.")
}
 */

// iterators 

/* const myArr = ["Banana", "Grapes", "Eggs", "Kiwi"];

function arrIterator(arr) {
    let nextIndex = 0;
    return {
        next: function () {
            if (nextIndex < arr.length) {
                // We will return below object
                return {
                    value: arr[nextIndex++],
                    done: false
                }
            }
            else {
                // We will return below object with only done
                return {
                    done: true
                }
            }
        }
    }
}

const iterator = arrIterator(myArr);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); */

// Generators 
 
/* function* randomNumGen() {
   while(true) {
       yield Math.floor(Math.random()*10);
   }
}

const generator = randomNumGen();
console.log(generator.next()); */

// for in vs for of 
/* const obj = {
    first: 134,
    second: 255,
    third: 367,
    fourth: 433
}

const arr = [8,223,4,55,6,7];

const str = 'Lets Code';

for (ele in obj) {
    console.log(obj[ele]);
}

for (ele in arr) {
    console.log(ele);
}

for (ele in str) {
    console.log(ele);
} */

/* for (ele of obj) {
    console.log(obj[ele]);
}

for (ele of arr) {
    console.log(ele);
}

for (ele of str) {
    console.log(ele);
} */

// Maps *********/

/* let map1 = new Map();
// console.log(map1);

const key1 = "myStr", key2 = {}, key3 = function(){};

map1.set(key1, "This is a string");
map1.set(key2, "This is a empty object");
map1.set(key3, "This is an empty function");
console.log(map1);

// getting the values from a map

let value = map1.get(key1);
console.log(value)

// get the size of map
console.log(map1.size);

//iterating using for of to get keys and values

for(let [key, value] of map1) {
    console.log(key, value);
} 

// get only keys

for(let key of map1.keys()) {
    console.log("key is " + key)
}

// get only values

for(let val of map1.values()) {
    console.log("value is " + val)
}

// using foreach 

map1.forEach((values,keys) => {
    console.log(values,keys);
})
 */

//Set

//used to store unique values

/* let set1 = new Set();
set1.add("This");
set1.add("Is a Set");
console.log(set1);
// use constructor to initialize
let set2 = new Set([10, 24, 55, 10, 52, "Hamza", "Ram", {name: "Object 1"}]); // constructor takes and 
let set3 = new Set("Emaya");
console.log(set2, set3);

//check if there is any element in array

console.log(set1.has("This"));

// Modify a set

set1.delete("This");
console.log(set1);

//Iterating a set using for of

for(item of set2) {
    console.log(item)
}

set2.forEach((ele) => {
    console.log(ele)
});

let cArray = Array.from(set2);
console.log(cArray); */

// object

/* let obj1 = {
    name: "Hamza",
    age: 24,
    run: function() {
        console.log("Hamza is running!");
        return true;
    }
}

let keys = Object.keys(obj1);

console.log(obj1, obj1.run());
console.log(obj1["name"]); // correct
obj1.name = "Harry" // correct
obj1["name"] = "Harry1223"; // correct
console.log(obj1, keys);
//obj1.keys[1] // incorrect */

// Filter vs Map 

/* let arr1 = [1,2,3,4,5,6];
function check(e) {
    console.log(e>2);
    return true;
}
console.log(arr1.map(check)); */

// destructuring

/* let [a,b,c,d] = [10,20,30,40];
console.log(a,b,c,d); */

/* let [a,b,...c] = [10,20,30,40];
console.log(a,b,c); */

/* let [a,b,c,d,e] = [10,20,30,40];
console.log(a,b,c,d,e); */

/* let {a: alpha, b, c, d} = {a:10, b:20, c:30, d:"Hamza"}
console.log(alpha,b,c,d) */

/* let laptop = {
    name: "Dell",
    make: "2021",
    cost: 78000
};

let {name, make, cost} = laptop;
console.log(name, make, cost) */

/* let c = [10,20,30,40];
let [a,b] = [...c]
console.log(a); */

// Rest vs Spread

/* let a = 20;
let b = 40;
let [a1, b1] = [a,b]

// let c = [10,20,30,40];
// let [...a] = c;
// let [a,b] = [...c]
console.log(a1,b1); */

// closure 

let outerFun = (a) => {
    let b = 10;
    let innerFun = () => {
        let sum = a + b;
        console.log(sum);
    }
    return innerFun;
}

let inner = outerFun(10);

inner();







