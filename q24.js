const array = ["a", "b", "c", "d"];
const text = "Muhammad Bilal";
const numDigit = 55;
const strDigit = "55";

console.log("Tests for equality with strings");
console.log("both are", text === "Muhammad Bilal" ? "equal" : "not equal");

console.log("Tests for inequality with strings");
console.log("both are", text === "Muhammad bilal" ? "equal" : "not equal");

console.log("Tests using the lower case function");
console.log(
  "both are",
  text.toLowerCase() === "Muhammad bilal".toLowerCase() ? "equal" : "not equal"
);

console.log("Tests using the lower case function");
console.log(
  "both are",
  text.toLowerCase() === "Muhammad bilal".toLowerCase() ? "equal" : "not equal"
);

console.log("Numerical tests involving equality");
console.log("both are", numDigit === 55 ? "equal" : "not equal");

console.log("Numerical tests involving inequality");
console.log("both are", numDigit === 57 ? "equal" : "not equal");

console.log("Numerical tests involving greater than");
console.log("both are", numDigit > 50 ? "equal" : "not equal");

console.log("Numerical tests involving less than");
console.log("both are", numDigit < 60 ? "equal" : "not equal");

console.log("Numerical tests involving greater than or equal");
console.log("both are", numDigit >= 50 ? "equal" : "not equal");

console.log("Numerical tests involving less than or equal");
console.log("both are", numDigit <= 60 ? "equal" : "not equal");

console.log('Tests using "and" operators');
console.log("I predict text === 'Muhammad Bilal' and numDigit === 55");
console.log("I predicted", text === "Muhammad Bilal" && numDigit === 55);

console.log('Tests using "or" operators');
console.log("I predict text === 'Muhammad Ali' or numDigit === 55");
console.log("I predicted", text === "Muhammad Ali" || numDigit === 55);

console.log("Test whether an item is in a array");
console.log('I predict array contains "a"');
console.log("Your prediction is", array.includes("a"));

console.log("Test whether an item is not in a array");
console.log('I predict array contains "f"');
console.log("Your prediction is", array.includes("f"));
