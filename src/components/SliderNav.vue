<template lang="html">
  <div class="index-nav" :style="{'top': navTop + 'px', 'left': left + 'px'}" :class="{'draping': drap}">
    <transition name="fade">
      <span v-if="drap">
        <div class="nav-bg"></div>
        <div class="nav-tip"></div>
      </span>
    </transition>
    <div class="nav-list">
      <div class="nav-item" v-for="(item, $index) in lists" :class="{'activity': $index === nowItem}" @click="navClick(item.top - offsetTop, $index)">
        {{ item.name }}
      </div>
      <div class="nav-item choose" :style="{'transform': 'translate3d(0, '+ (nowItem + 1) * 32 + 'px, 0)'}"></div>
    </div>
    <div class="nav-item rank" title="排序" @click="changeDraps"><i class="n-icon-sort"></i><p>排序</p></div>
    <div class="gotop"><div class="s-line"></div><div class="btn_gotop" title="返回顶部" @click="goScroll(0)"></div></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nowItem: -1,
      navTop: 232,
      nowTop: 0
    }
  },
  props: {
    lists: {
      type: Array,
      default: []
    },
    offsetTop: {
      type: Number,
      default: 0
    },
    left: {
      type: Number,
      default: 0
    },
    drap: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // 更新导航选择的位置
    updateNav () {
      if (this.lists[0].top) {
        this.nowTop = window.scrollY
        this.lists.every((item, index) => {
          if (this.nowTop < item.top - this.offsetTop) {
            this.nowItem = index - 1
            return false
          } else {
            if (index === this.lists.length - 1) {
              if (this.nowTop >= item.top - this.offsetTop && this.nowTop < item.top + item.height) {
                this.nowItem = this.lists.length - 1
                return false
              } else {
                this.nowItem = this.lists.length
                return true
              }
            } else {
              this.nowItem = -1
              return true
            }
          }
        })
      }
    },

    // 导航点击
    navClick (top, index) {
      this.nowItem = index
      this.goScroll(top)
    },
    // 点击跳转
    goScroll (top) {
      var requestAnimationFrame
      if (window.requestAnimationFrame) {
        requestAnimationFrame = window.requestAnimationFrame
      } else {
        requestAnimationFrame = setTimeout((fn) => {
          fn()
        }, 17)
      }
      // 当前时间
      var t = 0
      // 初始值
      var b = window.scrollY
      // 变化量
      var c = top - b
      // 持续时间
      var d = 20
      var step = () => {
        var v = this.run(t, b, c, d)
        // console.log(v)
        window.scrollTo(0, v)
        t += 1
        if (t <= d) {
          requestAnimationFrame(step)
        }
      }
      step()
    },
    // 运动
    run (t, b, c, d) {
      return c * (t /= d) * t + b
    },

    // 排序
    changeDraps () {
      this.$emit('updateDrap', !this.drap)
    }
  },
  mounted () {
    // 获取滚动条高度
    this.updateNav()
    if (window.scrollY > 200) {
      this.navTop = 20
    } else {
      this.navTop = 232
    }
    window.onscroll = () => {
      this.updateNav()
      if (window.scrollY > 200) {
        this.navTop = 20
      } else {
        this.navTop = 232
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .index-nav {
    position: fixed;
    position: fixed;
    width: 48px;
    z-index: 1001;
    text-align: center;
    user-select: none;
    opacity: 1;
    display: block;
    top: 232px;
    left: 1545px;
    right: auto;
  }

  .nav-bg {
    position: absolute;
    top: -15px;
    left: -130px;
    height: 102%;
    padding-bottom: 20px;
    width: 200px;
    opacity: 1;
    z-index: 5;
    width: 200px;
    background: #fff;
    background: rgba(255,255,255,0.8);
    transition: .3s;
    border-radius: 4px;
  }

  .nav-tip {
    background: url(http://static.hdslb.com/images/v3images/tab2233.png) 0 0 no-repeat;
    position: absolute;
    left: -117px;
    top: 0px;
    width: 117px;
    height: 333px;
    z-index: 10010;
    transition: .3s;
    opacity: 1;
  }

  .nav-list {
    position: relative;
    z-index: 233;
    background-color: #f6f9fa;
    border: 1px solid #e5e9ef;
    overflow: hidden;
    border-radius: 4px;
    overflow: hidden;
  }

  .nav-item {
    position: relative;
    z-index: 233;
    height: 32px;
    line-height: 32px;
    transition: .2s linear;
    transition-property: background-color,color;
    cursor: pointer;

    &.activity {
      color: white;
    }

    &:hover {
      color: white;
      background-color: #00a1d6;
    }
  }

  .choose {
    position: absolute;
    width: 100%;
    top: -32px;
    left: 0;
    background-color: #00a1d6;
    z-index: -1;
    transition: transform .2s linear;
  }

  .rank {
    padding: 8px 0;
    border: 1px solid #e5e9ef;
    background-color: #f6f9fa;
    border-radius: 4px;

    p {
      line-height: 16px;
    }

    i {
      display: block;
      margin: 0 auto 4px;
      background: url(http://static.hdslb.com/images/base/icons.png) -663px -151px no-repeat;
      height: 18px;
      width: 18px;
    }

    &:hover i {
      background-position: -727px -151px;
    }
  }

  .gotop {
    position: relative;
    z-index: 233;
    .s-line {
      border-left: 2px solid #ddd;
      border-right: 2px solid #ddd;
      height: 12px;
      width: 30px;
      margin: 0 auto;
    }

    .btn_gotop {
      height: 48px;
      background: #f6f9fa url(http://static.hdslb.com/images/base/icons.png) -648px -72px no-repeat;
      border: 1px solid #e5e9ef;
      overflow: hidden;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: #00a1d6;
        background-position: -714px -72px;
      }
    }
  }

  .draping .nav-list {
    .nav-item {
      cursor: move;
    }

    .nav-item.activity {
      color: #222;
      background-color: #f6f9fa;

      &:hover {
        color: white;
        background-color: #00a1d6;
      }
    }

    .choose {
      display: none;
      background-color: white;
    }
  }

  .fade-enter-active, .fade-leave-active {
	   transition: opacity .3s
   }

   .fade-enter, .fade-leave-active {
    .nav-tip {
  		top: 50px;
  		opacity: 0;
  	}
  	.nav-bg {
  		top: 150px;
  		left: -70px;
  		height: 100px;
  		width: 100px;
  		opacity: 0;
     }
  }
</style>
