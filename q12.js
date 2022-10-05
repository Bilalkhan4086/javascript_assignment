// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

const listOfFriends = [
  { name: "Bilal", message: "Hi form Bilal" },
  { name: "mozzam", message: "Hi form mozzam" },
  { name: "umair", message: "Hi form umair" },
  { name: "ali", message: "Hi form ali" },
  { name: "saad", message: "Hi form saad" },
];

listOfFriends.forEach(({ name, message }) => {
  console.log(`${name} said, "${message}"`);
});
