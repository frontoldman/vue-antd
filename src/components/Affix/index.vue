/**
* Created by zhangran on 2017/4/12.
 */


<template>
  <div :class="getCls()" :style="style">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  import { insertAfter, removeEle } from '../../util/'

  export default {
    name: 'index',
    props: {
      offsetTop: {
        type: Number
      },
      offsetBottom: {
        type: Number
      }
    },
    data() {
      return {
        initState: {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          width: 0,
          height: 0
        },
        float: false,
        isChrome: window.chrome,
        shadowDom: null,
        style: {
          top: 'auto',
          bottom: 'auto'
        },
        winHeight: window.innerHeight
      }
    },
    mounted() {
      this.getInitState()
      window.addEventListener('scroll', this._scroll, false)
      window.addEventListener('resize', this._scroll, false)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this._scroll)
      window.removeEventListener('resize', this._scroll)
    },
    methods: {
      getCls() {
        if (this.float) {
          return ['ant-affix']
        }
        return []
      },
      getInitState() {
        var clientRect = this.$el.getBoundingClientRect()
        var cs = window.getComputedStyle(this.$el, null)

        this.initState = {
          left: clientRect.left,
          top: clientRect.top + this.getScrollTop(),
          right: clientRect.right,
          bottom: clientRect.bottom,
          width: clientRect.width,
          height: clientRect.height,
          marginLeft: cs.getPropertyValue('margin-left'),
          marginRight: cs.getPropertyValue('margin-right'),
          marginTop: cs.getPropertyValue('margin-top'),
          marginBottom: cs.getPropertyValue('margin-bottom')
        }

        this.createShadowDom()
      },
      _scroll() {
        var scrollTop = this.getScrollTop()
        var type = 'top'
        var distance = 0

        if (typeof this.offsetTop === 'undefined' && typeof this.offsetBottom === 'undefined') {
          type = 'top'
          distance = 0
        } else if (this.offsetTop) {
          type = 'top'
          distance = this.offsetTop
        } else if (typeof this.offsetBottom !== 'undefined') {
          type = 'bottom'
          distance = this.offsetBottom
        }

        if (type === 'top') {
          if (scrollTop >= this.initState.top - distance && scrollTop >= distance) {
            if (this.float) {
              return
            }

            this.float = true
            this.style = {
              top: `${distance}px`,
              marginTop: 0
            }
            insertAfter(this.shadowDom, this.$el)
          } else {
            this.reset()
          }
        } else {
          var _scroll = scrollTop + this.winHeight - this.initState.top - this.initState.height
          if (_scroll >= distance && _scroll > 0) {
            if (this.float) {
              return
            }

            this.float = true
            this.style = {
              bottom: `${distance}px`
            }
            insertAfter(this.shadowDom, this.$el)
          } else {
            this.reset()
          }
        }
      },
      getScrollTop() {
        return this.isChrome ? document.body.scrollTop : document.documentElement.scrollTop
      },
      reset() {
        this.float = false
        this.style = {
          top: 'auto',
          bottom: 'auto'
        }
        removeEle(this.shadowDom)
      },
      createShadowDom() {
        var shadowDom = document.createElement('div')
        shadowDom.style.width = this.initState.width + 'px'
        shadowDom.style.height = this.initState.height + 'px'
        shadowDom.style.marginLeft = this.initState.marginLeft
        shadowDom.style.marginRight = this.initState.marginRight
        shadowDom.style.marginTop = this.initState.marginTop
        shadowDom.style.marginBottom = this.initState.marginBottom
        this.shadowDom = shadowDom
      }
    },
    components: {}
  }
</script>


<style lang="less" rel="stylesheet/less" scoped>

</style>