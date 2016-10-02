<template>
  <div class="content">
    <topNav></topNav>
    <bgNav></bgNav>
  </div>
</template>

<script>
import TopNav from '../components/TopNav'
import BgNav from '../components/BgNav'

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
  html,body {
    margin: 0;
    padding: 0;
    font-size: 12px;
    font-family: "Microsoft YaHei",Arial,Helvetica,sans-serif;
    background: #fff;
    color: #222;
    min-height: 990px;
    -webkit-tap-highlight-color: transparent;
  }

  ul, span, p, h1, h2, h3 {
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
