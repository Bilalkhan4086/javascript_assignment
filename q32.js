const listOfCurrentUsers = ["bilal", "kams", "dasse", "Ali", "mian", "saad"];
const listOfNewUsers = ["bilal", "erin", "aqib", "ali", "zia", "admin"];

listOfNewUsers.map((nName) => {
  let same = false;
  listOfCurrentUsers.map((cName) => {
    if (nName.toLowerCase() === cName.toLowerCase()) {
      same = true;
    }
  });
  if (same) {
    console.log(nName, "username is already exists");
  } else {
    console.log(nName, "username is available");
  }
});
