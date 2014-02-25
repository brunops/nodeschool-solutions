function loadUsers(userIds, load, done) {
  var totalUsers = userIds.length,
      usersLoaded = 0,
      users = [];

  userIds.map(function(id, index) {
    load(id, function(user) {
      users[index] = user;
      usersLoaded++;

      if (usersLoaded === totalUsers) {
        done(users);
      }
    });
  });
}

module.exports = loadUsers;
