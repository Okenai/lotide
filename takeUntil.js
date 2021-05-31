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

module.exports = takeUntil;