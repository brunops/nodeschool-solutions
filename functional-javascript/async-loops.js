function loadUsers(userIds, load, done) {
  var users = [],
      userIndex = 0;

  var usersLoaded = 0;

  var loadAsync = function(userIndex) {
    load(userIds[userIndex], (function(index) {
      return function(user) {
        ++usersLoaded;
        if (user) {
          users[index] = user;
        }

        if (usersLoaded === userIds.length) {
          done(users);
        }
      }

    })(userIndex));


    userIndex++;
    if (userIndex < userIds.length) {
      loadAsync(userIndex);
    }
  };

  loadAsync(0);
}


module.exports = loadUsers
