<template>
  <div class="t-carousel">
    <ul
      class="carousel"
      :style="{
        'transform': 'translate3d(' + -(index * 20) + '%, 0, 0)'
      }">
      <li v-for="carousel in carousels">
        <a :href="carousel.url" target="_blank">
          <img :src="carousel.pic">
        </a>
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
    <div class="s-bottom"><a class="show-info" :href="url" target="_blank">{{ name }}</a></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      index: 0,
      set: '',
      url: '',
      name: ''
    }
  },
  watch: {
    index () {
      this.name = this.carousels[this.index].name
      this.url = this.carousels[this.index].url
    },
    carousels () {
      this.name = this.carousels[this.index].name
      this.url = this.carousels[this.index].url
    }
  },
  props: {
    carousels: {
      type: Array,
      default: () => {
        return [
          {
            name: '',
            url: ''
          }
        ]
      }
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
        if (this.carousels.length > 0) {
          this.index = this.index >= this.carousels.length - 1 ? 0 : this.index += 1
        }
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
    background: url(http://static.hdslb.com/images/v3images/img_loading.png) no-repeat;
    background-size: auto;
    background-position: center;

    ul.carousel {
      width: 500%;
      height: 100%;
      transition: transform .3s cubic-bezier(.86,0,.07,1);
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
      z-index: 2;

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

  .s-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 35px;
    background: #000;
    background: linear-gradient(transparent,rgba(0,0,0,0.1) 20%,rgba(0,0,0,0.2) 35%,rgba(0,0,0,0.5) 65%,rgba(0,0,0,0.66));
    border-radius: 0 0 4px 4px;
    z-index: 1;

    a.show-info{
      position: absolute;
      color: white;
      left: 20px;
      width: auto;
      line-height: 35px;
      font-size: 14px;
      height: 35px;
      cursor: pointer;
      z-index: 99;
    }
  }
</style>
