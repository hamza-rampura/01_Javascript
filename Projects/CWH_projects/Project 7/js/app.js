
console.log("Project 7 - Calculator")

let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let screenValue = "";
for (const button of buttons) {
    button.addEventListener('click',(e)=> {
        let buttonText = e.target.innerText;
        console.log(buttonText);
        if(buttonText == "X") {
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == "C") {            
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == "←") {            
            screenValue = screenValue.substring(0, screenValue.length - 1);
            screen.value = screenValue;
        }
        else if(buttonText == "=") {
            screen.value = eval(screenValue);
            screenValue = screen.value;
        }
        else if(buttonText == "test") {
            screenValue = screen.value;
        }
        else {            
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}