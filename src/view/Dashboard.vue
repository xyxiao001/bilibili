<template>
  <div class="content">
    <topNav></topNav>
    <bgNav></bgNav>
  </div>
</template>

<script>
import TopNav from 'TopNav'
import BgNav from 'BgNav'

export default {
  data () {
    return {
    }
  },
  components: {
    TopNav,
    BgNav
  },
  methods: {
  },
  // 页面进入执行
  mounted () {
  },
  // 页面切换
  destroyed () {
  }
}
</script>

<style lang="scss">
  body {
    font-family: "Microsoft YaHei",Arial,Helvetica,sans-serif;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  body, ul, p, h1, h2, h3 {
    margin: 0;
    padding: 0;
  }

  a {
    color: black;
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }
  .hide {
    display: none;
  }
</style>
