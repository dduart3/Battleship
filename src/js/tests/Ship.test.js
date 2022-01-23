Ship = require("../factories/Ship.js");

const Destroyer = Ship({ length: 3 });

const array = Array(3).fill(null);
test("hit a position of the ship and receive the new positions array", () => {
  array[0] = "x";
  expect(Destroyer.hit(0)).toStrictEqual(array);
});

test("hit a position of the ship and receive the new positions array", () => {
  array[1] = "x";
  expect(Destroyer.hit(1)).toStrictEqual(array);
});

test("hit a position of the ship and receive the new positions array", () => {
  array[2] = "x";
  expect(Destroyer.hit(2)).toStrictEqual(array);
});

test("isSunk method should return true after all the positions being hitted", () => {
  expect(Destroyer.isSunk()).toStrictEqual(true);
});
