/**
* Created by zhangran on 2017/4/12.
 */


<template>
  <div>
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'index',
    data() {
      return {}
    },
    mounted() {

    },
    methods: {
      getCls() {
        return ['ant-affix']
      }
    },
    components: {}
  }
</script>


<style lang="less" rel="stylesheet/less" scoped>

</style>