/**
 * Created by zhangran on 17/3/21.
 */

/**
 * 命名空间
 * @type {string}
 */
const API_KEY = 'KINGSUM_KEY'

function set(key, value) {
  window.localStorage.setItem(`${API_KEY}_${key}`, JSON.stringify(value))
}

function get(key) {
  var value = window.localStorage.getItem(`${API_KEY}_${key}`)
  return JSON.parse(value)
}

export default {
  set,
  get
}
