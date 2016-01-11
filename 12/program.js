// function Spy(target, method) {
//   var count = 0;
//   // SOLUTION GOES HERE
//   //console.log('this', this);
//   if(this[target][method].hasOwnProperty(arguments)){
//     console.log('called');
//   }
//   Spy(target, method);
// }


function Spy(target, method){
  var originalFunction = target[method];
  var result = {
    count: 0
  };

  target[method] = function(){
    result.count++;
    return originalFunction.apply(this, arguments);
  }
  return result;
}

module.exports = Spy


// looks like a 'has own property' situation

/*

## Hint

  * Functions have context, input and output. Make sure you consider the context, input to *and output from* the function you are spying on.

*/