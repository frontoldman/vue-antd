/**
 * Created by zhangran on 16/12/19.
 */
import { Message } from 'element-ui'
import 'whatwg-fetch'

const config = {
  credentials: 'include'
}

export default function http(options) {
  var fetchConfig = {
    headers: {}
  }
  var body
  var query
  var _query
  var url = options.url

  if (options.method) {
    fetchConfig.method = options.method.toUpperCase()
  }

  if (/post|put/i.test(options.method)) {
    body = options.body

    if (typeof body === 'object') {
      fetchConfig.body = Object.keys(body).map(key => `${key}=${body[key]}`).join('&')
    }
    fetchConfig.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  } else {
    query = options.query
    url += `?random=${Math.random()}`
    if (typeof query === 'object') {
      _query = Object.keys(query).map(key => `${key}=${query[key]}`).join('&')
      if (url.indexOf('?') !== -1) {
        url += '&' + _query
      } else {
        url += '?' + _query
      }
    }
    fetchConfig.headers['Cache-Control'] = 'no-cache'
  }
  var fetchPromise = fetch(url, {
    ...config,
    ...fetchConfig
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      return Promise.reject(response)
    })
    .catch(e => Message.error(e.statusText))

  return fetchPromise
}
