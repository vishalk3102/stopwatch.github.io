// VARIABLE DECLARATION
var hours = 0;
var minutes = 0;
var seconds = 0;
var count = 0;
var timer = false;

// FUNCTION FOR START BUTTON
function start() {
  timer = true;
  document.getElementById("start").onclick = null;
  stopwatch();
}

// FUNCTION FOR STOP BUTTON
function stop() {
  timer = false;
  document.getElementById("start").onclick = start;
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
  document.getElementById("start").onclick = start;
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
