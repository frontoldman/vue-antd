/**
* Created by ruanruan on 2017/4/12.
*/

<template>
  <div style="margin: 20px;">
    <div style="display: flex">
      <ant-badge :count="5">
        <a href="#" class="head-example"/>
      </ant-badge>
      <div style="margin-right: 40px"></div>
      <ant-badge :count="0">
        <a href="#" class="head-example"/>
      </ant-badge>
    </div>
    <hr style="margin: 20px 0"/>

    <div style="display: flex">
      <ant-badge :count="5"></ant-badge>
      <div style="margin-right: 40px"></div>
      <ant-badge :count="4" :ant-style="styleOne"></ant-badge>
      <div style="margin-right: 40px"></div>
      <ant-badge :count="109" :ant-style="styleTwo"></ant-badge>
      <div style="margin-right: 40px"></div>
      <ant-badge :count="109" :ant-style="styleTwo" dot></ant-badge>
    </div>
    <hr style="margin: 20px 0"/>

    <div style="display: flex">
      <ant-badge dot><ant-icon type="notification" /></ant-badge>
      <div style="margin-right: 40px"></div>
      <ant-badge dot><a href="#">Link something</a></ant-badge>
    </div>
  </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'Badge',
    components: {},
    props: {},
    computed: {},
    data() {
      return {
        styleOne: {
          backgroundColor: '#fff',
          color: '#999'
        },
        styleTwo: {
          backgroundColor: '#87d068'
        }
      }
    },
    methods: {},
    mounted() {
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .head-example {
    width: 42px;
    height: 42px;
    border-radius: 6px;
    background: #eee;
    display: inline-block;
  }
</style>