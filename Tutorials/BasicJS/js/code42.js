console.log("Fetch api in Javascript");

let myBtn = document.getElementById("myBtn");

let content = document.getElementById("content");

function getData() {
    console.log("started getData")
    let url = "test.txt";
    fetch(url).then(function(response){
        console.log("inside first then");
        return response.text(); // this will ogo to second then function as param "data"
    }).then(function(data){
        console.log("inside second then")
        console.log(data);
    })
}
console.log("before getData")
getData();
console.log("after getData")

/* POST request */

// https://api.github.com/users

/* let myBtn = document.getElementById("myBtn");

let content = document.getElementById("content");

function getData() {
    console.log("started getData")
    let url = "https://api.github.com/users";
    fetch(url).then(function(response){
        console.log("inside first then");
        return response.json();
    }).then(function(data){
        console.log("inside second then")
        console.log(data);
    })
}

function postData() {
    let url = "	http://dummy.restapiexample.com/api/v1/create";
    data=  '{"name":"hamza5845616546","salary":"123","age":"23"}',
    params = {
        method: "POST",
        header: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    }
    fetch(url, params).then(response => response.json()).then(data=> console.log(data))
}

// getData();
postData(); */