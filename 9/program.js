var slice = Array.prototype.slice

function logger(namespace) {
  // SOLUTION GOES HERE
  return function applied(){
    console.log.apply(null, [namespace, slice.call(arguments).join(' ')]);
  }
};

  // function logger(namespace) {
  //     return function() {
  //       console.log.apply(console, [namespace].concat(slice.call(arguments)))
  //     }
  //   }

module.exports = logger