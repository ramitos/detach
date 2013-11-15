# detach

from [cowboy/ba-detach.js](https://gist.github.com/cowboy/938767)

## install

```bash
component install ramitos/detach
```

## example

```js
// Get an element.
var elem = document.getElementById('huge-ass-table');

// Just detach element from the DOM.
detach(elem);

// Detach + exec fn + reattach, synchronous.
detach(elem, function(err) {
  // this == elem, do stuff here.
});

// Detach + exec fn + reattach, asynchronous.
detach(elem, true, function(err, reattach) {
  // this == elem, do stuff here, call reattach() when done!
  setTimeout(reattach, 1000);
});
```

## license

Copyright (c) 2011 "Cowboy" Ben Alman
Dual licensed under the MIT and GPL licenses.
http://benalman.com/about/license