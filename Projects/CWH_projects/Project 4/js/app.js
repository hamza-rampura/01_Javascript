
console.log("Project 4 - Form Validation using Regular Expressions ")

const username = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
$("#failed").hide();
$("#success").hide();
let valid = 0;

username.addEventListener("blur", () => {
    let regex = /^[a-zA-Z]([0-9a-zA-Z\s]){2,20}$/;
    let str = username.value;
    console.log(regex,str) 
    if(regex.test(str)) {
        console.log("name is valid");
        username.classList.remove("is-invalid");
        valid += 1;
        console.log(valid)
    } 
    else {
        console.log(`invalid name`);
        username.classList.add("is-invalid")
    }
}
)

email.addEventListener("blur", () => {
    let regex = /^([\-\._a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]+)$/;
    let str = email.value;
    console.log(regex,str) 
    if(regex.test(str)) {
        console.log("email is valid");
        valid += 1;
        console.log(valid)
    } 
    else {
        console.log(`invalid email`);
        email.classList.add("is-invalid")
    }
}
)

phone.addEventListener("blur", () => {
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex,str) 
    if(regex.test(str)) {
        console.log("phone is valid")
        phone.classList.remove("is-invalid");
        valid += 1;
        console.log(valid)
    } 
    else {
        console.log(`invalid phone`);
        phone.classList.add("is-invalid")
    }
}
)

let submit = document.getElementById("submit");
let success = document.getElementById("success");
let failed = document.getElementById("failed");
submit.addEventListener("click",(e)=> {
    e.preventDefault();
    if(valid>=3){
        console.log("submitted");
        // success.classList.add("show");
        $("#success").show();
        $("#failed").fade();
    }else {
        console.log("not submitted");
        // failed.classList.add("show");
        $("#failed").show();
        $("#success").fade();
    }
})

/* hide and show of alert is in WIP */