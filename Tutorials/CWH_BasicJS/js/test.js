import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/users").
then(response => {
    console.log(response)
}
)