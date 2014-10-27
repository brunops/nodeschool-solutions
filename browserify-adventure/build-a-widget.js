var domify = require('domify');

module.exports = function () {
  var name = '';

  function getHtml() {
    return '<div>Hello <span class="name">' + name + '</span>!</div>';
  }

  return {
    setName: function (newName) {
      name = newName;
    },

    appendTo: function (el) {
      return el.appendChild(domify(getHtml()));
    }
  };
}

