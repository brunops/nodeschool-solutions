function loadUsers(userIds, load, done) {
  var users = [],
      loaded = 0;

  userIds.forEach(function(userId, index) {
    load(userId, function(user) {
      if (user) {
        users[index] = user;
      }

      if (++loaded === userIds.length) {
        return done(users);
      }
    });
  });
}


module.exports = loadUsers
