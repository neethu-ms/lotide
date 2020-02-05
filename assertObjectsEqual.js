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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length)
    return false;
  else {
    for (let key of Object.keys(object1)) {
    
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key],object2[key]))
          return false;
      } else if (object1[key] !== object2[key])
        return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertObjectsEqual(eqObjects({a: 1, b: 2}, {b: 2, a: 1}),true);
assertObjectsEqual(eqObjects({a: 1, b: 2}, {b: 2, a: 4}),false);
assertObjectsEqual(eqObjects({a: 1, b: 2}, {b: 2, a: "1"}),false);