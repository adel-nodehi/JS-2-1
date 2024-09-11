"use strict";

// let interface = 12;

// userAg = 15;

/*
const dayOfWeek = "sunday";

switch (dayOfWeek) {
  case "monday":
    console.log(`mon`);
    break;

  case "tuesday":
    console.log("tues");
    break;

  case "wednesday":
    console.log("wednes");
    break;

  case "saturday":
  case "sunday":
    console.log("weekend");
    break;

  default:
    console.log("invalid day");
}
*/

/*
const age = 17;

const string = `you are ${age > 18 ? "adult" : "young"}`;
*/

function printHello() {
  console.log("Hello");
}

// printHello();

function calculateAge(birthYear) {
  const age = 2024 - birthYear;

  return age;
}

const useAge = calculateAge(2006);

console.log(useAge);

//

function displayInfo(name, age) {
  console.log(`${name} is ${age} year's old.`);
}

// displayInfo("adel", 12);
