<template lang="html">
  <div class="index-nav" :style="{'top': navTop + 'px', 'left': left + 'px'}">
    <div class="nav-list">
      <div class="nav-item" v-for="(item, $index) in lists" :class="{'activity': $index === nowItem}" @click="navClick(item.top, $index)">
        {{ item.name }}
      </div>
      <div class="nav-item choose" :style="{'transform': 'translate3d(0, '+ (nowItem + 1) * 32 + 'px, 0)'}"></div>
    </div>
    <div class="nav-item rank" title="排序"><i class="n-icon-sort"></i><p>排序</p></div>
    <div class="gotop"><div class="s-line"></div><div class="btn_gotop" title="返回顶部"></div></div>
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
              if (this.nowTop > item.top - this.offsetTop && this.nowTop < item.top + item.height) {
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
      console.log(top)
    }
  },
  mounted () {
    // 获取滚动条高度
    this.updateNav()
    if (window.scrollY > 200) {
      this.navTop = 0
    } else {
      this.navTop = 232
    }
    window.onscroll = () => {
      this.updateNav()
      if (window.scrollY > 200) {
        this.navTop = 0
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
    z-index: 90;
    text-align: center;
    user-select: none;
    opacity: 1;
    display: block;
    top: 232px;
    left: 1545px;
    right: auto;
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
</style>
