<template lang="html">
  <div class="header" :style="{'background-image': 'url('+ this.bg + ')'}">
    <div class="h-content">
      <div class="h-info">
        <router-link :to="{path: '/'}" class="logo"
         :style="{
            'background-image': 'url(' + this.logo + ')'
          }"></router-link>
        <a class="banner-title" :href="url" target="_blank">{{ title }}</a>
        <div class="search">
          <a href="http://www.bilibili.com/ranking" target="_blank" class="link-ranking">
            <span>排行榜</span>
          </a>
          <form>
            <input type="text" name="search" autocomplete="off" placeholder="如何在MC中还原《三体》原著">
            <button type="button"></button>
          </form>
        </div>
      </div>
    </div>
    <div class="h-menu">
      <div class="menu-wrapper">
        <ul>
          <li class="index-menu">
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
            <smallMenu :items="menu.items"></smallMenu>
          </li>
          <li class="last-menu">
            <router-link :to="{path: '/'}" class="square">
              <span>广场</span>
            </router-link>
            <div class="second-menu">
              <ul>
                <li>
                  <a href="http://activity.bilibili.com" target="_blank">
                    <i class="i-activity"></i>
                    <b>活动中心</b>
                  </a>
                </li>
                <li>
                  <a href="http://game.bilibili.com" target="_blank">
                    <i class="i-game"></i>
                    <b>游戏中心</b>
                  </a>
                </li>
                <li>
                  <a href="http://h.bilibili.com" target="_blank">
                    <i class="i-h"></i>
                    <b>画友</b>
                  </a>
                </li>
                <li>
                  <a href="http://www.bilibili.com/mango" target="_blank">
                    <i class="i-m"></i>
                    <b>芒果TV</b>
                  </a>
                </li>
              </ul>
              <div class="s-right">
                <div class="item">
                  <a href="http://www.bilibili.com/event" target="_blank">
                    <img src="http://i0.hdslb.com/group1/M00/B7/C6/oYYBAFefJyWAdVAcAAD9KmVEAFw381.jpg">
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li class="last-menu">
            <router-link :to="{path: '/'}" class="live">
              <span>直播</span>
            </router-link>
            <smallMenu :items="onlines"></smallMenu>
          </li>
          <li class="last-menu">
            <a class="black-house" href="//www.bilibili.com/blackroom" target="_blank"><span>小黑屋</span></a>
          </li>
        </ul>
        <div class="right-menu">
          <img src="http://i0.hdslb.com/icon/575cd42b00dbd63236116cb56ae44641.gif" alt="动起来" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SmallMenu from '../components/SmallMenu'
