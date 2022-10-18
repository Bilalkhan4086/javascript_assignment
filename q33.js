const numberArray = Array.from({ length: 9 }, (_, i) => i + 1);

numberArray.map((num) => {
  console.log(
    num,
    num < 4
      ? num !== 3
        ? num !== 2
          ? num === 1
            ? " st"
            : ""
          : " nd"
        : " rd"
      : " th"
  );
});
