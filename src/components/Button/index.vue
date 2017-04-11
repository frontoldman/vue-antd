/**
* Created by zhangran on 2017/4/11.
 */


<template>
  <button type="button" :class="btnCls()">
    <ant-icon v-if="icon" :type="icon"></ant-icon>
    <span v-if="shape !== 'circle'"><slot></slot></span>
  </button>
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
      },
      shape: {
        type: String,
        validator: function (value) {
          return value === 'circle' || value === ''
        }
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
          defaultCls = [
            ...defaultCls,
            `ant-btn-${this.type}`
          ]
        }

        if (this.shape === 'circle') {
          defaultCls = [
            ...defaultCls,
            'ant-btn-circle',
            'ant-btn-icon-only'
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