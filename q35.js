const animals = ["horse", "dog", "sheep"];

animals.map((animal) => {
  if (animal === "horse") {
    console.log("horse is very fast");
  } else if (animal === "dog") {
    console.log("dog provide security to you");
  } else if (animal === "sheep") {
    console.log("sheep is very cute");
  } else {
    console.log("No description provided for", animal);
  }
});

console.log("All of these animals are loyal and pet!");
