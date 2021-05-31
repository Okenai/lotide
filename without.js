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

module.exports = without;
