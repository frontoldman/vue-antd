/**
* Created by zhangran on 16/11/2.
*/

<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'app',
    data() {
      return {}
    }
  }
</script>


<style lang="less" rel="stylesheet/less">
  *{
    margin: 0;
    padding: 0;
  }
  body{
    background: #e2e9ef;
  }
</style>
