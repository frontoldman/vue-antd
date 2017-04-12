/**
* Created by ruanruan on 2017/4/12.
*/

<template>
  <span v-if="dot" :class="classes" title="count">
        <slot></slot>
        <sup :class="dotClasses"></sup>
  </span>
  <span v-else :class="classes">
      <slot></slot>
      <sup v-if="count" :class="countClasses" :style="antStyle">{{ finalCount }}</sup>
  </span>
</template>

<script type="text/ecmascript-6">
  const classes = 'ant-badge'
  const dotClasses = 'ant-badge-dot'
  const countClasses = 'ant-badge-count'

  export default{
    name: 'Badge',
    components: {},
    props: {
      count: [Number, String],
      height: {
        type: [String, Number],
        default: 18
      },
      dot: {
        type: Boolean,
        default: false
      },
      overflowCount: {
        type: [Number, String],
        default: 100
      },
      antStyle: Object
    },
    computed: {
      classes() {
        return `${classes}`
      },
      dotClasses() {
        return `${dotClasses}`
      },
      countClasses() {
        return `${countClasses}`
      },
      finalCount() {
        return parseInt(this.count) >= parseInt(this.overflowCount) ? `${this.overflowCount}+` : this.count
      }
    },
    data() {
      return {}
    },
    methods: {},
    mounted() {
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .ant-badge-count {
    position: absolute;
    transform: translateX(50%);
    top: -10px;
    right: 0;
    height: 20px;
    border-radius: 10px;
    min-width: 20px;
    background: #f30;
    border: 1px solid transparent;
    color: #fff;
    line-height: 18px;
    text-align: center;
    padding: 0 6px;
    font-size: 12px;
    white-space: nowrap;
    transform-origin: -10% center;
    z-index: 10;
    box-shadow: 0 0 0 1px #fff;
  }

  .ant-badge-dot {
    position: absolute;
    transform: translateX(-50%);
    transform-origin: 0 center;
    top: -4px;
    right: -8px;
    height: 8px;
    width: 8px;
    border-radius: 100%;
    background: #f30;
    z-index: 10;
    box-shadow: 0 0 0 1px #fff;
  }
</style>
