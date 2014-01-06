function getDependencies(tree, deps) {
  var deps = deps || {},
      dependencies = tree.dependencies || [];

  if (dependencies) {
    Object.keys(dependencies).forEach(function(name, index) {
      var depName = [name, dependencies[name].version].join('@');
      deps[depName] = depName;

      getDependencies(dependencies[name], deps);
    });
  }

  return Object.keys(deps).sort();
}

module.exports = getDependencies;
