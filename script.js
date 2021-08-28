// VARIABLE DECLARATION
var hours = 0;
var minutes = 0;
var seconds = 0;
var count = 0;
var timer = false;

// FUNCTION FOR START BUTTON
function start() {
  
  timer = true;
  stopwatch();
}

// FUNCTION FOR STOP BUTTON
function stop() {
  startbtn.addEventListener('click', start, {once:true});
  timer = false;
}

// FUNCTION FOR RESET  BUTTON
function reset() {
  timer = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  count = 0;
  document.getElementById("hours").innerHTML = "00";
  document.getElementById("minutes").innerHTML = "00";
  document.getElementById("seconds").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
  startbtn.addEventListener('click', start, {once:true});
}

//MAIN FUNCTION
function stopwatch() {

    //LOGIC FOR INCREMENTING FROM SECONDS TO MINUTES TO HOURS
  if (timer == true) {
    count = count + 1;
    if (count == 100) {
      seconds = seconds + 1;
      count = 0;
    }
    if (seconds == 60) {
      minutes = minutes + 1;
      seconds = 0;
    }
    if (minutes == 60) {
      hours = hours + 1;
      seconds = 0;
      minutes = 0;
    }
   

    //CODE FOR SHOWING 2 DIGIT 
    var hr = hours;
    var min = minutes;
    var sec = seconds;
    var c = count;
    if (hours < 10) {
      hr = "0" + hr;
    }
    if (minutes < 10) {
      min = "0" + min;
    }
    if (seconds < 10) {
      sec = "0" + sec;
    }
    if (count < 10) {
      c = "0" + c;
    }
    document.getElementById("hours").innerHTML = hr;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
    document.getElementById("count").innerHTML = c;
    setTimeout(stopwatch, 10);
  }
}


const startbtn = document.querySelector("#start");
const stopbtn = document.querySelector("#stop");
const resetbtn = document.querySelector("#reset");

startbtn.addEventListener('click', start, {once:true});
stopbtn.addEventListener('click', stop);
resetbtn.addEventListener('click', reset);
