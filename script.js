// This is a set of variable convertions from the html to the java to push classes later

const hour0 = document.getElementById("hour-0")
const hour1 = document.getElementById("hour-1")
const hour2 = document.getElementById("hour-2")
const hour3 = document.getElementById("hour-3")
const hour4 = document.getElementById("hour-4")
const hour5 = document.getElementById("hour-5")
const hour6 = document.getElementById("hour-6")
const hour7 = document.getElementById("hour-7")
const hour8 = document.getElementById("hour-8")
const hour9 = document.getElementById("hour-9")
const hour10 = document.getElementById("hour-10")
const hour11 = document.getElementById("hour-11")
const hour12 = document.getElementById("hour-12")
const hour13 = document.getElementById("hour-13")
const hour14 = document.getElementById("hour-14")
const hour15 = document.getElementById("hour-15")
const hour16 = document.getElementById("hour-16")
const hour17 = document.getElementById("hour-17")
const hour18 = document.getElementById("hour-18")
const hour19 = document.getElementById("hour-19")
const hour20 = document.getElementById("hour-20")
const hour21 = document.getElementById("hour-21")
const hour22 = document.getElementById("hour-22")
const hour23 = document.getElementById("hour-23")

// This code would have been for saving but i couldn't figure it out

const saving1 = document.getElementById('theSaveBtn1')
const saving2 = document.getElementById('theSaveBtn2')
const saving3 = document.getElementById('theSaveBtn3')
const saving4 = document.getElementById('theSaveBtn4')
const saving5 = document.getElementById('theSaveBtn5')
const saving6 = document.getElementById('theSaveBtn6')
const saving7 = document.getElementById('theSaveBtn7')
const saving8 = document.getElementById('theSaveBtn8')
const saving9 = document.getElementById('theSaveBtn9')
const saving10 = document.getElementById('theSaveBtn10')
const saving11 = document.getElementById('theSaveBtn11')
const saving12 = document.getElementById('theSaveBtn12')
const saving13 = document.getElementById('theSaveBtn13')
const saving14 = document.getElementById('theSaveBtn14')
const saving15 = document.getElementById('theSaveBtn15')
const saving16 = document.getElementById('theSaveBtn16')
const saving17 = document.getElementById('theSaveBtn17')
const saving18 = document.getElementById('theSaveBtn18')
const saving19 = document.getElementById('theSaveBtn19')
const saving20 = document.getElementById('theSaveBtn20')
const saving21 = document.getElementById('theSaveBtn21')
const saving22 = document.getElementById('theSaveBtn22')
const saving23 = document.getElementById('theSaveBtn23')
const saving24 = document.getElementById('theSaveBtn24')

//The start of the real code

