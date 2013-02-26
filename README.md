delegation
===

Purpose
---

Implements event delegation.

Usage
---

```javascript
var delegation = require('delegation');

delegation(document, 'click', 'li', function(e) {
    console.log(this.nodeName); // "LI"
});
```

Installation
---

    npm install delegation

Contributors
---

- [Florian Margaine](http://margaine.com)

License
---

MIT License.
