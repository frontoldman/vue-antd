/**
 * Created by zhangran on 16/12/19.
 */

export function insertAfter(newEl, targetEl) {
  var parentEl = targetEl.parentNode
  if (parentEl.lastChild === targetEl) {
    parentEl.appendChild(newEl)
  } else {
    parentEl.insertBefore(newEl, targetEl.nextSibling)
  }
}

export function removeEle(el) {
  el && el.parentNode && el.parentNode.removeChild(el)
}
