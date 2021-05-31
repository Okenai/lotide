const eqArrays = require("./eqArrays");

const assertArraysEqual = function (firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return console.log(`❌❌❌Assertion Failed: [${firstArray}] !== [${secondArray}]`);
  } else {
  if (eqArrays(firstArray, secondArray) === true) {
  console.log(`✅✅✅ Assertion passed: [${firstArray}] === [${secondArray}]`);
} else {
  console.log(`❌❌❌Assertion Failed: [${firstArray}] !== [${secondArray}]`);
}
}
};

module.exports = assertArraysEqual;