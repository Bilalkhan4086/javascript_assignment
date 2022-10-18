const listOfUsers = ["bilal", "erin", "aqib", "ali", "zia", "admin"];

listOfUsers.map((name, i) => {
  if (name === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${name}, thank you for logging in again.`);
  }
});
