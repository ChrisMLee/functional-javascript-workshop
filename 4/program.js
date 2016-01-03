function getShortMessages(messages) {
  // SOLUTION GOES HERE
  return messages.filter(function isLessThanFifty(message){
    return message.message.length < 50;
  }).map(function getMessage(message){ return message.message });
}

module.exports = getShortMessages


// function isBigEnough(value) {
//   return value >= 10;
// }
// var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);