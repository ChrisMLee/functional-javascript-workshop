function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    var goodUsersIds = goodUsers.map(function(user){ return user.id});
    return submittedUsers.every(function includedInGoodUsers(element){
      return goodUsersIds.indexOf(element.id) > -1;
    }); 
  };
}

module.exports = checkUsersValid

/* some() executes the callback function once for each element present in the array until it finds one where callback returns a true value. */

// module.exports = function checkUsersValid(goodUsers) {
//   return function allUsersValid(submittedUsers) {
//     return submittedUsers.every(function(submittedUser) {
//       return goodUsers.some(function(goodUser) {
//         return goodUser.id === submittedUser.id
//       })
//     })
//   }
// }