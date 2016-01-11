function repeat(operation, num) {
  return function() {
    if (num <= 0) return
    operation()
    return repeat(operation, --num)
  }
}
// function trampoline(fn) {
//   // You probably want to implement a trampoline!
// }

function trampoline(fn) {
    while (fn &&  typeof fn === 'function') {
        fn = fn.apply(fn.context, fn.args);
    }
    return fn;
}

module.exports = function(operation, num) {
  // You probably want to call your trampoline here!
  return trampoline(repeat(operation, num));
}


/* 

Tail call optimization is a compiler feature that replaces recursive function invocations with a loop. Eliminating function invocations eliminates both the stack size and the time needed to setup the function stack frames. Both time and space are saved.

https://taylodl.wordpress.com/2013/06/07/functional-javascript-tail-call-optimization-and-trampolines/


*/