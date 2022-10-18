const fav_pizza = ["tikka", "pepperoni", "kabab topper"];

fav_pizza.map((pizza) => {
  console.log(
    pizza,
    "is",
    pizza === "tikka" ? "hot" : pizza === "pepperoni" ? "spicy" : "tasty"
  );
});

console.log(
  "\nI like soft pizza \nIt should be hot but not to spicy\ntoppings are mandatory :)"
);
console.log("I really love  pizza");