$(function () {

// The code that defines the date

let today = new Date();

let month = today.getMonth()+1
let day = today.getDate();
let year = today.getFullYear();

let currentDate = `${month}/${day}/${year}`;
console.log(currentDate);
document.getElementById('currentDay').innerHTML = currentDate;

// The code that defines the time in military

let hour = today.getHours();
let minutes = today.getMinutes();

let theCurrentTime = `${hour}:${minutes}`;
console.log(theCurrentTime);
document.getElementById('timeOfDay').innerHTML = theCurrentTime;

// This code would have been for saving but i couldn't figure it out

saving1.addEventListener('click', savefunction)
saving2.addEventListener('click', savefunction)
saving3.addEventListener('click', savefunction)
saving4.addEventListener('click', savefunction)
saving5.addEventListener('click', savefunction)
saving6.addEventListener('click', savefunction)
saving7.addEventListener('click', savefunction)
saving8.addEventListener('click', savefunction)
saving9.addEventListener('click', savefunction)
saving10.addEventListener('click', savefunction)
saving11.addEventListener('click', savefunction)
saving12.addEventListener('click', savefunction)
saving13.addEventListener('click', savefunction)
saving14.addEventListener('click', savefunction)
saving15.addEventListener('click', savefunction)
saving16.addEventListener('click', savefunction)
saving17.addEventListener('click', savefunction)
saving18.addEventListener('click', savefunction)
saving19.addEventListener('click', savefunction)
saving20.addEventListener('click', savefunction)
saving21.addEventListener('click', savefunction)
saving22.addEventListener('click', savefunction)
saving23.addEventListener('click', savefunction)
saving24.addEventListener('click', savefunction)

function savefunction() {
  console.log("failed to save")
}

// This code checks the current hour against possible hours and pushes classes to change the color accordingly

console.log(hour);
if (hour > 0) {
  hour0.classList.remove('past');
  hour0.classList.add('past');
  checkHourOne();
}
else if (hour = 0) {
  hour0.classList.remove('past');
  hour0.classList.add('present');
  checkHourOne();
}
else if (hour < 0) {
  hour0.classList.remove('past');
  hour0.classList.add('future');
  checkHourOne();
}

function checkHourOne() {
  console.log(hour);
  if (hour >  1) {
    hour1.classList.remove('past');
    hour1.classList.add('past');
    checkHourTwo()
  }
  else if (hour = 1) {
    hour1.classList.remove('past');
    hour1.classList.add('present');
    checkHourTwo()
  }
  else if (hour < 1) {
    hour1.classList.remove('past');
    hour1.classList.add('future');
    checkHourTwo()
  }
}

function checkHourTwo() {
  console.log(hour);
  if (hour > 2) {
    hour2.classList.remove('past');
    hour2.classList.add('past');
    checkHourThree()
  }
  else if (hour == 2) {
    hour2.classList.remove('past');
    hour2.classList.add('present');
    checkHourThree()
  }
  else if (hour << 2) {
    hour2.classList.remove('past');
    hour2.classList.add('future');
    checkHourThree()
  }
}

function checkHourThree() {
  console.log(hour);
  if (hour > 3) {
    hour3.classList.remove('past');
    hour3.classList.add('past');
    checkHourFour()
  }
  else if (hour == 3) {
    hour3.classList.remove('past');
    hour3.classList.add('present');
    checkHourFour()
  }
  else if (hour << 3) {
    hour3.classList.remove('past');
    hour3.classList.add('future');
    checkHourFour()
  }
}

function checkHourFour() {
  console.log(hour);
  if (hour > 4) {
    hour4.classList.remove('past');
    hour4.classList.add('past');
    checkHourFive()
  }
  else if (hour == 4) {
    hour4.classList.remove('past');
    hour4.classList.add('present');
    checkHourFive()
  }
  else if (hour << 4) {
    hour4.classList.remove('past');
    hour4.classList.add('future');
    checkHourFive()
  }
}

function checkHourFive() {
  console.log(hour);
  if (hour > 5) {
    hour5.classList.remove('past');
    hour5.classList.add('past');
    checkHourSix()
  }
  else if (hour == 5) {
    console.log('It is 5')
    hour5.classList.remove('past');
    hour5.classList.add('present');
    checkHourSix()
  }
  else if (hour << 5) {
    hour5.classList.remove('past');
    hour5.classList.add('future');
    checkHourSix()
  }
}

function checkHourSix() {
  console.log(hour);
  if (hour > 6) {
    hour6.classList.remove('past');
    hour6.classList.add('past');
    checkHourSeven()
  }
  else if (hour == 6) {
    hour6.classList.remove('past');
    hour6.classList.add('present');
    checkHourSeven()
  }
  else if (hour < 6) {
    hour6.classList.remove('past');
    hour6.classList.add('future');
    checkHourSeven()
  }
}

function checkHourSeven() {
  console.log(hour);
  if (hour >  7) {
    hour7.classList.remove('past');
    hour7.classList.add('past');
    checkHourEight()
  }
  else if (hour == 7) {
    hour7.classList.remove('past');
    hour7.classList.add('present');
    checkHourEight()
  }
  else if (hour < 7) {
    hour7.classList.remove('past');
    hour7.classList.add('future');
    checkHourEight()
  }
}

function checkHourEight() {
  console.log(hour);
  if (hour > 8) {
    hour8.classList.remove('past');
    hour8.classList.add('past');
    checkHourNine()
  }
  else if (hour == 8) {
    hour8.classList.remove('past');
    hour8.classList.add('present');
    checkHourNine()
  }
  else if (hour < 8) {
    hour8.classList.remove('past');
    hour8.classList.add('future');
    checkHourNine()
  }
}

function checkHourNine() {
  console.log(hour);
  if (hour > 9) {
    hour9.classList.remove('past');
    hour9.classList.add('past');
    checkHourTen()
  }
  else if (hour == 9) {
    hour9.classList.remove('past');
    hour9.classList.add('present');
    checkHourTen()
  }
  else if (hour < 9) {
    hour9.classList.remove('past');
    hour9.classList.add('future');
    checkHourTen()
  }
}

function checkHourTen() {
  console.log(hour);
  if (hour > 10) {
    hour10.classList.remove('past');
    hour10.classList.add('past');
    checkHourEleven()
  }
  else if (hour == 10) {
    hour10.classList.remove('past');
    hour10.classList.add('present');
    checkHourEleven()
  }
  else if (hour < 10) {
    hour10.classList.remove('past');
    hour10.classList.add('future');
    checkHourEleven()
  }
}

function checkHourEleven() {
  console.log(hour);
  if (hour > 11) {
    hour11.classList.remove('past');
    hour11.classList.add('past');
    checkHourTwelve()
  }
  else if (hour == 11) {
    hour11.classList.remove('past');
    hour11.classList.add('present');
    checkHourTwelve()
  }
  else if (hour < 11) {
    hour11.classList.remove('past');
    hour11.classList.add('future');
    checkHourTwelve()
  }
}

function checkHourTwelve() {
  console.log(hour);
  if (hour > 12) {
    hour12.classList.remove('past');
    hour12.classList.add('past');
    checkHourThirteen()
  }
  else if (hour == 12) {
    hour12.classList.remove('past');
    hour12.classList.add('present');
    checkHourThirteen()
  }
  else if (hour < 12) {
    hour12.classList.remove('past');
    hour12.classList.add('future');
    checkHourThirteen()
  }
}

function checkHourThirteen() {
  console.log(hour);
  if (hour > 13) {
    hour13.classList.remove('past');
    hour13.classList.add('past');
    checkHourFourteen()
  }
  else if (hour == 13) {
    hour13.classList.remove('past');
    hour13.classList.add('present');
    checkHourFourteen()
  }
  else if (hour < 13) {
    hour13.classList.remove('past');
    hour13.classList.add('future');
    checkHourFourteen()
  }
}

function checkHourFourteen() {
  console.log(hour);
  if (hour > 14) {
    hour14.classList.remove('past');
    hour14.classList.add('past');
    checkHourFifteen()
  }
  else if (hour == 14) {
    hour14.classList.remove('past');
    hour14.classList.add('present');
    checkHourFifteen()
  }
  else if (hour < 14) {
    hour14.classList.remove('past');
    hour14.classList.add('future');
    checkHourFifteen()
  }
}

function checkHourFifteen() {
  console.log(hour);
  if (hour > 15) {
    hour15.classList.remove('past');
    hour15.classList.add('past');
    checkHourSixteen()
  }
  else if (hour == 15) {
    hour15.classList.remove('past');
    hour15.classList.add('present');
    checkHourSixteen()
  }
  else if (hour < 15) {
    hour15.classList.remove('past');
    hour15.classList.add('future');
    checkHourSixteen()
  }
}

function checkHourSixteen() {
  console.log(hour);
  if (hour > 16) {
    hour16.classList.remove('past');
    hour16.classList.add('past');
    checkHourSeventeen()
  }
  else if (hour == 16) {
    hour16.classList.remove('past');
    hour16.classList.add('present');
    checkHourSeventeen()
  }
  else if (hour < 16) {
    hour16.classList.remove('past');
    hour16.classList.add('future');
    checkHourSeventeen()
  }
}

function checkHourSeventeen() {
  console.log(hour);
  if (hour > 17) {
    hour17.classList.remove('past');
    hour17.classList.add('past');
    checkHourEightteen()
  }
  else if (hour == 17) {
    hour17.classList.remove('past');
    hour17.classList.add('present');
    checkHourEightteen()
  }
  else if (hour < 17) {
    hour17.classList.remove('past');
    hour17.classList.add('future');
    checkHourEightteen()
  }
}

function checkHourEightteen() {
  console.log(hour);
  if (hour > 18) {
    hour18.classList.remove('past');
    hour18.classList.add('past');
    checkHourNineteen()
  }
  else if (hour == 18) {
    hour18.classList.remove('past');
    hour18.classList.add('present');
    checkHourNineteen()
  }
  else if (hour < 18) {
    hour18.classList.remove('past');
    hour18.classList.add('future');
    checkHourNineteen()
  }
}

function checkHourNineteen() {
  console.log(hour);
  if (hour > 19) {
    hour19.classList.remove('past');
    hour19.classList.add('past');
    checkHourTwenty()
  }
  else if (hour == 19) {
    hour19.classList.remove('past');
    hour19.classList.add('present');
    checkHourTwenty()
  }
  else if (hour < 19) {
    hour19.classList.remove('past');
    hour19.classList.add('future');
    checkHourTwenty()
  }
}

function checkHourTwenty() {
  console.log(hour);
  if (hour > 20) {
    hour20.classList.remove('past');
    hour20.classList.add('past');
    checkHourTwentyone()
  }
  else if (hour == 20) {
    hour20.classList.remove('past');
    hour20.classList.add('present');
    checkHourTwentyone()
  }
  else if (hour < 20) {
    hour20.classList.remove('past');
    hour20.classList.add('future');
    checkHourTwentyone()
  }
}

function checkHourTwentyone() {
  console.log(hour);
  if (hour > 21) {
    hour21.classList.remove('past');
    hour21.classList.add('past');
    checkHourTwentytwo()
  }
  else if (hour == 21) {
    hour21.classList.remove('past');
    hour21.classList.add('present');
    checkHourTwentytwo()
  }
  else if (hour < 21) {
    hour21.classList.remove('past');
    hour21.classList.add('future');
    checkHourTwentytwo()
  }
}

function checkHourTwentytwo() {
  console.log(hour);
  if (hour > 22) {
    hour22.classList.remove('past');
    hour22.classList.add('past');
    checkHourTwentythree()
  }
  else if (hour == 22) {
    hour22.classList.remove('past');
    hour22.classList.add('present');
    checkHourTwentythree()
  }
  else if (hour < 22) {
    hour22.classList.remove('past');
    hour22.classList.add('future');
    checkHourTwentythree()
  }
}

function checkHourTwentythree() {
  console.log(hour);
  if (hour > 23) {
    hour23.classList.remove('past');
    hour23.classList.add('past');
    restOfCode()
  }
  else if (hour == 23) {
    hour23.classList.remove('past');
    hour23.classList.add('present');
    restOfCode()
  }
  else if (hour < 23) {
    hour23.classList.remove('past');
    hour23.classList.add('future');
    restOfCode()
  }
}

});
