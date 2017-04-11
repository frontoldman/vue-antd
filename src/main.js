/**
 * Created by zhangran on 16/11/2.
 */
import 'antd/dist/antd.css'
import Vue from 'vue'
import router from './router/'
import App from './App'
import vueAntd from './components/'

Vue.use(vueAntd)

function init() {
  return new Vue({
    el: '#app',
    template: '<App/>',
    router,
    components: {App}
  })
}

init()
