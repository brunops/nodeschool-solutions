module.exports = function checkUsersValid(goodUsers) {
  return function(users) {
    return users.every(function(regularUser) {
      return goodUsers.some(function(goodUser) {
        return regularUser.id === goodUser.id; 
      }); 
    });
  };
};
