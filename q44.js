const sandwitch = (...items) => {
  console.log("You want items below items sandwitch");
  items.map((item) => {
    console.log(item);
  });
};
sandwitch("drink", "nuggets");
sandwitch("drink", "nuggets", "ketchup");
sandwitch("drink", "nuggets", "ketchup", "souces");
