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

const without = function(source,itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        j = itemsToRemove.length;
      } else if (j === itemsToRemove.length - 1) {
        newArray.push(source[i]);
      }
    }
  }

  console.log(newArray);
  return newArray;
};
const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]); //checking if original array is unchanged

assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]),["hello","world"]);

assertArraysEqual(without(["hello", "abcd", "bbb","hai","how","are","you","bbb","hai"], ["bbb","abcd"]),
  ["hello","hai","how","are","you","hai"]);

assertArraysEqual(without([1, 2, 3], [1]), [2,3]);

assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]),["hello","world"]);