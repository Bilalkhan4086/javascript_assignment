const orgMagicans = ["ani", "mahe", "haeja", "asae"];
const copyMagicans = ["ani", "mahe", "haeja", "asae"];

const show_magicans = (listOfMagicans) => {
  listOfMagicans.map((name) => {
    console.log(name);
  });
};

const great_magicans = (listOfMagicans = []) => {
  let length = listOfMagicans.length - 1;
  let tempArr = [];
  for (let i = 0; i <= length; i++) {
    tempArr[i] = `${listOfMagicans.pop()} the great`;
  }
  tempArr.forEach((name) => {
    listOfMagicans.push(name);
  });
};
great_magicans(copyMagicans);
console.log("After Make great!\n");
show_magicans(copyMagicans);
console.log("\nOriginal List!\n");
show_magicans(orgMagicans);
