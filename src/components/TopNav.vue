<template lang="html">
  <nav class="top-nav">
    <div class="bg">
      <div class="bg-ma"></div>
      <div class="bg-model"></div>
    </div>
    <div class="nav-content">
      <ul class="nav">
        <li>
          <router-link :to="{path: '/'}" title="主站">主站</router-link>
        </li>
        <li>
          <router-link :to="{path: '/'}" title="画友">画友</router-link>
        </li>
        <li v-on:mouseover="showIn($event)" v-on:mouseout="showOut($event)">
          <router-link :to="{path: '/'}" title="游戏中心" id="gameCenter">游戏中心</router-link>
          <div class="show-content" v-on:mouseover="selfIn($event)" v-on:mouseout="selfOut($event)">游戏中心</div>
        </li>
        <li v-on:mouseover="showIn($event)" v-on:mouseout="showOut($event)">
          <router-link :to="{path: '/'}" title="直播" id="online">直播</router-link>
          <div class="show-content" v-on:mouseover="selfIn($event)" v-on:mouseout="selfOut($event)">直播</div>
        </li>
        <li>
          <router-link :to="{path: '/'}" title="周边">周边</router-link>
        </li>
        <li>
          <router-link :to="{path: '/'}" title="BML">BML</router-link>
        </li>
      </ul>
      <div class="user-box">
        <ul>
          <li>
            <router-link :to="{path: '/'}" title="登录">登录</router-link>
          </li>
          <i class="s-line"></i>
          <li>
            <router-link :to="{path: '/'}" title="注册">注册</router-link>
          </li>
          <li class="none">
            <router-link :to="{path: '/'}" title="投稿" class="i-link">投 稿</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      set: 0
    }
  },
  methods: {
    showIn (event) {
      if (event.target.nodeName === 'A') {
        clearTimeout(this.set)
        var id = event.target.getAttribute('id')
        document.querySelectorAll('.show-content').forEach(function (val) {
          val.style.display = 'none'
        })
        document.querySelector('#' + id + '+.show-content').style.display = 'block'
      }
    },
    showOut (event) {
      if (event.target.nodeName === 'A') {
        var id = event.target.getAttribute('id')
        this.set = setTimeout(() => {
          document.querySelector('#' + id + '+.show-content').style.display = 'none'
        }, 500)
      }
    },
    selfIn (event) {
      clearTimeout(this.set)
      event.target.style.display = 'block'
    },
    selfOut (event) {
      this.set = setTimeout(() => {
        event.target.style.display = 'none'
      }, 500)
    }
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
  .top-nav {
    color: #222;
    position: relative;
    z-index: 10000;

    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 42px;
      overflow: hidden;
      background-color: rgba(255,255,255,0.4);
      box-shadow: rgba(0,0,0,0.1) 0 1px 2px;

      .bg-ma {
        position: absolute;
        height: 62px;
        padding: 0 20px;
        top: -10px;
        left: -20px;
        width: 100%;
        -webkit-filter: blur(5px);
        -ms-filter: blur(5px);
        filter: blur(5px);
        filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=5,MakeShadow=false);
        z-index: 50;
        background: url('../assets/bg.png') no-repeat center 0;
        background-position: center 0!important;
        background-repeat: no-repeat;
      }

      .bg-model {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 42px;
        background-color: rgba(255,255,255,0.4);
        box-shadow: rgba(0,0,0,0.1) 0 1px 2px;
        z-index: 99;
      }
    }

    .nav-content {
      width: 1160px;
      height: 42px;
      margin: 0 auto;
      position: relative;
      text-align: left;
      z-index: 10000;
      font-size: 13px;

      .nav {
        float: left;
        height: 42px;

        li{
          position: relative;
          float: left;
          line-height: 42px;
          transition: all 0.3s ease;

          .show-content {
            display: none;
            position: absolute !important;
            top: 42px;
            width: 466px;
            height: 256px;
            border-radius: 0 0 4px 4px;
            box-shadow: 1px 1px 3px rgba(0, 0, 0, .4);
            position: relative;
            background: #fff;
            text-align: left;
            transition: all 0.3s ease;
          }

          &:first-child {
            padding: 0;
            background-image: url('../assets/icons.png');
            background-repeat: no-repeat;
            background-position: -910px -74px;
            width: 70px;
            margin-left: -10px;

            a {
              width: 40px;
              padding-left: 32px;
            }
          }

          a {
            display: inline-block;
            padding: 0 15px;
            height: 100%;
          }
        }
      }

      .user-box {
        float: right;
        height: 42px;

        ul {
          padding-left: 10px;
          float: left;
          height: 42px;

          li {
            float: left;
            line-height: 42px;
            padding: 0 10px;
            transition: all 0.3s ease;

            &:last-child {
              padding-right: 0px;
            }

            a {
              display: inline-block;
              width: 100%;
              height: 100%;
            }

            a.i-link {
              margin: 0;
              padding: 0;
              text-align: center;
              width: 58px;
              position: relative;
              z-index: 10;
              background: url('../assets/b-post.png') center center no-repeat;
              height: 48px;
              border-radius: 0 0 5px 5px;
              color: #fff!important;
              font-size: 14px;
            }

            a.i-link:hover {
              opacity: 0.9;
            }
          }

          .s-line {
            float: left;
            display: inline-block;
            border-left: 1px solid #222;
            height: 12px;
            margin-top: 16px;
            vertical-align: top;
          }
        }
      }
      li:hover {
        background-color: rgba(255,255,255,0.2);
      }

      li.none:hover {
        background: none;
      }
    }
  }

  @media screen and (max-width: 1400px) {
    .top-nav {
      .nav-content {
        width: 980px;
      }
    }
  }
</style>
