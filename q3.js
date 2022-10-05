// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

const name = "MuHammad BiLAl";

function titleCase(string) {
  let sentence = string.toLowerCase().split(" ");
  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }

  return sentence.join(" ");
}

console.log("name in lowercase", name.toString().toLowerCase());
console.log("name in UPPERCASE", name.toString().toUpperCase());
console.log("name in Title Case", titleCase(name));
