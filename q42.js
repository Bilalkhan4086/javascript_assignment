const magicans = ["ani", "mahe", "haeja", "asae"];

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
great_magicans(magicans);
show_magicans(magicans);
