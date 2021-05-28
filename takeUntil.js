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

const takeUntil = function(array, callback) {
  let result = [];
  for (let item of array) {
    if (callback(item)) {
      return result
    } else {
      result.push(item)
    }
  }
};