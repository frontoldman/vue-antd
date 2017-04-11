/**
* Created by zhangran on 2017/4/11.
 */


<template>
  <button type="button" :class="btnCls()"><slot></slot></button>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Button',
    props: {
      type: {
        type: String,
        default: ''
      },
      icon: {
        type: String
      }
    },
    data() {
      return {

      }
    },
    mounted() {

    },
    methods: {
      btnCls() {
        var defaultCls = ['ant-btn']
        if (this.type) {
          return [
            ...defaultCls,
            `ant-btn-${this.type}`
          ]
        }
        return defaultCls
      }
    },
    components: {}
  }
</script>


<style lang="less" rel="stylesheet/less" scoped>

</style>