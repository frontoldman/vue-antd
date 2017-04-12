/**
* Created by ruanruan on 2017/4/12.
*/

<template>
  <span v-if="dot" :class="classes" title="count">
        <slot></slot><!--
      --><sup :class="dotClasses" v-show="badge"></sup>
  </span>
  <span v-else :class="classes">
      <slot></slot><!--
      --><sup v-if="badge" :class="countClasses" :style="antStyle">{{ finalCount }}</sup>
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
      antStyle: Object,
      showZero: {
        type: Boolean,
        default: false
      }
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
      return {
        badge: true
      }
    },
    methods: {},
    mounted() {
      if (!this.showZero) {
        if (parseInt(this.count) === 0) {
          this.badge = false
        }
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>

</style>
