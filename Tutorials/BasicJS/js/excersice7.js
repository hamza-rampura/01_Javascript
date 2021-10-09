console.log(`Creating a Clock: Exercise 6 Solution`);


let time = document.getElementById("time");

setInterval(() => {
    updateTime();
}, 1000);

function updateTime() {
    var now = new Date();
    let timeFrame = ((now.getHours() > 12) ? "PM" : "AM");
    time.innerHTML = `Current Time: ${now.getHours()}: ${now.getMinutes()}: ${now.getSeconds()} ${timeFrame}`;
}