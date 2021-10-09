console.log("Different ways to create an object");

 // basic way or object literal
let obj1  = {
    name: "Hamza",
    std: "X",
    salary: 450000
}

// console.log(obj1)

// using constructor
function Car(givenColor, givenModel, givenBrand, givenYop) {
    this.color = givenColor;
    this.model = givenModel;
    this.brand = givenBrand;
    this.yop = givenYop; 

    /* always use this keyword to define the function in object */ 
    this.rate = function() {
        return (this.yop - 2000) * 150000;
    }
}

let car1 = new Car ("green", "Alto", "Maruti", 2019);

// console.log(car1);
// console.log(car1.rate());

// using class in ES6

class Mobile {
    constructor(givenBrand, givenColor, givenPrice) {
        this.brand = givenBrand;
        this.color = givenColor;
        this.price = givenPrice;
    }

    /* htis will add function in Proto */

    discountPrice() {
        return (this.price - (5/100*this.price));
    }

    /* this will add function in object lietral */

    discountPrice1 = function() {
        return (this.price - (5/100*this.price));
    }

    /* to define utlity function */
    static ultimateTruth() {
        alert("Hamza is the best")
    }
}

let mob1 = new Mobile("OnePlus", "Teal", 10000);
// console.log(mob1.discountPrice());

// using class + inheritnace in ES6

class Case extends Mobile {
    constructor(givenBrand, givenColor, givenPrice, givenVersion) {
        super(givenBrand, givenColor, givenPrice);
        this.version = givenVersion;
    }

    greet() {
        // console.log("Hello")
    }
}

let case1 = new Case("Moto", "Black", 7000, "v12");
// console.log(case1);


let testObj = {
    name: "Hamza",
    age: 24,
    "address": "Burhani Colony"
}

console.log(testObj);
console.log(testObj.name);
console.log(testObj.address);
console.log(testObj["address"]);



/* for (const key in testObj) {
    if (Object.hasOwnProperty.call(testObj, key)) {
        console.log(`This is the key`, key);
        console.log(typeof key);
        const element = testObj[key];
        console.log(element);
        
    }
} */