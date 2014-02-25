module.exports = function checkUsersValid(goodUsers) {
  return function(testUsers) {
    return testUsers.every(function(testUser) {
      return goodUsers.some(function(goodUser) {
        return testUser.id === goodUser.id;
      });
    });
  }
};
