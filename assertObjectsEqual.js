const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(objectOne, objectTwo) {
  const inspect = require('util').inspect;
  if (Object.keys(objectOne).length !== Object.keys(objectTwo).length) {
    console.log(`❌❌❌Assertion Failed: ${inspect(objectOne)} !== ${inspect(objectTwo)}`);
  } else {
    if (eqObjects(objectOne, objectTwo) === true) {
      console.log(`✅✅✅ Assertion passed: ${inspect(objectOne)} === ${inspect(objectTwo)}`);
    } else {
      console.log(`❌❌❌Assertion Failed: ${inspect(objectOne)} !== ${inspect(objectTwo)}`);
    }
  }
  
};

module.exports = assertObjectsEqual;