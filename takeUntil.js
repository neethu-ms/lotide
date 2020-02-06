const takeUntil = function(array, callback) {
  let newArray = [];
  
  for (let i = 0; i < array.length && !(callback(array[i])); i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

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



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);
console.log(results2);