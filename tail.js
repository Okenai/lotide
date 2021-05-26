
/*const assertEqual = function(actual, expected) {
  if (actual.toString() === expected.toString()) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};


const tail = function(array) {
  let answer = array.slice(1);
  return answer;
};

assertEqual(["Lighthouse", "Labs"],["Lighthouse", "Labs"]);

//assertEqual(tail([5, 7, 8]),[1, 2]);*/

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};


const tail = function(array) {
  let answer = array.slice(1);
  return answer;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); 
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");