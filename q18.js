const listOfPlaces = ["Mangla", "Lahore", "Islamabad", "Peshawar", "Karachi"];
listOfPlaces.map((place, i) => {
  console.log(`${i + 1} `, place);
});
console.log("\n sorted array");
listOfPlaces.sort().map((place, i) => {
  console.log(`${i + 1} `, place);
});
console.log("\n original array");

listOfPlaces.map((place, i) => {
  console.log(`${i + 1} `, place);
});
console.log("\n Reverse array");

listOfPlaces.reverse().map((place, i) => {
  console.log(`${i + 1} `, place);
});
console.log("\n Reversing it again to take it in original form");

listOfPlaces.reverse().map((place, i) => {
  console.log(`${i + 1} `, place);
});
