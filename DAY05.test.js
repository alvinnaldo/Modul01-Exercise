const {
  getResultSort,
  getResult,
  concatString,
  split,
  calculate,
  addElement,
  removeOdd,
} = require("./DAY05-EXERCISE-ALVIN NALDO");

test("Test function lowest, highest, average of array with sort", () => {
  expect(getResultSort([6, 9, 12])).toEqual([
    "Lowest value : 6",
    "Highest value : 12",
    "Average value : 9",
  ]);
});

test("Test function lowest, highest, average of array without sort", () => {
  expect(getResult([6, 9, 12])).toEqual([
    "Lowest value : 6",
    "Highest value : 12",
    "Average value : 9",
  ]);
});

test("Test function concat string", () => {
  expect(concatString(["Laptop", "PC", "Tablet", "Handphone"])).toBe(
    "Laptop, PC, Tablet, and Handphone"
  );
});

test("Test function duplicate split", () => {
  expect(split("Hello World Test", "l")).toEqual(["He", "", "o Wor", "d Test"]);
});

test("Test function calculate each element of two arrays", () => {
  expect(calculate([3, 2, 1], [1, 2, 3, 5, 7])).toEqual([4, 4, 4, 5, 7]);
});

test("Test function add element", () => {
  expect(addElement(["Hello"], "Hello")).toEqual(["Hello"]);
});

test("Test function remove odd number from array", () => {
  expect(removeOdd([1, 2, 6, 8, 10, 25, 23, 2])).toEqual([2, 6, 8, 10]);
});
