
const middle = function(array) {
  let middleArray = [];
  let length = array.length;
  let mid;
  if (!(length <= 2)) {
    mid = Math.floor((length - 1) / 2);
    if (length % 2 === 0) {
      middleArray.push(array[mid]);
      middleArray.push(array[mid + 1]);
    } else {
      middleArray.push(array[mid]);
    }
  }
  return middleArray;
};

module.exports = middle;


