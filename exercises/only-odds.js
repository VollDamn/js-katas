"use strict";
/*
Create a function `odd` which only keep odd values from an array passed as an argument.

You can't use a loop!

Do not mutate the parameter.

*/

// TODO your code:

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof odd, "function");
assert.strictEqual(odd.length, 1);
assert.strictEqual(odd.toString().includes("for"), false, "Do not use a loop");
assert.strictEqual(
  odd.toString().includes("while"),
  false,
  "Do not use a loop"
);
assert.deepStrictEqual(odd([1, 2, 3, 4]), [1, 3]);
assert.deepStrictEqual(odd([10, 20]), []);
assert.deepStrictEqual(odd([]), []);
let nums = [6, 7];
odd(nums);
assert.deepStrictEqual(nums, [6, 7], "Do not mutate the parameter");

// End of tests
