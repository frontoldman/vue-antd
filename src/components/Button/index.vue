/**
* Created by zhangran on 2017/4/11.
 */


<template>
  <button @click="handleClick" :disabled="disabled" type="button" :class="btnCls()">
    <ant-icon v-if="icon" :type="icon"></ant-icon>
    <ant-icon v-if="loading" type="loading"></ant-icon>
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
      },
      disabled: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      size: {
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
          defaultCls = [
            ...defaultCls,
            `ant-btn-${this.type}`
          ]
        }

        if (this.size) {
          defaultCls = [
            ...defaultCls,
            `ant-btn-${this.size}`
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
      },
      // Vue disabled元素自动禁止点击事件
      handleClick(event) {
        this.$emit('click', event)  // event调用的时候需要传入$event, 否则注入不了
      }
    },
    components: {}
  }
</script>


<style lang="less" rel="stylesheet/less" scoped>

</style>