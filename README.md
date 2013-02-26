delegation
===

Purpose
---

Implements event delegation.

Usage
---

```javascript
var delegation = require('delegation');

delegation(document, 'li', function(e) {
    console.log(this.nodeName); // "LI"
});
```

Contributors
---

- [Florian Margaine](http://margaine.com)

License
---

MIT License.
