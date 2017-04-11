/**
* Created by zhangran on 2017/4/11.
 */


<template>
  <i :class="iconCls()"></i>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Icon',
    props: {
      type: {
        type: String,
        required: true
      }
    },
    data() {
      return {}
    },
    mounted() {

    },
    methods: {
      iconCls() {
        var cls = []
        if (this.type === 'loading') {
          cls = ['anticon-spin']
        }
        return [
          'anticon',
          `anticon-${this.type}`,
          ...cls
        ]
      }
    },
    components: {}
  }
</script>


<style lang="less" rel="stylesheet/less" scoped>

</style>