/**
 * Created by zhangran on 17/3/22.
 */

import { timestampformat } from './index'

export default function (Vue) {
  Vue.filter('date', function (value, type = 1) {
    if (!value) {
      return value
    }
    var timeMaps = {
      1: 'yyyy-MM-dd',
      2: 'yyyy-MM-dd hh:mm:ss',
      3: 'yyyy-MM-dd hh:mm'
    }
    return timestampformat(value, timeMaps[type])
  })

  Vue.filter('percent', function (value) {
    if (isNaN(value)) {
      return ''
    }

    return (value * 100).toFixed(2) + '%'
  })
}
