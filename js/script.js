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

/*
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
*/
/*
console.log(calculateAge(2006));

function calculateAge(birthYear) {
  return 2024 - birthYear;
}

//

const calculateAge2 = function (bithYear) {
  return 2024 - bithYear;
};

console.log(calculateAge2(2006));


const calculateAge2 = function (birthYear) {
  return 2024 - birthYear;
};

const calculateAge3 = (birthYear) => {
  return 2024 - birthYear;
};

console.log(calculateAge3(2004));
*/

// const user1 = "shiva";
// const user2 = "hossein";
// const user3 = "sina";

const users = [
  "shiva",
  "negin",
  "hossein",
  "cena",
  "ali",
  "nerges",
  "shayan",
  "saeed",
  "maryam",
];

if (users.includes("shiva")) {
  console.log(`shiva exist and the index is ${users.indexOf("shiva")}`);
} else {
  console.log(`shiva does not exist`);
}
// negin exist and the index is 1

// negin does not exist

// console.log(users);

// users.shift();
// users.shift();
// users.pop();
// users.push(users.length);
// users.unshift(users.length);

// console.log(users);

/*
[
    6,
    "cena",
    "ali",
    "nerges",
    "shayan",
    "negin",
    5,
];
*/

// console.log(users);

// add an element
// console.log(users.push(5));
// users.unshift(true);

// delete an element
// console.log(users.shift());
// users.shift();

// console.log(users);
