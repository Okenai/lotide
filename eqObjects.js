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

module.exports = eqObjects;