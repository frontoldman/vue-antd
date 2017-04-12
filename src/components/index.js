/**
 * Created by zhangran on 2017/4/11.
 */
import Button from './Button/'
import ButtonGroup from './Button/ButtonGroup'
import Icon from './Icon/'

export default {
  install(Vue, options) {
    Vue.component('ant-button', Button)
    Vue.component('ant-button-group', ButtonGroup)
    Vue.component('ant-icon', Icon)
  }
}
