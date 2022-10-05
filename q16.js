// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let listOfFriends = ["Bilal", "mozzam", "umair"];

listOfFriends.forEach((name) => {
  console.log(`${name} you are invited for today's dinner in PU.`);
});

console.log("\n\nasad is available for dinner so I will invite saad\n\n");

listOfFriends[2] = "saad";

listOfFriends.forEach((name) => {
  console.log(`${name} you are invited for today's dinner in PU.`);
});

console.log("\n\nI think we have space for 3 more guests\n\n");

listOfFriends.unshift("Asim");
listOfFriends.splice(parseInt(listOfFriends.length / 2), 0, "Maher");
listOfFriends.push("ali");

listOfFriends.forEach((name) => {
  console.log(`${name} you are invited for today's dinner in PU.`);
});
