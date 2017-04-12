/**
* Created by zhangran on 2017/4/12.
 */


<template>
  <div>

    <hr style="margin: 10px 0"/>

    <ant-button type="primary">Primary</ant-button>
    <ant-button type="dashed">Dashed</ant-button>
    <ant-button type="danger">Danger</ant-button>
    <ant-button>Default</ant-button>

    <hr style="margin: 10px 0"/>

    <ant-button @click="clickTest($event)" icon="search">Search</ant-button>
    <ant-button icon="search" shape="circle">Search</ant-button>

    <hr style="margin: 10px 0"/>

    <ant-button @click="clickTest(event)" disabled type="primary">Primary</ant-button>

    <hr style="margin: 10px 0"/>

    <ant-button type="primary" shape="circle" loading></ant-button>
    <ant-button type="dashed" loading>Dashed</ant-button>

    <hr style="margin: 10px 0"/>

    <ant-button type="dashed" loading size="sm">Dashed</ant-button>
    <ant-button type="dashed" size="lg">Dashed</ant-button>

    <hr style="margin: 10px 0"/>

    <div style="background: rgb(190, 200, 200); padding: 26px 16px 16px">
      <ant-button type="dashed" ghost>Dashed</ant-button>
    </div>

    <hr style="margin: 10px 0"/>

    <ant-button html-type="submit">Dashed</ant-button>

    <hr style="margin: 10px 0"/>

    <ant-button-group>
      <ant-button>Default</ant-button><ant-button>Default</ant-button>
    </ant-button-group>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Button',
    data() {
      return {}
    },
    mounted() {

    },
    methods: {
      clickTest(event) {
        alert(event)
      }
    },
    components: {}
  }
</script>


<style lang="less" rel="stylesheet/less" scoped>

</style>
