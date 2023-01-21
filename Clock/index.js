// Days of the Week
const week = {
  0: "Sunday",
  1: "Monday",
  2: "Tuseday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

// Months of the Year
const month = {
  0: "January",
  1: "Febuary",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};
// creating date instance

function getTIme() {
  const date = new Date();
  // Get Year
  var thisYear = date.getFullYear();

  // Get Month
  var thisMonth = date.getMonth();

  // Get day of the month
  var thisDate = date.getDate();

  // Get day of the Week
  var thisDay = date.getDay();

  // Get Hour
  var thisHour = date.getHours();

  // Get Minutes
  var thisMinute = date.getMinutes();

  // Get Seconds
  var thisSecond = date.getSeconds();

  // setting Month of Year
  thisMonth = month[thisMonth];

  // Setting Day of Week
  thisDay = week[thisDay];

  // setting AM/PM
  var pm = null;
  if (thisHour > 12) {
    thisHour = thisHour - 12;
    pm = true;
  }
  if (pm == true) {
    nightOrDay = "PM";
  } else nightOrDay = "AM";

  // setting suffix of date
  var suffix;
  switch (thisDate) {
    case (1, 11, 21, 31):
      suffix = "st";
    case (2, 22):
      suffix = "nd";
    case (3, 23):
      suffix = "rd";
    default:
      suffix = "th";
  }

  // assigning element
  const dayElement = document.getElementById("dayElement");
  const timeElement = document.getElementById("timeElement");

  dayElement.innerHTML = `${thisDay}`;
  timeElement.innerHTML = `${thisHour}:${thisMinute}:${thisSecond} ${nightOrDay}`;
  dateElement.innerHTML = `${thisMonth} ${thisDate}${suffix}, ${thisYear}`;
}

setInterval(getTIme, 1000);
