<template>
  <div class="content">
    <div class="body-bg" v-show="drap" @click="drap = !drap"></div>
    <div class="b-page-header">
      <topNav :bg="navs.pic" :light="navs.style"></topNav>
      <bgNav :logo="navs.litpic" :bg="navs.pic" :title="navs.name" :url="navs.url"></bgNav>
    </div>
    <!-- 导航栏 -->
    <SliderNav :lists="clists" :left="slideLeft" :offsetTop="offsetTop" :drap="drap" v-on:updateDrap="updateDrap"></SliderNav>
    <div class="b-page-body">
      <!-- 顶部 -->
      <div class="container" id="index-top" ref="container">
        <div class="b-l">
          <Mcarousel :carousels="carousels"></Mcarousel>
        </div>
        <div class="b-r">
          <Lcarousel></Lcarousel>
        </div>
      </div>
      <!-- 推荐 -->
      <section ref="navDetail">
        <div class="container b-section" v-for="item in clists" :id="item.id">
          <p>{{ item.name }}</p>
        </div>
      </section>
      <div class="footer container">
        <a href="https://github.com/xyxiao001" target="_blank">footer</a>
        <a href="https://github.com/xyxiao001" target="_blank">goodboy</a>
        <p>看看超过会怎样</p>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from '../components/TopNav'
import BgNav from '../components/BgNav'
import Mcarousel from '../components/Mcarousel'
import Lcarousel from '../components/Lcarousel'
import SliderNav from '../components/SliderNav'

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
      },
      slideLeft: 0,
      offsetTop: 150,
      drap: false,
      clists: [
        {
          name: '直播',
          id: 'zhibo'
        },
        {
          name: '动画',
          id: 'donghua'
        },
        {
          name: '番剧',
          id: 'fanjv'
        },
        {
          name: '国创',
          id: 'guochuang'
        },
        {
          name: '音乐',
          id: 'yinyue'
        },
        {
          name: '舞蹈',
          id: 'wudao'
        },
        {
          name: '游戏',
          id: 'youxi'
        },
        {
          name: '科技',
          id: 'keji'
        },
        {
          name: '生活',
          id: 'shenghuo'
        },
        {
          name: '鬼畜',
          id: 'guichu'
        },
        {
          name: '时尚',
          id: 'shishang'
        },
        {
          name: '广告',
          id: 'guanggao'
        },
        {
          name: '娱乐',
          id: 'yule'
        },
        {
          name: '电影',
          id: 'dianying'
        },
        {
          name: 'TV剧',
          id: 'tv'
        }
      ]
    }
  },
  components: {
    TopNav,
    BgNav,
    Mcarousel,
    Lcarousel,
    SliderNav
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
    },
    updateView () {
      var arr = Array.prototype.slice.call(this.$refs.navDetail.childNodes)
      arr.forEach((item, index) => {
        this.clists[index].height = parseInt(window.getComputedStyle(item).height.replace('px', ''))
        this.clists[index].top = item.offsetTop
      })
    },
    updateSlide () {
      var screenW = document.body.clientWidth
      var container = parseInt(window.getComputedStyle(this.$refs.container).width.replace('px', ''))
      this.slideLeft = (screenW + container) / 2 + 10
    },
    // 回调drap事件
    updateDrap (data) {
      this.drap = data
    }
  },
  // 页面进入执行
  mounted () {
    // 请求轮播图
    this.mcarousel()
    // 输入框的placeholder 导航栏图片和文字
    this.nav()
    // this.placeholder()

    // 获取页面模块位置,更新数据
    this.updateView()

    this.updateSlide()

    window.addEventListener('resize', () => {
      this.updateSlide()
    })
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

  .body-bg {
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
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

  .b-page-header {
    min-width: 1160px;
  }

  .b-section {
    height: 360px;
    margin-bottom: 20px;
    color: white;
    background-color: #00a1d6;
    font-size: 20px;
    text-align: center;
    line-height: 360px;
  }

  #donghua, #yinyue, #keji, #guanggao{
    background-color: #2ecc71;
  }

  #fanjv, #wudao, #shenghuo, #yule {
    background-color: #324057;
  }

  #guochuang, #youxi, #guichu, #dianying{
    background-color: #f05b72;
  }

  .footer {
    display: flex;
    flex-wrap: wrap;
    height: 1000px;
    color: #fffffb;
    background-color: #e5e9f2;

    a {
      width: 100%;
      text-align: center;
      text-decoration: none;
      font-size: 60px;
      color: #2980b9;
    }

    p {
      width: 100%;
      text-align: center;
      color: black;
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
