<template>
  <div class="content">
    <div class="b-page-header">
      <topNav :bg="navs.pic" :light="navs.style"></topNav>
      <bgNav :logo="navs.litpic" :bg="navs.pic" :title="navs.name" :url="navs.url"></bgNav>
    </div>
    <div class="b-page-body">
      <!-- 顶部 -->
      <div class="container" id="index-top">
        <div class="b-l">
          <Mcarousel :carousels="carousels"></Mcarousel>
        </div>
        <div class="b-r">
          <Lcarousel></Lcarousel>
        </div>
      </div>

      <!-- 推荐 -->
      <div class="container" id="promote">
        <div class="b-l">
          left
        </div>
        <div class="b-right">
          right
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
      carousels: [],
      navs: {
        name: '',
        litpic: '',
        pic: '',
        url: '',
        style: 0
      }
    }
  },
  components: {
    TopNav,
    BgNav,
    Mcarousel,
    Lcarousel
  },
  methods: {
    mcarousel () {
      this.$http.jsonp('https://api.bilibili.com/x/web-show/res/loc?jsonp=jsonp&pf=0&id=23').then((response) => {
        this.carousels = response.body.data
      }, (response) => {
        console.log('请求失败!')
      })
    },
    nav () {
      this.$http.jsonp('https://api.bilibili.com/x/web-show/res/loc?jsonp=jsonp&pf=0&id=142').then((response) => {
        this.navs = response.body.data[0]
      }, (response) => {
        console.log('请求失败!')
      })
    },
    placeholder () {
      this.$http.jsonp('https://www.bilibili.com/widget/getSearchDefaultWords').then((response) => {
        console.log(response)
      }, (response) => {
        console.log('请求失败!')
      })
    }
  },
  // 页面进入执行
  mounted () {
    // 请求轮播图
    this.mcarousel()
    // 输入框的placeholder 导航栏图片和文字
    this.nav()
    // this.placeholder()
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

  #promote {
    .b-l {
      width: 880px;
    }

    .b-r {
      min-height: 195px;
      height: 195px;
    }
  }

  @media screen and (max-width: 1400px) {
    .container {
      width: 980px;

      .b-r {
        width: 540px;
      }
    }

    #promote {
      .b-l {
        width: 700px;
      }
    }
  }
</style>
