console.log("Learning AJax | Tutorial 35");

let fetchBtn = document.getElementById("fetchBtn");

fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
    console.log("andar aa gaye")
    // instantiate the object
    const xhr = new XMLHttpRequest;

    // Open the object
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    // USE THIS FOR POST REQUEST
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');


    // what to do on progress optional ...
    xhr.onprogress = function() {
        console.log("in progress");
    }
    // what to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            console.log(this.responseText)
        }
        else {
            console.error("Some error occured")
        }
    }
    console.log(xhr)

    // send the request
    xhr.send();
    console.log("We are done")

}