// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let listOfFriends = ["Bilal", "mozzam", "umair"];

listOfFriends.forEach((name) => {
  console.log(`${name} you are invited for today's dinner in PU.`);
});

console.log("\n\nasad is unavailable for dinner so I will invite saad\n\n");

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

console.log("I will invite only two guests only\n");

while (listOfFriends.length > 2) {
  console.log(
    listOfFriends.pop(),
    "you’re sorry you can’t invite them to dinner"
  );
}

listOfFriends.map((name) => {
  console.log(name, "you are still invited");
});

listOfFriends.splice(0);

console.log("list of friend", listOfFriends);
