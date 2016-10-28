<template>
  <div class="content">
    <div class="b-page-header">
      <topNav></topNav>
      <bgNav></bgNav>
    </div>
    <div class="b-page-body">
      <!-- 顶部 -->
      <div class="container" id="index-top">
        <div class="b-l">
          <Mcarousel></Mcarousel>
        </div>
        <div class="b-r">
          <Lcarousel></Lcarousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from '../components/TopNav'
import BgNav from '../components/BgNav'
import Mcarousel from '../components/Mcarousel'
import Lcarousel from '../components/Lcarousel'

export default {
  data () {
    return {
    }
  },
  components: {
    TopNav,
    BgNav,
    Mcarousel,
    Lcarousel
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

  ul, span, p, h1, h2, h3, a {
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

  #index-top {
    height: 240px;
    margin-bottom: 20px;
  }

  .container {
    width: 1160px;
    clear: both;
    margin: auto;

    .b-l {
      float: left;
      width: 440px;
    }

    .b-r {
      float: right;
      width: 720px;
    }
  }

  @media screen and (max-width: 1400px) {
    .container {
      width: 980px;

      .b-r {
        width: 540px;
      }
    }
  }
</style>
