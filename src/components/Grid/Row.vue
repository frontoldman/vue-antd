/**
* Created by zhangran on 2017/4/12.
 */


<template>
  <div :class="getCls()" :style="getStyle()">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Row',
    props: {
      gutter: {
        type: Number,
        default: 0
      },
      type: {
        type: String
      },
      align: {
        type: String
      },
      justify: {
        type: String
      }
    },
    data() {
      return {}
    },
    mounted() {

    },
    methods: {
      getCls() {
        if (this.type === 'flex') {
          var defaultCls = ['ant-row-flex']
          if (this.align) {
            defaultCls.push(`ant-row-flex-${this.align}`)
          }

          if (this.justify) {
            defaultCls.push(`ant-row-flex-${this.justify}`)
          }

          return defaultCls
        }
        return ['ant-row']
      },
      getStyle() {
        if (this.gutter) {
          var margin = this.gutter / 2
          return {
            marginLeft: `${-margin}px`,
            marginRight: `${-margin}px`
          }
        }
        return {}
      }
    },
    components: {}
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>

</style>