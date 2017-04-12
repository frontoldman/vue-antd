/**
* Created by zhangran on 2017/4/12.
 */


<template>
  <div :class="getCls()" :style="style">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Col',
    props: {
      span: {
        type: Number,
        default: 0
      },
      offset: {
        type: Number,
        default: 0
      },
      pull: {
        type: Number,
        default: 0
      },
      order: {
        type: Number
      },
      xs: {
        type: Object
      },
      sm: {
        type: Object
      },
      md: {
        type: Object
      },
      lg: {
        type: Object
      },
      xl: {
        type: Object
      }
    },
    computed: {
      style() {
        if (this.$parent.gutter) {
          var gutter = this.$parent.gutter / 2 + 'px'
          return {
            paddingLeft: gutter,
            paddingRight: gutter
          }
        }
        return {}
      }
    },
    data() {
      return {}
    },
    mounted() {
    },
    methods: {
      getCls() {
        var defaultCls = []

        if (this.span) {
          defaultCls.push(`ant-col-${this.span}`)
        }

        if (typeof this.offset !== 'undefined') {
          defaultCls.push(`ant-col-offset-${this.offset}`)
        }

        if (typeof this.pull !== 'undefined') {
          defaultCls.push(`ant-col-pull-${this.pull}`)
        }

        if (this.order) {
          defaultCls.push(`ant-col-order-${this.order}`)
        }

        ['xs', 'sm', 'md', 'lg', 'xl'].forEach(key => {
          if (this[key] && typeof this[key] === 'object') {
            if (typeof this[key].span !== 'undefined') {
              defaultCls.push(`ant-col-${key}-${this[key].span}`)
            }

            if (typeof this[key].offset !== 'undefined') {
              defaultCls.push(`ant-col-${key}-offset-${this[key].offset}`)
            }
          }
        })

        return defaultCls
      }
    },
    components: {}
  }
</script>


<style lang="less" rel="stylesheet/less" scoped>

</style>