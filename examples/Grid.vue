/**
* Created by zhangran on 2017/4/12.
 */



<template>
  <div>
    <ant-row>
      <ant-col class="test" style="height: 50px;background: rebeccapurple" :span="12"></ant-col>
      <ant-col style="height: 50px;background: rosybrown" :span="12"></ant-col>
    </ant-row>

    <hr style="margin: 10px 0"/>

    <ant-row>
      <ant-col style="height: 50px;background: rebeccapurple" :span="8"></ant-col>
      <ant-col style="height: 50px;background: rosybrown" :span="8" :offset="8"></ant-col>
    </ant-row>

    <hr style="margin: 10px 0"/>

    <ant-row>
      <ant-col style="height: 50px;background: rebeccapurple" :span="8"></ant-col>
      <ant-col style="height: 40px;background: rosybrown" :span="8" :pull="2"></ant-col>
    </ant-row>

    <hr style="margin: 10px 0"/>

    <ant-row :gutter="10">
      <ant-col :span="6">
        <div :style="style"></div>
      </ant-col>
      <ant-col :span="6">
        <div :style="style"></div>
      </ant-col>
      <ant-col :span="6">
        <div :style="style"></div>
      </ant-col>
      <ant-col :span="6">
        <div :style="style"></div>
      </ant-col>
    </ant-row>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Grid',
    data() {
      return {
        style: {
          height: '50px',
          background: 'rebeccapurple'
        }
      }
    },
    mounted() {

    },
    methods: {},
    components: {}
  }
</script>


<style lang="less" rel="stylesheet/less" scoped>

</style>