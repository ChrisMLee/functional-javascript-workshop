function duckCount() {
  return Array.prototype.filter.call(arguments, function findQuackItems(argument){
    return Object.prototype.hasOwnProperty.call(argument, 'quack');
  }).length;
}

 // function duckCount() {
 //      return Array.prototype.slice.call(arguments).filter(function(obj) {
 //        return Object.prototype.hasOwnProperty.call(obj, 'quack')
 //      }).length
 //    }

module.exports = duckCount