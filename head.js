const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  if(array.length>=1) {let answer = array[0];
  return answer;
} else {
  return 'undefined'
}
};

assertEqual(head([1]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
