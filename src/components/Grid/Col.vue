/**
* Created by zhangran on 2017/4/12.
 */


<template>
  <div :class="getCls()">
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
      }
    },
    data() {
      return {}
    },
    mounted() {

    },
    methods: {
      getCls() {
        var defaultCls = [`ant-col-${this.span}`]

        if (this.offset) {
          defaultCls.push(`ant-col-offset-${this.offset}`)
        }

        if (this.pull) {
          defaultCls.push(`ant-col-pull-${this.pull}`)
        }

        return defaultCls
      }
    },
    components: {}
  }
</script>


<style lang="less" rel="stylesheet/less" scoped>

</style>