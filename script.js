const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds  = document.querySelector(".seconds");
const amorpm  = document.querySelector(".amorpm");

function clock(){
const date = new Date();

let hoursTime = date.getHours();
let minutesTime = date.getMinutes();
let secondsTime = date.getSeconds();


if(hoursTime > 12){
    hoursTime -= 12;
    amorpm.innerHTML = "&nbspPM";
} else{
    amorpm.innerHTML = "&nbspAM";
}

if(hoursTime < 10){
    hoursTime = "0" + hoursTime;
}
if(minutesTime < 10){
    minutesTime = "0" + minutesTime;
}
if(secondsTime < 10){
    secondsTime = "0" + secondsTime;
}

hours.textContent = hoursTime;
minutes.textContent = minutesTime;
seconds.textContent = secondsTime;


requestAnimationFrame(clock);
}
requestAnimationFrame(clock);

// To check in Console for current time.
// new Date().toLocaleTimeString()







