const car = (model, manufacturer, ...items) => {
  let obj = {
    model,
    manufacturer,
  };
  for (item of items) {
    const pair = item.split("=");
    obj[pair[0]] = pair[1];
  }
  return obj;
};

console.log(car("v8", "toyota"));
console.log(car("v8", "toyota", "color=red"));
console.log(car("v8", "toyota", "color=red", "cylinderExtened=true"));
