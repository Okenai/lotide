const assertArraysEqual = function(firstArray, secondArray){
  if (eqArrays(firstArray, secondArray) === true) {
    console.log(`✅✅✅ Assertion passed: [${firstArray}] === [${secondArray}]`);
  } else {
    console.log(`❌❌❌Assertion Failed: [${firstArray}] !== [${secondArray}]`);
  }
};
  
  const eqArrays = function(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
      return false;
      }
    }
    return true;
};

const without = function (initialArray, removingValue){
  let result = initialArray.slice(0);
   for (let i = 0; i < initialArray.length; i ++) {
   for (let j = 0; j < removingValue.length; j ++) {
    if (initialArray[i] === removingValue[j]) {
      result.splice(i, 1);
    }
  }
  }
 return result;
};


