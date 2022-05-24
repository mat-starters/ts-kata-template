import fizzBuzz from "./fizzBuzz";

test("return an array from 1 to n, replacing certain values with strings", () => {
  expect(fizzBuzz(15)).toStrictEqual([
    1,
    2,
    "Fizz",
    4,
    "Buzz",
    "Fizz",
    7,
    8,
    "Fizz",
    "Buzz",
    11,
    "Fizz",
    13,
    14,
    "FizzBuzz",
  ]);
});
