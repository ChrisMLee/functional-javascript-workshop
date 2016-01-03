function Spy(target, method) {
  // SOLUTION GOES HERE
  console.log('this', this);
}

module.exports = Spy


// looks like a 'has own property' situation

/*

## Hint

  * Functions have context, input and output. Make sure you consider the context, input to *and output from* the function you are spying on.

*/