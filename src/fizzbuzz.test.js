const fizzbuzz = require("./fizzbuzz.js");

var list = fizzbuzz.fizzbuzzFunction();

test("testing the result of the fizzbuzz", () => {
  expect(list[0]).toBe(1);
});
