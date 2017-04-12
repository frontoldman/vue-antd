/**
* Created by zhangran on 2017/4/12.
 */



<template>
  <div class="container">
    <ant-affix class="test1" :offsetTop="50">
      <ant-button>top</ant-button>
    </ant-affix>

    <ant-affix class="test2" :offsetBottom="50">
      <ant-button>bottom</ant-button>
    </ant-affix>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Affix',
    data() {
      return {}
    },
    mounted() {
    },
    methods: {},
    components: {}
  }
</script>


<style lang="less" rel="stylesheet/less" scoped>
  .container {
    height: 2000px;
    .test1 {
      margin: 100px
    }
    .test2 {
      margin-top: 800px;
    }
  }
</style>