console.log("Excersice 6");
//2021 10 03 00:45:00

let alarmSubmit = document.getElementById("alarmSubmit");
var audio = new Audio("../audio/test.mp3");
alarmSubmit.addEventListener("click", setAlarm);

// fucntio to set alarm
function setAlarm(e) {
  e.preventDefault();
  let alarm = document.getElementById("alarm");
  let alarmDate = new Date(alarm.value);
  console.log(`Setting alarm for ${alarmDate}...`);
  let now = new Date();
  console.log(now);
  let timeToAlarm = (alarmDate - now);
  console.log(alarmDate - now);
  if (timeToAlarm >= 0) {
    setTimeout(() => {
      ringBell();
    }, timeToAlarm);
  }
}

// function to play alarm ringtone

function ringBell() {
  console.log("ringing now")
  audio.play();
}

