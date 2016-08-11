var postcss = require('postcss');

module.exports = postcss.plugin('postcss-emify', function(opts) {
  opts = opts || {
    base: 16,
    fallback: false
  };

  var convertToEm = function(expression) {
    var base = opts.base;
    var exp = /em\(([^)]+)\)/;

    var match = exp.exec(expression);
    var match = match[1].replace('px', '');
    var fallback = match + 'px';
    var value = match / base + 'em';

    return {
        em: value,
        fallback: fallback
    };
  };

  return function(css) {
    css.walkDecls(function(decl) {
      var exp = /em\(([^)]+)\)/g;
      var matches = decl.value.match(exp);
      var fallback = decl.value;

      if (!matches) {
        return;
      }

      matches.forEach(function(match, index) {
        var values = convertToEm(match);

        if (opts.fallback) {
            fallback = fallback.replace(match, values.fallback);
        }

        decl.value = decl.value.replace(match, values.em);
      });

      if (opts.fallback) {
        decl.cloneBefore({
          prop: decl.prop,
          value: fallback
        });
      }
    });
  };
});
