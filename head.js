const head = function(array) {
  if(array.length>=1) {let answer = array[0];
  return answer;
} else {
  return 'undefined'
}
};

module.exports = head;