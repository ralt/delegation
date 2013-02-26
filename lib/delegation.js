/*jshint browser: true, node: true */

"use strict";

module.exports = delegation;

// Shim for matchesSelector
var matchesSelector = function() {
    var shims = ['matchesSelector', 'mozMatchesSelector',
        'webkitMatchesSelector', 'oMatchesSelector', 'msMatchesSelector'];

    for (var i = 0, l = shims.length; i < l; i++) {
        if (shims[i] in document) {
            return shims[i];
        }
    }
}();

function delegation(parent, evt, selector, fn) {
    parent.addEventListener(evt, function(e) {
        var elt = function find(el) {
            if (el[matchesSelector](selector)) {
                return el;
            }

            if (el.parentNode !== parent) {
                return find(el.parentNode);
            }

            return false;
        }(e.target);

        if (elt) {
            fn.apply(elt, arguments);
        }
    }, false);
}
