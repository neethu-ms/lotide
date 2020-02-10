
const assert = require('chai').assert;
const tail = require('../tail');
describe("#tail",function() {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  tail(words);
  it("original array length remains same  after calling tail function",()=>{
    assert.equal(words.length,3);
  });

  it("empty array should return empty array",()=>{
    assert.deepEqual(tail([]),[]);
  });

  it("array with single element should return empty array",()=>{
    assert.deepEqual(tail([3]),[]);
  });

  it("array with ['Yo Yo', 'Lighthouse', 'Labs']",()=>{
    assert.deepEqual(tail(words),['Lighthouse', 'Labs']);
  });

  
});