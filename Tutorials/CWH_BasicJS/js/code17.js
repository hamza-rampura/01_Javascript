console.log("Events & Event Object In JavaScript");
document.getElementById(`heading`).addEventListener('click', function(e){
// window.addEventListener('click', function(e){
    // console.log(e);
    let var1 = e.target;
    // console.log(var1)
    // console.log(var1.id);
    console.log(e.offsetX, e.offsetY) // to display with respect to the target element
    console.log(e.clientX, e.clientY) // to display cordinates of entire browser window
    // window.open('http://www.amazon.in');
})


/* code from harry */

console.log("This is tutorial 17 on events");

document.getElementById("heading").addEventListener("click", function(e) {
  let variable;
  console.log("You have clicked the heading");
  variable = e.target;
  variable = e.target.className;
  variable = Array.from(e.target.classList);

  variable = e.target.id;
  variable = e.offsetX;
  variable = e.offsetY;
  variable = e.clientX;
  variable = e.clientY;
  console.log(variable);
  // location.href = '//codewithharry.com'
});