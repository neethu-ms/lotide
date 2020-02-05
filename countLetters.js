const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function(sentence) {
  const letterCount = {};
  for (const letter of sentence.toLowerCase()) {
    if (letter !== " ") {
      if (letterCount[letter]) {
        letterCount[letter] += 1;
      } else {
        letterCount[letter] = 1;
      }
    }
  }
  return letterCount;
};

assertEqual(countLetters("abcd abcd aad")["a"],4);
assertEqual(countLetters("abcd abcd aad")["b"],2);
assertEqual(countLetters("abcd abcd aad")["d"],3);
assertEqual(countLetters("abcd abcd aad")["c"],2);
assertEqual(countLetters("hello hai")["h"],2);
assertEqual(countLetters("hello hai")["e"],1);
assertEqual(countLetters("hello hai")["l"],2);
assertEqual(countLetters("hello hai")["a"],1);
assertEqual(countLetters("hello hai")["i"],1);
