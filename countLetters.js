const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== $ {expected}`);
  }
};

const countLetters = function(string) {
  let answer = {};
  for (const letter of string) {
    if (letter !== ' ') {
      if (answer[letter]) {
        answer[letter] += 1;
      } else {
        answer[letter] = 1;
      }
  }
 }
 return answer;
};

