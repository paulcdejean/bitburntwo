var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/reverse-string/reverse-string.js
var require_reverse_string = __commonJS({
  "node_modules/reverse-string/reverse-string.js"(exports, module) {
    var regexUnicode = /([\0-\u02FF\u0370-\u1AAF\u1B00-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uE000-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])([\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]+)/g;
    var regexAstral = /([\uD800-\uDBFF])([\uDC00-\uDFFF])/g;
    function reverse2(string) {
      if (typeof string !== "string") {
        throw new TypeError("Expected a string");
      }
      string = string.replace(regexUnicode, function($0, $1, $2) {
        return reverse2($2) + $1;
      }).replace(regexAstral, "$2$1");
      var result = "";
      for (var i = string.length - 1; i >= 0; i--) {
        result += string[i];
      }
      return result;
    }
    if (typeof module !== "undefined" && module.exports) {
      module.exports = reverse2;
    }
  }
});

// src/n00dles.js
var reverse = require_reverse_string();
async function main(ns) {
  ns.tprint(reverse("Hello world"));
}
export {
  main
};
