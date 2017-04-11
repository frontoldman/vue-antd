/**
 * Created by zhangran on 16/12/19.
 */

export function timestampformat(timestamp, format = 'yyyy-MM-dd') {
  if (!timestamp) {
    return ''
  }
  return formatFn(new Date(timestamp), format)
}

export function formatFn(date, format) {
  var o = {
    'M+': date.getMonth() + 1,
    // month
    'd+': date.getDate(),
    // day
    'h+': date.getHours(),
    // hour
    'm+': date.getMinutes(),
    // minute
    's+': date.getSeconds(),
    // second
    'q+': Math.floor((date.getMonth() + 3) / 3),
    // quarter
    'S': date.getMilliseconds()
    // millisecond
  }
  if (/(y+)/.test(format) || /(Y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
    }
  }
  return format
}

export function strFilter(value, length = 10) {
  if (value && typeof value === 'string') {
    var _val = value.slice(0, length)
    if (value.length > length) {
      _val += '...'
    }
    return _val
  }
  return ''
}
