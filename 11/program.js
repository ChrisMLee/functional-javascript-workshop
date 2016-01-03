module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function(previousValue, currentValue, currentIndex, array){
    previousValue.push(fn(currentValue))
    return previousValue;
  }, []);
}


// the first argument to call becomes the value of `this`
// the rest of the arguments are passed to the function

// SOLUTION
// module.exports = function arrayMap(arr, fn, thisArg) {
//       return arr.reduce(function(acc, item, index, arr) {
//         acc.push(fn.call(thisArg, item, index, arr))
//         return acc
//       }, [])
//     }


// what you need to do is call reduce and have it push into an array on each go around