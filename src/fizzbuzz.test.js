const fizzbuzz = require("./fizzbuzz.js");

var list = fizzbuzz.fizzbuzzFunction();

test("testing the result of the fizzbuzz", () => {
  expect(list[0]).toBe(1);
  expect(list[1]).toBe(2);
  expect(list[2]).toBe("Fizz");
  expect(list[3]).toBe(4);
  expect(list[4]).toBe("Buzz");
  expect(list[5]).toBe("Fizz");
  expect(list[6]).toBe(7);
  expect(list[7]).toBe(8);
  expect(list[8]).toBe("Fizz");
  expect(list[9]).toBe("Buzz");

  expect(list[10]).toBe(11);
  expect(list[11]).toBe("Fizz");
  expect(list[12]).toBe(13);
  expect(list[13]).toBe(14);
  expect(list[14]).toBe("FizzBuzz");
  expect(list[15]).toBe(16);
  expect(list[16]).toBe(17);
  expect(list[17]).toBe("Fizz");
  expect(list[18]).toBe(19);
  expect(list[19]).toBe("Buzz");

  expect(list[20]).toBe("Fizz");
  expect(list[21]).toBe(22);
  expect(list[22]).toBe(23);
  expect(list[23]).toBe("Fizz");
  expect(list[24]).toBe("Buzz");
  expect(list[25]).toBe(26);
  expect(list[26]).toBe("Fizz");
  expect(list[27]).toBe(28);
  expect(list[28]).toBe(29);
  expect(list[29]).toBe("FizzBuzz");

  expect(list[30]).toBe(31);
  expect(list[31]).toBe(32);
  expect(list[32]).toBe("Fizz");
  expect(list[33]).toBe(34);
  expect(list[34]).toBe("Buzz");
  expect(list[35]).toBe("Fizz");
  expect(list[36]).toBe(37);
  expect(list[37]).toBe(38);
  expect(list[38]).toBe("Fizz");
  expect(list[39]).toBe("Buzz");

  expect(list[40]).toBe(41);
  expect(list[41]).toBe("Fizz");
  expect(list[42]).toBe(43);
  expect(list[43]).toBe(44);
  expect(list[44]).toBe("FizzBuzz");
  expect(list[45]).toBe(46);
  expect(list[46]).toBe(47);
  expect(list[47]).toBe("Fizz");
  expect(list[48]).toBe(49);
  expect(list[49]).toBe("Buzz");

  expect(list[50]).toBe("Fizz");
  expect(list[51]).toBe(52);
  expect(list[52]).toBe(53);
  expect(list[53]).toBe("Fizz");
  expect(list[54]).toBe("Buzz");
  expect(list[55]).toBe(56);
  expect(list[56]).toBe("Fizz");
  expect(list[57]).toBe(58);
  expect(list[58]).toBe(59);
  expect(list[59]).toBe("FizzBuzz");

  expect(list[60]).toBe(61);
  expect(list[61]).toBe(62);
  expect(list[62]).toBe("Fizz");
  expect(list[63]).toBe(64);
  expect(list[64]).toBe("Buzz");
  expect(list[65]).toBe("Fizz");
  expect(list[66]).toBe(67);
  expect(list[67]).toBe(68);
  expect(list[68]).toBe("Fizz");
  expect(list[69]).toBe("Buzz");

  expect(list[70]).toBe(71);
  expect(list[71]).toBe("Fizz");
  expect(list[72]).toBe(73);
  expect(list[73]).toBe(74);
  expect(list[74]).toBe("FizzBuzz");
  expect(list[75]).toBe(76);
  expect(list[76]).toBe(77);
  expect(list[77]).toBe("Fizz");
  expect(list[78]).toBe(79);
  expect(list[79]).toBe("Buzz");

  expect(list[80]).toBe("Fizz");
  expect(list[81]).toBe(82);
  expect(list[82]).toBe(83);
  expect(list[83]).toBe("Fizz");
  expect(list[84]).toBe("Buzz");
  expect(list[85]).toBe(86);
  expect(list[86]).toBe("Fizz");
  expect(list[87]).toBe(88);
  expect(list[88]).toBe(89);
  expect(list[89]).toBe("FizzBuzz");

  expect(list[90]).toBe(91);
  expect(list[91]).toBe(92);
  expect(list[92]).toBe("Fizz");
  expect(list[93]).toBe(94);
  expect(list[94]).toBe("Buzz");
  expect(list[95]).toBe("Fizz");
  expect(list[96]).toBe(97);
  expect(list[97]).toBe(98);
  expect(list[98]).toBe("Fizz");
  expect(list[99]).toBe("Buzz");
});
