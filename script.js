var date = document.createElement("input");
date.setAttribute("type", "date");
date.id = "dob";

var button = document.createElement("button");
button.setAttribute("type", "button");
button.className = "btn btn-primary";
button.innerHTML = "click me";
button.addEventListener("click", date_data);

var b = document.createElement("br");

document.body.append(date, button, b);

function date_data() {
  var input = document.getElementById("dob").value;
  var input_date = new Date(input);
  var currentdate = new Date();
  // console.log(currentdate);

  var millisecdiff = parseInt(currentdate.getTime() - input_date.getTime());
  // console.log(millisecdiff);

  var secondsdiff = Math.floor(millisecdiff / 1000);
  // console.log(secondsdiff);

  var minutesdiff = Math.floor(secondsdiff / 60);
  // console.log(minutesdiff);

  var hoursdiff = Math.floor(minutesdiff / 60);
  // console.log(hoursdiff);

  var daydiff = Math.floor(hoursdiff / 24);
  // console.log(daydiff);

  var yeardiff = currentdate.getFullYear() - input_date.getFullYear();
  // console.log(yeardiff);

  var month_diff =
    yeardiff * 12 - (currentdate.getMonth() - input_date.getMonth());
  // console.log(month_diff);

  var a1 = document.createElement("span");
  a1.innerHTML = `Current Date : ${currentdate}`;
  var b1 = document.createElement("br");
  var a2 = document.createElement("span");
  a2.innerHTML = `Milliseconds : ${millisecdiff}`;
  var b2 = document.createElement("br");
  var a3 = document.createElement("span");
  a3.innerHTML = `Seconds : ${secondsdiff}`;
  var b3 = document.createElement("br");
  var a4 = document.createElement("span");
  a4.innerHTML = `Minutes : ${minutesdiff}`;
  var b4 = document.createElement("br");
  var a5 = document.createElement("span");
  a5.innerHTML = `Hours : ${hoursdiff}`;
  var b5 = document.createElement("br");
  var a6 = document.createElement("span");
  a6.innerHTML = `Days : ${daydiff}`;
  var b6 = document.createElement("br");
  var a7 = document.createElement("span");
  a7.innerHTML = `Months : ${month_diff}`;
  var b7 = document.createElement("br");
  var a8 = document.createElement("span");
  a8.innerHTML = `Years : ${yeardiff}`;

  document.body.append(
    a1,
    b1,
    a2,
    b2,
    a3,
    b3,
    a4,
    b4,
    a5,
    b5,
    a6,
    b6,
    a7,
    b7,
    a8
  );
}

// function foo() {
//   var b = prompt("Enter Your Name");
//   var res = document.createElement("span");
//   res.innerHTML = `Your Name:${b}`;
//   document.body.append(res);
// }

// var a = document.createElement("div");
// a.innerHTML = "This is div";

// var button = document.createElement("button");
// button.setAttribute("type", "button");
// button.setAttribute("onclick", "foo()");
// button.innerHTML = "submit";

// document.body.append(a, button);
