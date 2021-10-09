console.log("Video43 Async/Await in Javascript");

/* function hamza () {
    console.log("name of the best guy has been called!");
}

hamza(); */

async function hamza() {
    console.log("Inside the function");
    let response = await fetch("https://api.github.com/users");
    console.log("fetch has been called");
    let data = await response.json();
    console.log("line after response");
    return data;

}

console.log("before calling function");
let returned = hamza();
console.log("after calling function");
returned.then(data => console.log(data));
console.log("last line of code");

