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
