const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
     for (const key1 in object1) {
        if (object1[key1] !== object2[key1]) {
       return false
        }
      }
  } return true;
};

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