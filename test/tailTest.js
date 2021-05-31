const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("should return 'Labs' from ['Hello', 'Lighthouse', 'Labs']" , () =>{
  assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Labs"])
});
});

