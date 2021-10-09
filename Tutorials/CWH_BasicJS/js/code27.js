console.log("Object Literals, Constructors and Object Oriented JavaScript");


/* // Object literal for creating objects
let car = {
    name: "maruti800",
    topSpeed: 89,
    run: function () {
        console.log("car is running");
    }
}
console.log(car.run());



// Creating constructor for cars 

function GeneralCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topspeed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} is running`);
    }
}

let car1 = new GeneralCar("nissan", 100);
let car2 = new GeneralCar("Alto", 100);
console.log(car1)
console.log(car2.run()) */

/* code from harry */

// Object Literal for creating objects
let car = {
    name: "Maruti 800",
    topSpeed: 89,
    run: function () {
        console.log("car is running");
    }
};
// we have already seen constructors like these:
// new Date();

// Creating a constructor for cars
function GeneralCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} Is Running`);
    };
    this.analyze = function () {
        console.log(
            `${this.name} car is slower by ${200 - this.topSpeed} Km/H than Mercedes`
        );
    };
}
let car1 = new GeneralCar("Nissan", 180);
let car2 = new GeneralCar("Marutu Alto", 80);
let car3 = new GeneralCar("Mercedes", 200);
console.log(car1, car2, car3);
