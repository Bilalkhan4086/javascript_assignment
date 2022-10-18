const make_tshirt = (size = "large", message = "I love Javascript") => {
  console.log(
    `size of your shirt is "${size}" and text "${
      size === "large" || size === "medium" ? "I love Javascript" : message
    }"`
  );
};
make_tshirt(22, "Its me");
