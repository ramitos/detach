var type = require('type')

module.exports = function (node, async, fn) {
  if (type(async) !== 'boolean') {
    fn = async
    async = false
  }

  var parent = node.parentNode
  var next = node.nextSibling

  // No parent node? Abort!
  if (!parent && fn) return fn(new Error('No parent node'))
  if (!parent) return

  // Detach node from DOM.
  parent.removeChild(node)

  // Re-attach node to DOM.
  function reattach() {
    parent.insertBefore(node, next)
    return true
  }

  // Note that if a function wasn't passed, the node won't be re-attached!
  // If async == true, reattach must be called manually.
  if (fn && async) return fn.call(node, null, reattach)
  // If async != true, reattach will happen automatically.
  else if(fn) return fn.call(node) && reattach()
}