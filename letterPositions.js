const letterPositions = function(sentence) {
  const results = {};
 
  for (let i = 0; i < sentence.length; i ++) {
    let index = [];
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        let additionIndex = results[sentence[i]];
        additionIndex.push(i);
        results[sentence[i]] = additionIndex;
      } else {
        index.push(i);
        results[sentence[i]] = index;
      }
    }
  }
  return results;
};

console.log(letterPositions("l l"));