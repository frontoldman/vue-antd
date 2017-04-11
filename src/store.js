/**
 * Created by zhangran on 16/11/4.
 */
require('es6-promise').polyfill()
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import menu from './menu'
import localStorage from './util/localStorage'

Vue.use(Vuex)

const baseUrl = '/platform/api/interfaces'
var plugins = process.env.NODE_ENV === 'development' ? [createLogger()] : []

const store = new Vuex.Store({
  state: {
    menu: menu,
    userInfo: localStorage.get('userInfo')
  },
  actions: {
    GET_DOCLIST({commit}) {
      Vue.http({
        url: `${baseUrl}/list.do`,
        query: {
          pageNo: 1,
          pageSize: 10000
        }
      }).then(data => {
      })
    }
  },
  mutations: {
    SET_USER_INFO(state, payload) {
      state.userInfo = payload.userInfo
      localStorage.set('userInfo', payload.userInfo)
    },
    CLEAR_USER_INFO(state) {
      state.userInfo = null
      localStorage.set('userInfo', null)
    }
  },
  getters: {

  },
  strict: true,
  plugins: plugins
})

export default store
