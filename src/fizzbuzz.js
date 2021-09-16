module.exports.fizzbuzzFunction = function () {
  var result = [];
  for (let i = 1; i <= 100; i++) {
    let isDividibleBy3 = i % 3 === 0;
    let isDivisibleBy5 = i % 5 === 0;
    if (isDividibleBy3 && isDivisibleBy5) {
      result.push("FizzBuzz");
    } else if (isDividibleBy3) {
      result.push("Fizz");
    } else if (isDivisibleBy5) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result;
};
