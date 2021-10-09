console.log("More on JavaScript Events");
let btn = document.getElementById("btn");
/* btn.addEventListener('click', func1);
btn.addEventListener('dblclick', func2);

function func1(e) {
    console.log ("Thanks for clicking", e);
}

function func2() {    
    console.log ("Going to Amazon.in in 5");
    setTimeout(function(){ window.open("https://amazon.in"); }, 3000);
}
 */

window.addEventListener('mousemove', function(e){
    console.log("inside function");
    console.log(e.offsetX % 255,e.offsetY % 255);
    console.log(10%10);
    // document.body.style.backgroundColor = "rgb(100, 100, 72)";
    let bgcolor = `rgb(${e.offsetX % 255} ,${e.offsetY % 255}, 72)`
    document.body.style.backgroundColor = bgcolor;
})


/* code from Harry */

// let btn = document.getElementById('btn');
// btn.addEventListener('click', func1);
// // btn.addEventListener('mousedown', func3);
// btn.addEventListener('dblclick', func2);

// function func1(e) {
//     console.log("Thanks", e);
//     e.preventDefault();
// }

// function func2(e) {
//     console.log("Thanks its a double click", e);
//     e.preventDefault();
// }

// function func3(e) {
//     console.log("Thanks its a mouse down ", e);
//     e.preventDefault();
// }
// document.querySelector('.no').addEventListener('mouseenter', function(){


//     console.log('You entered no')
// })

// document.querySelector('.no').addEventListener('mouseleave', function(){
//     console.log('You exited no')
// })

// document.querySelector('.container').addEventListener('mousemove', function(e){
//     console.log(e.offsetX, e.offsetY);
//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX},154)`;
//     console.log('You triggered mouse move event')
// })
