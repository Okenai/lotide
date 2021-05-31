const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const middle = function(array) {
  let returnedArray = [];
  let indexNo = 0;
  let answer = [];
  if (array.length <= 2) {
  return answer;
  } else if (array.length % 2 !== 0) {
    indexNo = Math.floor(array.length / 2);
    answer.push(array[indexNo]);
  } else if (array.length % 2 === 0) {
    indexNo = array.length / 2 - 1;
    answer.push(array[indexNo]);
    answer.push(array[indexNo + 1]);
  }
  return answer;
};

module.exports = middle;