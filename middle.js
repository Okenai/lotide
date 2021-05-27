const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
    return false;
    }
  }
 }
  return true;
};

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