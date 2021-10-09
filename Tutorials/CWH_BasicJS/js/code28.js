console.log("Object Prototype In javascript");

// object literal : object.prototype

/* let obj = {
    name: "hamza",
    address: "Pune",
    age: 23
}
console.log(obj)

function egConst(gname, gaddress, gage) {
    this.name= gname;
    this.address=gaddress;
    this.age= gage;
}

let obj1 = new egConst("harry", "mars", 48)
console.log(obj1) */

/* Code from Harry */

// Object literal : Object.prototype
let obj = {
    name: "harry",
    channel: "Code With Harry",
    address: "Mars"
}

function Obj(givenName){
    this.name = givenName
}

Obj.prototype.getName = function (){
    return this.name;
}

Obj.prototype.setName = function (newName){
  this.name = newName;
}

let obj2 = new Obj("Rohan Das");
console.log(obj2);