export default {
  data () {
    return {
      menus: [
        {
          url: '/',
          text: '动画',
          num: 100,
          items: [
            { url: '/', text: 'MAD·AMV' },
            { url: '/', text: 'MMD·3D' },
            { url: '/', text: '短片·手书·配音' },
            { url: '/', text: '综合' }
          ]
        },
        {
          url: '/',
          text: '番剧',
          num: 58,
          items: [
            { url: '/', text: '连载动画' },
            { url: '/', text: '完结动画' },
            { url: '/', text: '国产动画' },
            { url: '/', text: '资讯' },
            { url: '/', text: '官方延伸' },
            { url: '/', text: '新番时间表' },
            { url: '/', text: '番剧索引' }
          ]
        },
        {
          url: '/',
          text: '国创',
          num: 58,
          items: [
            { url: '/', text: '国产动画' },
            { url: '/', text: '国产原创相关' },
            { url: '/', text: '布袋戏' },
            { url: '/', text: '资讯' },
            { url: '/', text: '新番时间表' },
            { url: '/', text: '国产动画索引' }
          ]
        },
        {
          url: '/',
          text: '音乐',
          num: 764,
          items: [
            { url: '/', text: '原创音乐' },
            { url: '/', text: '翻唱' },
            { url: '/', text: 'VOCALOID·UTAU' },
            { url: '/', text: '演奏' },
            { url: '/', text: '三次元音乐' },
            { url: '/', text: 'OP/ED/OST' },
            { url: '/', text: '音乐选集' }
          ]
        },
        {
          url: '/',
          text: '舞蹈',
          num: 110,
          items: [
            { url: '/', text: '宅舞' },
            { url: '/', text: '三次元舞蹈' },
            { url: '/', text: '舞蹈教程' }
          ]
        },
        {
          url: '/',
          text: '游戏',
          num: '999+',
          items: [
            { url: '/', text: '单机联机' },
            { url: '/', text: '网游·电竞' },
            { url: '/', text: '音游' },
            { url: '/', text: 'Mugen' },
            { url: '/', text: 'GMV' }
          ]
        },
        {
          url: '/',
          text: '科技',
          num: 659,
          items: [
            { url: '/', text: '纪录片' },
            { url: '/', text: '趣味科普人文' },
            { url: '/', text: '野生技术协会' },
            { url: '/', text: '演讲·公开课' },
            { url: '/', text: '星海' },
            { url: '/', text: '数码' },
            { url: '/', text: '机械' }
          ]
        },
        {
          url: '/',
          text: '生活',
          num: 885,
          items: [
            { url: '/', text: '搞笑' },
            { url: '/', text: '日常' },
            { url: '/', text: '美食圈' },
            { url: '/', text: '动物圈' },
            { url: '/', text: '手工' },
            { url: '/', text: '绘画' },
            { url: '/', text: '运动' }
          ]
        },
        {
          url: '/',
          text: '鬼畜',
          num: 93,
          items: [
            { url: '/', text: '鬼畜调教' },
            { url: '/', text: '音MAD' },
            { url: '/', text: '人力VOCALOID' },
            { url: '/', text: '教程演示' }
          ]
        },
        {
          url: '/',
          text: '时尚',
          num: 203,
          items: [
            { url: '/', text: '美妆' },
            { url: '/', text: '服饰' },
            { url: '/', text: '健身' },
            { url: '/', text: '资讯' }
          ]
        },
        {
          url: '/',
          text: '广告',
          num: 28,
          items: [
           { url: '/', text: '其实我没有' }
          ]
        },
        {
          url: '/',
          text: '娱乐',
          num: 773,
          items: [
           { url: '/', text: '综艺' },
           { url: '/', text: '明星' },
           { url: '/', text: '韩流相关' }
          ]
        },
        {
          url: '/',
          text: '影视',
          num: 993,
          items: [
           { url: '/', text: '电影' },
           { url: '/', text: '电视剧' }
          ]
        }
      ],
      onlines: [
        { url: '/', text: '萌宅推荐' },
        { url: '/', text: '手机直播' },
        { url: '/', text: '绘画专区' },
        { url: '/', text: '唱见舞见' },
        { url: '/', text: '御宅文化' },
        { url: '/', text: '生活娱乐' },
        { url: '/', text: '单机联机' },
        { url: '/', text: '网络游戏' },
        { url: '/', text: '电子竞技' },
        { url: '/', text: '手游直播' },
        { url: '/', text: '放映厅' }
      ]
    }
  },
  props: {
    logo: {
      type: String,
      default: ''
    },
    bg: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: 'bilibili'
    },
    url: {
      type: String,
      default: ''
    }
  },
  components: {
    SmallMenu
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
    background: white no-repeat center -10px;
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

          &:hover {
            background-color: white;
          }

          span {
            font-size: 12px;
            padding-left: 26px;
            color: #f25d8e;
            display: inline-block;
            background: url('http://static.hdslb.com/images/base/icons.png') -659px -655px no-repeat;
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
          background: url('http://static.hdslb.com/images/base/icons.png') -653px -720px;
          margin: 0;
          padding: 0;
          border: 0;
          outline: inherit;
        }

        button:hover {
          background: url('http://static.hdslb.com/images/base/icons.png') -718px -720px;
        }

        form:hover {
          background-color: white;
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
          float: left;

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

            &:hover ul.small-menu {
              display: block;
            }

            .dashboard {
              background: url('http://static.hdslb.com/images/base/icons.png') -658px -1170px no-repeat;
            }
          }

          li.index-menu {
            padding: 0 18px 0 0;
          }

          li.other-menu {
            width: 48px;
            padding-right: 0;
            margin-right: 12px;

            a {
              width: 48px;
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
                margin-top: -1px;
                background-color: #ffafc9;
                color: #fff;
                border-radius: 4px;
                height: 13px;
                line-height: 12px;
                font-size: 11px;
                min-width: 18px;
                padding: 1px 3px 2px 3px;
                transform: scale(0.9);
              }
            }
          }

          li.last-menu {
            float: left;
            position: relative;
            font-size: 14px;
            display: block;
            height: 50px;
            margin: 0 7px 0 10px;
            padding-right: 0px;

            a {
              width: 40px;
              padding-left: 22px;
              padding-right: 0;
              padding-top: 0;
              line-height: 50px;
              margin: 0!important;
              font-size: 16px;
            }

            a.square {
              background: url('http://static.hdslb.com/images/base/icons.png') -664px -904px no-repeat;
            }

            a.live {
              background: url('http://static.hdslb.com/images/base/icons.png') -664px -518px no-repeat;
            }

            a.black-house {
              width: 60px;
              background: url(http://static.hdslb.com/images/base/icons.png) -727px -519px no-repeat;
            }

            .second-menu {
              display: none;
              position: absolute;
              top: 49px;
              left: 0;
              padding-top: 20px;
              padding-bottom: 20px;
              white-space: nowrap;
              width: 387px;
              height: 188px;
              box-shadow: rgba(0,0,0,0.16) 0 2px 4px;
              border-radius: 0 0 4px 4px;
              background-color: white;
              z-index: 100;

              ul {
                width: 107px;
                margin-top: -6px;

                li {
                  position: relative;
                  font-size: 12px;
                  line-height: 20px;
                  width: 87px;
                  height: 24px;
                  overflow: hidden;
                  text-align: left;
                  transition: .2s all;
                  margin-top: 8px;

                  &:first-child {
                    margin-top: 0;
                  }

                  a {
                    white-space: nowrap;
                    transition: .2s all;
                    overflow: hidden;
                    position: relative;
                    line-height: 18px;
                    width: auto;
                    left: 0;
                    padding: 2px 10px 2px 18px;
                    color: #222;
                    height: 100%;

                    i {
                      display: inline-block;
                      width: 15px;
                      height: 12px;
                      margin-top: 4px;
                      vertical-align: top;
                      background: url('http://static.hdslb.com/images/base/icons.png') no-repeat;
                    }

                    i.i-activity {
                      background-position: -280px -1179px;
                    }

                    i.i-game {
                      background-position: -279px -1241px;
                    }

                    i.i-h {
                      background-position: -280px -1370px;
                    }

                    i.i-m {
                      background-position: -280px -1433px;
                    }

                    b {
                      font-size: 12px;
                      font-weight: normal;
                    }
                  }

                  &:hover {
                    background-color: #e5e9ef;
                    padding-left: 4px;
                  }
                }
              }

              .s-right {
                position: absolute;
                top: 20px;
                right: 0;
                display: block;
                width: 240px;
                height: 188px;
                padding: 0 20px 0 19px;
                border-left: 1px solid #e5e9ef;

                a {
                  display: inline-block;
                  padding-left: 0;
                  width: 100%;
                  height: 100%;

                  img {
                    width: 100%;
                    height: 100%;
                  }
                }
              }
            }

            &:hover .second-menu {
              display: block;
            }
          }
        }

        .right-menu {
          float: right;
          margin-right: -1px;
          height: 50px;
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

        ul {
          li {
            padding-right: 9px;
          }

          li.index-menu {
            padding: 0 9px 0 0;
          }

          li.other-menu {
            width: 47px;
            margin-right: 0;

            a {
              width: 47px;
              height: 48px;
            }
          }

          li.last-menu {
            position: relative;
            margin: 0 16px 0 10px;
            width: 48px;
            padding-left: 0;
            padding-right: 6px;
          }
        }
      }
    }
  }
</style>
