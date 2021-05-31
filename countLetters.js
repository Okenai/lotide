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

module.exports = countLetters;