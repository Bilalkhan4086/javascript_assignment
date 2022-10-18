const array = ["a", 22, false];

try {
  for (let i = 0; i <= 3; i++) {
    console.log(array[i]);
  }
} catch (err) {
  console.log("err", err);
}

console.log("Resolving error...\n");

for (let i = 0; i < 3; i++) {
  console.log(array[i]);
}
