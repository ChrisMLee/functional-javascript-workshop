function repeat(operation, num) {
  var count = num
  if(count > 0){
    operation();
    count -- 
  }
}

// Do not remove the line below
module.exports = repeat



// function repeat(operation, num) {
//       if (num <= 0) return
//       operation()
//       return repeat(operation, --num)
//     }

//     module.exports = repeat

