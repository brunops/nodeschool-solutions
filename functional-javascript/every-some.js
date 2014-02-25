module.exports = function checkUsersValid(goodUsers) {
  goodUsers = goodUsers.map(function(user) {
    return user.id;
  });

  return function(users) {
    return users.map(function(user) {
      return user.id;
    }).every(function(id) {
      return goodUsers.indexOf(id) > -1;
    });
  }
};
