// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does

function titleCase(string) {
  // It will convert the string/sentence to lowercase and split it on space and store the list seprate words
  let sentence = string.toLowerCase().split(" ");
  for (let i = 0; i < sentence.length; i++) {
    // this will convert the first letter of word tho upper case and join with rest of the word
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  sentence.join(" ");
}
