console.log("ES6 Classes and Inheritance");

class Employee {
    constructor(givenName, givenSalary, gievnExp){
        this.name = givenName;
        this.salary = givenSalary;
        this.exp = gievnExp;
    }

    slogan() {
        return `Hi, This is ${this.name} here. And my company sucks!!`
    }

    joiningYear() {
        return 2020 - this.exp;
    }
    // use this function without creating an object.
    static add(a, b) {
        return a + b;
    }
}

let emp1 = new Employee ("Hamza", 100000, 2);
console.log(emp1);
console.log(emp1.slogan());

console.log(Employee.add(40, 500));

//inheitance 

class Programmer extends Employee {
    constructor(givenName, givenSalary, gievnExp, givenLanguage) {
        super(givenName, givenSalary, gievnExp);
        this.language = givenLanguage;
    }

    favlanguage() {
        if(this.language == "Python") { return `Pyhton`}
        else {return `JS`}
    }

    static multiply(a,b) {
        return a * b;
    }
}

let rohan = new Programmer ("Rohan", 40000, 5, "Python");
console.log(rohan);
console.log(Programmer.multiply(40, 40));




