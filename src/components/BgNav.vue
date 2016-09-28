<template lang="html">
  <div class="header">
    <div class="h-content">
      <div class="h-info">
        <router-link :to="{path: '/'}" class="logo"></router-link>
        <a class="banner-title">哔哩哔哩弹幕视频网 - ( ゜- ゜)つロ 乾杯~ - bilibili</a>
        <div class="search">
          <router-link :to="{path: '/'}" class="link-ranking">
            <span>排行榜</span>
          </router-link>
          <form>
            <input type="text" name="search" placeholder="大明宫景，多少宿命">
            <button type="button"></button>
          </form>
        </div>
      </div>
    </div>
    <div class="h-menu">
      <div class="menu-wrapper">
        <ul>
          <li>
            <router-link :to="{path: '/'}" class="dashboard">
              <span class="menu-text">首页</span>
            </router-link>
          </li>
          <li class="other-menu" v-for="menu in menus">
            <router-link :to="{path: menu.url}">
              <div class="menu-num">
                <span class="num">{{ menu.num }}</span>
              </div>
              <span class="menu-text">{{ menu.text }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        { url: '/', text: '动画', num: 100 },
        { url: '/', text: '番剧', num: 58 },
        { url: '/', text: '音乐', num: 364 },
        { url: '/', text: '舞蹈', num: 49 },
        { url: '/', text: '游戏', num: '999+' },
        { url: '/', text: '科技', num: 325 },
        { url: '/', text: '生活', num: 615 },
        { url: '/', text: '鬼畜', num: 29 },
        { url: '/', text: '时尚', num: 111 },
        { url: '/', text: '广告', num: 28 },
        { url: '/', text: '娱乐', num: 471 },
        { url: '/', text: '影视', num: 401 }
      ]
    }
  }
}
</script>

<style lang="scss">
  .header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 232px;
    background: url('../assets/bg.png') no-repeat center -10px;
    position: relative;
    margin: -42px auto 0;
    cursor: pointer;

    .h-content {

      .h-info {
        position: relative;
        margin: auto;
        width: 1160px;
        height: 170px;
      }

      .logo {
        position: absolute;
        width: 220px;
        height: 105px;
        left: 24px;
        top: 55px;
        background: transparent no-repeat left center;
        z-index: 100;
        background-image: url('../assets/logo.png');
      }

      .banner-title {
        position: absolute;
        top: 114px;
        left: 255px;
        line-height: 20px;
        padding: 6px 10px;
        background-color: #000;
        background-color: rgba(0,0,0,0.68);
        color: #fff;
        border-radius: 4px;
        font-size: 14px;
        max-width: 350px;
        visibility: hidden;
        opacity: 0;
        transition: .2s;
        cursor: pointer;
      }

      .search {
        position: absolute;
        top: 114px;
        right: 0;
        width: 268px;
        height: 32px;
        padding: 2px 2px 2px 72px;
        background-color: #e5e9ef;
        background-color: rgba(0,0,0,0.12);
        border-radius: 6px;

        .link-ranking {
          position: absolute;
          left: 2px;
          top: 2px;
          height: 32px;
          line-height: 32px;
          background-color: #fff;
          background-color: rgba(255,255,255,0.88);
          border-radius: 4px;
          width: 68px;
          transition: .2s background-color;

          span {
            font-size: 12px;
            padding-left: 26px;
            color: #f25d8e;
            display: inline-block;
            background: url('../assets/icons.png') -659px -655px no-repeat;
          }
        }

        form {
          background-color: #fff;
          background-color: rgba(255,255,255,0.88);
          display: block;
          height: 32px;
          border-radius: 4px;
          transition: .2s background-color;
        }

        input {
          float: left;
          width: 200px;
          color: #222;
          font-size: 12px;
          overflow: hidden;
          height: 32px;
          line-height: 32px;
          padding: 0 12px;
          border: 0;
          box-shadow: none;
          background-color: transparent;
          outline: inherit;
          font-size: 12px;
          font-family: "Microsoft YaHei",Arial,Helvetica,sans-serif;
        }

        button {
          display: block;
          position: absolute;
          right: 0;
          width: 48px;
          min-width: 0;
          cursor: pointer;
          height: 32px;
          background: url('../assets/icons.png') -653px -720px;
          margin: 0;
          padding: 0;
          border: 0;
          outline: inherit;
        }

        button:hover {
          background: url('../assets/icons.png') -718px -720px;
        }
      }

      &:hover .banner-title {
        animation: in .2s linear;
        opacity: 1;
        visibility: visible;
      }
    }

    @keyframes in {
      0% {
        opacity: 0;
        transform: scale(0.95);
      }
      30% {
        transform: scale(1);
      }

      70% {
        transform: scale(1.01);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }

    .h-menu {
      width: 100%;
      background: #fff;

      .menu-wrapper {
        margin: auto;
        width: 1160px;
        height: 62px;
        padding: 6px 0;

        ul {

          li {
            float: left;
            position: relative;
            font-size: 14px;
            display: block;
            height: 50px;
            padding-right: 20px;

            a {
              display: inline-block;
              width: 28px;
              height: 50px;

              span.menu-text {
                text-align: center;
                display: inline-block;
                padding-top: 23px;
              }

              &:hover span{
                color: #00a1d6;
              }
            }

            .dashboard {
              background: url('../assets/icons.png') -658px -1170px no-repeat;
            }
          }

          li.other-menu {
            width: 62px;
            padding-right: 0;

            a {
              width: 62px;
              text-align: center;
            }

            .menu-num {
              position: absolute;
              top: 8px;
              left: 0;
              height: 14px;
              width: 100%;
              text-align: center;

              span.num {
                position: static;
                display: inline-block;
                vertical-align: top;
                top: auto;
                left: auto;
                margin-left: 0;
                background-color: #ffafc9;
                color: #fff;
                border-radius: 4px;
                height: 12px;
                line-height: 12px;
                font-size: 11px;
                min-width: 18px;
                padding: 1px 4px 3px 3px;
                transform: scale(0.9);
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1400px) {
    .header .h-content {
      .h-info {
        width: 980px;
      }
    }

    .header .h-menu {
      .menu-wrapper {
        width: 980px;
      }
    }
  }
</style>
