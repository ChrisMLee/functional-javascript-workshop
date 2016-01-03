function countWords(inputWords) {
  // SOLUTION GOES HERE
  return inputWords.reduce(function(result, currentItem) {
    if(result.hasOwnProperty(currentItem)){
      result[currentItem] = ++result[currentItem];
      // console.log('exists', result[currentItem]);
    }else{
      // console.log('does not exist');
      result[currentItem] = 1;
    }
    return result;
  }, {})
}

module.exports = countWords

// function countWords(arr) {
//   return arr.reduce(function(countMap, word) {
//     countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
//     return countMap
//   }, {}) // second argument to reduce initialises countMap to {}
// }