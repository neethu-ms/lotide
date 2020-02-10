
const words = ["ground", "control", "to", "major", "tom"];
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length)
    return false;
  else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i])
        return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual,expected) {
  if (eqArrays(actual,expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

const results1 = map(words, word => word[0]);  // using arrow function
const results2 = map(words, function(word) {    // using anonymous function
  return word.length;
});

let callback = function(word) {
  return word[word.length - 1];
};

const results3 = map(words, callback); //using function

assertArraysEqual(results1,['g','c','t','m','t']);
assertArraysEqual(results2,[6,7,2,5,3]);
assertArraysEqual(results3,['d','l','o','r','m']);
