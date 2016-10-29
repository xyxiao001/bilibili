<template>
  <div class="t-carousel">
    <ul
      class="carousel"
      :style="{
        'transform': 'translate3d(' + -(index * 20) + '%, 0, 0)'
      }">
      <li v-for="carousel in carousels">
        <a :href="carousel.url" target="_blank">
          <img :src="carousel.img">
        </a>
        <a class="show-info" :href="carousel.url" target="_blank">{{ carousel.info }}</a>
      </li>
    </ul>
    <a class="more-topic" href="http://www.bilibili.com/topic/integrated-1.html" target="_blank">
      更多<i class="b-icon b-icon-arrow-r"></i>
    </a>
    <ul class="slider-bar">
      <li
        bar="bar"
        v-for="(carousel, $index) in carousels"
        :class="{'on': $index === index}"
        @click="go($index)"
        @mouseover="end"
        @mouseout="start">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      index: 0,
      set: '',
      carousels: [
        {
          url: 'http://www.bilibili.com/topic/1574.html',
          img: 'http://i0.hdslb.com/bfs/archive/7427bb6a8e285750788e531eda2c28f6c6bbc3ca.jpg@.webp',
          info: 'bilibili2016年7月新番完结报'
        },
        {
          url: 'http://e.cn.miaozhen.com/r/k=2031575&p=736P9&ae=1001381&dx=__IPDX__&rt=2&ns=__IP__&ni=__IESID__&v=__LOC__&xa=__ADPLATFORM__&ro=sm&vo=33904ba19&vr=2&o=http%3A%2F%2Fwww.bilibili.com%2Fblackboard%2Factivity-KFC161019.html',
          img: 'http://i0.hdslb.com/bfs/archive/22cdc2556a0a13d47954b3acc0b975590b23dae3.jpg@.webp',
          info: '搞怪小剧场'
        },
        {
          url: 'http://www.bilibili.com/video/av6777232/',
          img: 'http://i0.hdslb.com/bfs/archive/d540a49da5871cd6997c1fb63e6ce8a4e5e87433.jpg@.webp',
          info: '【故事王 StoryMan】总决赛'
        },
        {
          url: 'http://www.bilibili.com/topic/1579.html',
          img: 'http://i0.hdslb.com/bfs/archive/ad7039bfcd8efcf939871149d667cd2e4c72ecd9.jpg@.webp',
          info: '纪念红军长征胜利80周年'
        },
        {
          url: 'http://www.bilibili.com/html/bili-research-001.html',
          img: 'http://i0.hdslb.com/bfs/archive/466ee59ffc1d27837dde5b32ca6d2fc938576f32.png@.webp',
          info: '快戳进来=￣ω￣='
        }
      ]
    }
  },
  methods: {
    go (i) {
      this.index = i
    },
    end () {
      clearInterval(this.set)
    },
    start () {
      this.set = setInterval(() => {
        this.index = this.index >= 4 ? 0 : this.index += 1
      }, 5000)
    }
  },
  // 页面进入执行
  mounted () {
    // 启动定时器
    this.start()
  },
  // 页面切换
  destroyed () {
    this.end()
  }
}
</script>

<style lang="scss">
  .t-carousel {
    position: relative;
    width: 440px;
    height: 220px;
    overflow: hidden;

    ul.carousel {
      width: 500%;
      height: 100%;
      transition: transform .3s cubic-bezier(.86,0,.07,1),-webkit-transform .3s cubic-bezier(.86,0,.07,1);
      transform: translate3d(0, 0, 0);

      li {
        position: relative;
        width: 440px;
        height: 220px;
        float: left;
        overflow: hidden;

        a {
          display: inline-block;
          width: 100%;
          height: 80%;
          color: white;
        }

        a.show-info{
          position: absolute;
          top: 84%;
          left: 20px;
          width: auto;
          line-height: 35px;
          font-size: 14px;
          height: 35px;
          cursor: pointer;
        }

        a.show-info:hover {
          text-shadow: 0 0 3px #fff;
        }
      }
    }

    .more-topic {
      position: absolute;
      right: 15px;
      bottom: 35px;
      color: #fff;
      background: #444;
      background: rgba(0,0,0,0.64);
      width: 50px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      border-radius: 4px;
      opacity: 0;
      visibility: hidden;
      transition: .2s all linear;
    }

    .more-topic:hover {
      text-shadow: 0 0 3px #fff;
      color: #fff;
    }

    &:hover .more-topic {
      opacity: 1;
      visibility: visible;;
    }

    ul.slider-bar {
      position: absolute;
      right: 5px;
      bottom: 5px;
      overflow: hidden;
      padding: 2px 5px;

      li {
        float: left;
        cursor: pointer;
        width: 18px;
        height: 18px;
        margin: 2px 2px;
        background: url(http://static.hdslb.com/images/base/icons.png) -855px -790px no-repeat;

        &:hover {
          background-position: -919px -790px;
        }
      }

      li.on {
        background-position: -855px -727px;

        &:hover {
          background-position: -855px -727px;
        }
      }
    }
  }
</style>
