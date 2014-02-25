function getDependencies(tree, allDeps) {
  allDeps = allDeps || {};
  var dependencies = tree.dependencies || [];

  Object.keys(dependencies).forEach(function(dep) {
    var fullDepName = [dep, dependencies[dep].version].join('@');
    allDeps[fullDepName] = fullDepName;
    getDependencies(dependencies[dep], allDeps);
  });

  return Object.keys(allDeps).sort();
}

module.exports = getDependencies;
