module.exports = function (context) {
  return context.data.root.query.name + context.data.root.query.suffix;
};

