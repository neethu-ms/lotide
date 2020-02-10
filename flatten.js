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



const flatten = function(array) {
  let newArray = [];
  for (let i of array) {
    if (Array.isArray(i)) {
      for (let j of i) {
        newArray.push(j);
      }
    } else {
      newArray.push(i);
    }
  }

  return newArray;
};

module.exports = flatten;

assertArraysEqual(flatten([1,2,[3,4],5,[6,7,8,9],10]),[1,2,3,4,5,6,7,8,9,10]);
assertArraysEqual(flatten([[1,2,3]]),[1,2,3]);
assertArraysEqual(flatten([[1],[5,6]]),[1,5,6]);
assertArraysEqual(flatten([["hello"],[5,6],[false]]),["hello",5,6,false]);