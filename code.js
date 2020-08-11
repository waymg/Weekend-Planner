
var time9am = document.querySelector("#am9text");
var button9am = document.querySelector("#am9Button");

var time10am = document.querySelector("#am10text");
var button10am = document.querySelector("#am10Button");

var time11am = document.querySelector("#am11text");
var button11am = document.querySelector("#am11Button");

var time12pm = document.querySelector("#pm12text");
var button12pm = document.querySelector("#pm12Button");

var time1pm = document.querySelector("#pm1text");
var button1pm = document.querySelector("#pm1Button");

var time2pm = document.querySelector("#pm2text");
var button2pm = document.querySelector("#pm2Button");

var time3pm = document.querySelector("#pm3text");
var button3pm = document.querySelector("#pm3Button");

var time4pm = document.querySelector("#pm4text");
var button4pm = document.querySelector("#pm4Button");

var time5pm = document.querySelector("#pm5text");
var button5pm = document.querySelector("#pm5Button");


button9am.addEventListener("click", function () {
  localStorage.setItem("textam9",document.getElementById("am9text").value);
  alert("Your event entered at 9am is: " + localStorage.getItem("textam9")+"  Successfully Saved!");
});

button10am.addEventListener("click", function () {
  localStorage.setItem("textam10",document.getElementById("am10text").value);
  alert("Your event entered at 10am is: " + localStorage.getItem("textam10")+"  Successfully Saved!");
});

button11am.addEventListener("click", function () {
  localStorage.setItem("textam11",document.getElementById("am11text").value);
  alert("Your event entered at 11am is: " + localStorage.getItem("textam11")+"  Successfully Saved!");
});

button12pm.addEventListener("click", function () {
  localStorage.setItem("textpm12",document.getElementById("pm12text").value);
  alert("Your event entered at 12 pm is: " + localStorage.getItem("textpm12")+"  Successfully Saved!");
});

button1pm.addEventListener("click", function () {
  localStorage.setItem("textpm1",document.getElementById("pm1text").value);
  alert("Your event entered at 1 pm is: " + localStorage.getItem("textpm1")+"  Successfully Saved!");
});

button2pm.addEventListener("click", function () {
  localStorage.setItem("textpm2",document.getElementById("pm2text").value);
  alert("Your event entered at 2 pm is: " + localStorage.getItem("textpm2")+"  Successfully Saved!");
});

button3pm.addEventListener("click", function () {
  localStorage.setItem("textpm3",document.getElementById("pm3text").value);
  alert("Your event entered at 3 pm is: " + localStorage.getItem("textpm3")+"  Successfully Saved!");
});

button4pm.addEventListener("click", function () {
  localStorage.setItem("textpm4",document.getElementById("pm4text").value);
  alert("Your event entered at 4 pm is: " + localStorage.getItem("textpm4")+"  Successfully Saved!");
});

button5pm.addEventListener("click", function () {
  localStorage.setItem("textpm5",document.getElementById("pm5text").value);
  alert("Your event entered at 5 pm is: " + localStorage.getItem("textpm5")+"  Successfully Saved!");
});


// time maintainance
const rows = document.getElementsByClassName("row");

let currentHour = parseInt(moment().format('H'));

Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === rowHour) {
      setColor(row, "red");
     
    } else if (currentHour < rowHour) {
      setColor(row, "green");
      
    } else if (currentHour > rowHour) {
      setColor(row, "grey");
      
    } else {
      setColor(row, "white");
      
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}
