const listOfUsers = [];
if (listOfUsers.length > 0) {
  listOfUsers.map((name, i) => {
    if (name === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${name}, thank you for logging in again.`);
    }
  });
} else {
  console.log("We need to find some users!");
}
