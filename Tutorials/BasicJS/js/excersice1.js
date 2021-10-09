console.log ("WebPage Crawler In JavaScript - Exercise 1 (vid #13) - Answer in vid #18");

let a = document.links;
let arr = Array.from(a);
arr.forEach(function(element) {
    if(element.href.includes("code")) {
        console.log(element.href)
    }
});