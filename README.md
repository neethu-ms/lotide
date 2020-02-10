# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @neethums/lotide`

**Require it:**

`const _ = require('@neethums/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: &nbsp;A function used for finding the first element of an array.  <br> `eg. head([1, 2, 3]) // 1`

* `tail(array)`: &nbsp;A function that returns all elements following the first element of an array. <br>`eg. tail([3,2,4,5]) //[2,4,5]`
* `middle(array)`: &nbsp;A function that returns the middle element(s) of an array. <br>`eg. middle([1, 2, 3, 4]) //[2,3]`
* `assertArraysEqual(actual, expected)`: &nbsp;A function for checking if actual and expected array are the same. <br>`eg. assertArraysEqual([5,6,7],[5,6,7]) //true` 
* `assertEqual(actual, expected)`: &nbsp;A function to check if actual and expected primitive values are the same.<br>`eg. assertEqual(40,60) //false`
* `assertObjectsEqual(actual, expected)`: &nbsp;A function to check if actualand expected objects are the same.<<br>`assertObjectsEqual({a: 1, b: 2}, {b: 2, a: 1}) //true`
* `countLetters(string)`: &nbsp;A function for counting the number of letters in a given string. <br>`eg. countLetters("abcd abcd aad") // { a: 4, b: 2, c: 2, d: 3 }`
* `countOnly(allItems, itemsToCount)`: &nbsp;A function for counting the specified items in allItems array based on the itemsToCount object.<br>`eg.
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];`<br>`countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true }) //  { Fang: 2, Jason: 1 }`
* `eqArrays(array1, array2)`: &nbsp;A function for checking if two arrays are equal.
<br>`eg. eqArrays(["1", "2", "3"], ["1", "2", "3"]) //true`
* `eqObjects(object1, object2)`: &nbsp;A function for checking if object1 is equal to object2. <br>`eg. const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };`<br>
`eqObjects(ab, ba)` //true
* `findKey(object, callback)`: &nbsp;A function for finding the key based on the callback function <br>`eg. findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"`
* `findKeyByValue(object,value)`: &nbsp;A function for finding the key of a given object when given its value. <br>
`eg. const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};`<br>`findKeyByValue(bestTVShowsByGenre, "The Wire") //drama`
* `flatten(array)`: &nbsp;A function used for flattening nested arrays.
<br>`eg. flatten([1,2,[3,4],5,[6,7,8,9],10]) //[1,2,3,4,5,6,7,8,9,10]`
* `letterPositions(string)`: &nbsp;A function that returns the array of indexes of each letter.<br>`letterPositions("hello") //{ h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] }
`
* `map(array, callback)`: &nbsp;A function that takes in an array and returns a new array after applying the callback function.
<br>`eg. const words = ["ground", "control", "to", "major", "tom"];`<br>
`map(words, word => word[0]) //['g','c','t','m','t']`
* `takeUntil(array, callback)`: &nbsp;A function that takes in an array and returns the elements of that array until the callback condition is met.
<br>`eg. const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];`<br>`takeUntil(data1, x => x < 0) //[ 1, 2, 5, 7, 2 ]`
* `without(array, itemsToRemove)`: &nbsp;A function that returns the given array by removing the itemsToRemove.<br>
`eg. without([1, 2, 3], [1]) //[2,3]`
