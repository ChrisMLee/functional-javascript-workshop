// function reduce(arr, fn, initial) {
//   // SOLUTION GOES HERE

//   if(initial === arr.length-1 ){
//     return val;
//   }

//   var val;
//   if(initial > 0){
//     val = fn(arr[initial], initial, arr);
//   }else{
//     val = fn(0, arr[initial], initial, arr);
//   }

//   // prev[curr] = ++prev[curr] || 1

//   // val += fn(arr[initial], initial, arr);

//   return reduce(arr, fn(val), initial+1)
// } 

function reduce(arr, fn, initial) {
  return (function step(idx, value) {
    if(idx > arr.length-1){
      return value;
    } // end condition
    return step(idx+1, fn(value, arr[idx], idx, arr)); // calculate & pass values to next step
  })(0, initial) // IIFE. kick off recursion with initial values
}

module.exports = reduce

// user if
// pop from the array or use length