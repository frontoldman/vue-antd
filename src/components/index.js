/**
 * Created by zhangran on 2017/4/11.
 */
import Badge from './Badge/index.js'
import Button from './Button/'
import ButtonGroup from './Button/ButtonGroup'
import Icon from './Icon/'

export default {
  install(Vue, options) {
    Vue.component('ant-badge', Badge)
    Vue.component('ant-button', Button)
    Vue.component('ant-button-group', ButtonGroup)
    Vue.component('ant-icon', Icon)
  }
}
