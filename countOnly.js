const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
    
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;
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
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);

const result2 = countOnly(["apple","orange","egg","chicken","pineapple","orange","pommegranite","apple","fish","orange"],
  {egg: false, orange: true, chicken: false, "fish": false, meat: false, pommegranite:true,apple: true});

assertEqual(result2["chicken"],undefined);
assertEqual(result2["fish"],undefined);
assertEqual(result2["egg"],undefined);
assertEqual(result2["meat"],undefined);
assertEqual(result2["orange"],3);
assertEqual(result2["apple"],2);
assertEqual(result2["pommegranite"],1);

