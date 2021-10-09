console.log("Functions in Javascript");

let name = "Hmaza";
let thank= "Thanks for everything you do!"

function greet(name, thank = "Default value") {
    console.log(`Hey ${name}! Happy Birthday!! ${thank}`);
    return "wish done";
}

let confirm = greet(name,thank);
console.log(confirm);

/* function in var */

const mygreet = function (name, thank = "Default value") {
    console.log(`Hey ${name}! Happy Birthday!! ${thank}`);
    return "wish done";
}

mygreet("Hamza1", thank)

const myObj ={
    name: "Gamer",
    game: function(){
        return "game has been played" + Math.random() + " times"
    }
}
console.log (`I have played this game ${myObj.game()}`)

/* code from Harry */

if(1){
    i =234;
    console.log(i)
}

console.log(i);

function ui(name)
{
    i = 9;
    console.log(i);
    return `This is a ${name} ui`;
}
console.log(ui("harry"), i);
i = 15;
console.log(i, typeof i)
// const mygreet = function(name, thank='Thank You'){
//     let msg = `Happy Birthday ${name} How I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you. ${thank}!`;
//     return msg;

// }


// let name = 'SkillF';
// let name2 ='Rohan';

// let val = mygreet(name, 'Thanks a lot');
// console.log(val);


// const myobj = {
//     name: "SkillF",
//     game: function(){
//         return "GTA";
//     }
// }
// console.log(myobj.game())

// arr = ['fruit', 'vegetable', 'furniture'];

// arr.forEach(function(element, index, array) {
//     console.log(element, index)
// }); 