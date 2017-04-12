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

    <ant-row :gutter="100">
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

    <hr style="margin: 10px 0"/>

    <ant-row>
      <ant-col :xs="{span: 24, offset: 0}" :lg="{span: 11, offset: 1}">
        <div :style="style"></div>
      </ant-col>
      <ant-col :xs="{span: 24, offset: 0}" :lg="{span: 11, offset: 1}">
        <div :style="style"></div>
      </ant-col>
    </ant-row>

    <hr style="margin: 10px 0"/>

    <ant-row style="height: 200px;background: rosybrown" type="flex" align="middle" justify="space-around">
      <ant-col :style="style" :span="8"></ant-col>
      <ant-col :style="style"  :span="8"></ant-col>
    </ant-row>

    <hr style="margin: 10px 0"/>

    <ant-row type="flex" align="middle" justify="space-around">
      <ant-col :style="style2" :span="4" :offset="2" :order="4">1</ant-col>
      <ant-col :style="style2"  :span="4" :offset="2" :order="3">2</ant-col>
      <ant-col :style="style2"  :span="4" :offset="2" :order="2">3</ant-col>
      <ant-col :style="style2"  :span="4" :offset="2" :order="1">4</ant-col>
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
        },
        style2: {
          border: '1px solid #ddd'
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