<template lang="html">
  <nav class="top-nav" :class="lights">
    <div class="bg">
      <div class="bg-ma" :style="{'background-image': 'url('+ this.bg + ')'}"></div>
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
        <li>
          <router-link :to="{path: '/'}" title="游戏中心" id="gameCenter" class="show-tag">游戏中心</router-link>
          <div class="show-content">
            <div class="left">
              <div class="banner">
                <a target="_blank" href="http://vipgift.biligame.com/">
                  <img src="http://i0.hdslb.com/bfs/game/32bbcb85fb7c344f30f46a5b30f9219243ec9740.jpg" alt="大会员礼包">
                  <span>大会员礼包</span>
                </a>
              </div>
              <div class="brief clearfix">
                <a target="_blank" title="命运-冠位指定（Fate/GO）" href="http://acg.tv/u1Hz">
                  <img src="http://i0.hdslb.com/bfs/game/f7d4ee0877089e4079b8f0b4f5c95dd4ceba512a.png" alt="命运-冠位指定（Fate/GO）">
                  <span>命运-冠位指定（Fate/GO）</span>
                </a>
                <a target="_blank" title="如果的世界" href="http://rgdsj.biligame.com/">
                  <img src="http://i0.hdslb.com/bfs/game/b8132ed0de34f1cd53bab5e2a40c9f48c01542fb.png" alt="如果的世界">
                  <span>如果的世界</span>
                </a>
                <a target="_blank" title="阴阳师" href="http://yys.biligame.com/">
                    <img src="http://i0.hdslb.com/bfs/game/3b205675d44bbd90e6ea46d4baec9674bda6e642.png" alt="阴阳师">
                    <span>阴阳师</span>
                </a>
              </div>
            </div>
            <div class="right">
              <a class="bbs" target="_blank" href="http://bbs.biligame.com">游戏论坛</a>
              <div class="all">
                <a
                  target="_blank"
                  v-for="rank in ranks"
                  :href="rank.url"
                  v-on:mouseover="show(rank.img)"
                  v-on:mouseout="leave">
                <span>{{ rank.text }}</span>
              </a>
              </div>
            </div>
            <div class="imgdiv" style="background-repeat: no-repeat;"></div>
          </div>
        </li>
        <li>
          <router-link :to="{path: '/'}" title="直播" id="online" class="show-tag">直播</router-link>
          <div class="show-content live-box">
            <div class="live-lf">
              <p class="title">热门直播:</p>
              <div class="lf-list">
                <a href="http://live.bilibili.com/1169523" target="_blank" class="lf-item"><img src="http://i0.hdslb.com/bfs/face/0a3635d76b2dcb6379dc84d27b03dbc892123c93.jpg"><i>LIVE</i><p>番茄君也是水果</p></a>
                <a href="http://live.bilibili.com/291263" target="_blank" class="lf-item"><img src="http://i0.hdslb.com/bfs/face/fa6f9fabb7bdf08f413fe6d0a99ad74bbadfab4e.jpg"><i>LIVE</i><p>许仙大官人丶</p></a>
                <a href="http://live.bilibili.com/191313" target="_blank" class="lf-item"><img src="http://i0.hdslb.com/bfs/face/9c6cda4e0d0fcbe54817a4f0b455b15e1895b537.jpg"><i>LIVE</i><p>蠢棉</p></a>
                <a href="http://live.bilibili.com/18057" target="_blank" class="lf-item"><img src="http://i1.hdslb.com/bfs/face/6da3e04dcb01237af3b9b446d39121e67009b1f6.jpg"><i>LIVE</i><p>旋转的亚索</p></a>
                <a href="http://live.bilibili.com/24838" target="_blank" class="lf-item"><img src="http://i1.hdslb.com/bfs/face/7d6b5a8952d6b6162a3777634d1e432ebfbfc216.jpg"><i>LIVE</i><p>二五八万KT</p></a>
                <a href="http://live.bilibili.com/272849" target="_blank" class="lf-item"><img src="http://i2.hdslb.com/bfs/face/291b06d44fb15321a629239f945a4aa4ac45a792.jpg"><i>LIVE</i><p>猴叔w</p></a>
              </div>
            </div>
            <div class="live-lr">
              <p class="title title2">热门活动:</p>
              <div class="banner">
                <a href="http://live.bilibili.com/hd/aki2016" target="_blank" title="红叶祭二阶开放啦"><img src="http://i0.hdslb.com/bfs/live/46cb3071202cd942602692071d61f07143e5fd34.jpg"></a>
                <a href="http://live.bilibili.com/hd/momiji" target="_blank" title="红叶祭三阶-miss 椛总选举"><img src="http://i0.hdslb.com/bfs/live/71e0b3cb7cde56ddd0da73860016ad690c4e01b8.jpg"></a>
              </div>
            </div>
          </div>
        </li>
        <li>
          <router-link :to="{path: '/'}" title="周边">周边</router-link>
        </li>
        <li>
          <router-link :to="{path: '/'}" title="移动端" class="phone">
            <span>移动端</span>
            <div class="mobile-p-box"><div class="mobile-p-qrcode"></div></div>
          </router-link>
        </li>
      </ul>
      <div class="user-box">
        <ul>
          <li>
            <a href="https://passport.bilibili.com/login" target="_blank" title="登录">登录</a>
          </li>
          <i class="s-line"></i>
          <li>
            <a href="https://passport.bilibili.com/register/phone"  target="_blank" title="注册">注册</a>
          </li>
          <li class="none">
            <router-link :to="{path: '/'}" title="投稿" class="i-link">投 稿</router-link>
            <ul class="s-menu">
              <li>
                <a href="http://member.bilibili.com/v/video/submit.html" target="_blank">
                  <i class="b-icon b-icon-vp"></i>
                  <span>视频投稿</span>
                </a>
              </li>
              <li>
                <a href="http://member.bilibili.com/v/#!/article" target="_blank">
                  <i class="b-icon b-icon-vm"></i>
                  <span>投稿管理</span>
                </a>
              </li>
              <li>
                <a href="http://member.bilibili.com/v/video/submit.html" target="_blank">
                  <i class="b-icon b-icon-vc"></i>
                  <span>创作中心</span>
                </a>
              </li>
            </ul>
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
      set: 0,
      showImg: '',
      ranks: [
        {
          url: 'http://bh3.biligame.com/yuyue/',
          text: '崩坏3',
          img: 'http://i0.hdslb.com/bfs/game/cbab91ba8981913b894c74433eee5ebfdd80910b.png'
        },
        {
          url: 'http://ntdgm.biligame.com/yuyue.html',
          text: '那兔之大国梦',
          img: 'http://i0.hdslb.com/bfs/game/c0d223aa39c4a2ad9a9e201399fb2c6109eb3538.png'
        },
        {
          url: 'http://sdmht.biligame.com/yuyue.html',
          text: '神代梦华谭',
          img: 'http://i0.hdslb.com/bfs/game/6b138b68d4bcb75c486ffa7e592970298e659c29.png'
        },
        {
          url: 'http://tank.biligame.com/yuyue.html',
          text: '装甲联盟',
          img: 'http://i0.hdslb.com/bfs/game/82d16f654bfcc27f728bc8a8e9fb193310484eee.png'
        },
        {
          url: 'http://kfq.biligame.com/yuyue/',
          text: '少女咖啡枪',
          img: 'http://i0.hdslb.com/bfs/game/0f38471ed9f2260a6625fc3df1cf947994be1541.png'
        },
        {
          url: 'http://madoka.biligame.com/yuyue.html',
          text: '魔法少女小圆',
          img: 'http://i0.hdslb.com/bfs/game/c776546e88a6c2ddf6d5c3fc1bab388ea4154ddd.png'
        },
        {
          url: 'http://hywz.biligame.com/yuyue.html',
          text: '幻影纹章',
          img: 'http://i0.hdslb.com/bfs/game/59d24a99226e9d1d273708b1a78452c811bf0aa9.png'
        }
      ]
    }
  },
  props: {
    bg: {
      type: String,
      default: ''
    },
    light: {
      type: Number,
      default: 0
    }
  },
  computed: {
    lights () {
      var top = this.light === 0 ? 'white' : 'black'
      return top
    }
  },
  methods: {
    show (img) {
      document.querySelector('.imgdiv').style.background = 'url(' + img + ')'
    },
    leave () {
      document.querySelector('.imgdiv').style.background = ''
    },
    hasClass (all, name) {
      var arr = all.split(' ')
      var has = false
      arr.forEach(function (val) {
        if (val === name) {
          has = true
        }
      })
      return has
    }
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
        background: white no-repeat center 0;
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
          transition: color 0.3s ease;

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

            .left {
              width: 265px;
              margin: 12px 0 0 0;
              float: left;

              .banner {
                width: 240px;
                height: 128px;
                margin-left: 12px;

                a {
                  position: relative;
                  padding: 0;

                  img {
                    width: 240px;
                    height: 128px;
                    border-radius: 4px;
                  }

                  span {
                    width: 220px;
                    padding: 0 10px;
                    border-radius: 4px;
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    font-size: 12px;
                    line-height: 30px;
                    text-shadow: 1px 1px 1px #000;
                    color: #fff;
                    background: url(http://static.biligame.net/biligametop/img/shadow.png) repeat-x;
                  }
                }
              }

              .brief {
                margin-top: 6px;
                a {
                  position: relative;
                  width: 64px;
                  height: 104px;
                  padding: 6px 12px 0;
                  display: block;
                  float: left;
                  overflow: hidden;

                  &:hover {
                    background-color: #e5e9ef;
                  }

                  img {
                    width: 64px;
                    height: 64px;
                    border-radius: 12px;
                  }

                  span {
                    position: absolute;
                    top: 72px;
                    left: 17px;
                    width: 4em;
                    height: 14px;
                    margin: 8px auto;
                    display: block;
                    font-size: 14px;
                    line-height: 1;
                    text-align: center;
                    color: #222;
                    overflow: hidden;
                  }
                }
              }
            }

            .right {
              width: 201px;
              min-height: 234px;
              margin: 12px 0 0 0;
              float: left;
              background: url(http://static.biligame.net/biligametop/img/line.png) no-repeat;

              .bbs {
                margin-top: -4px;
                margin-right: 12px;
                display: inline-block;
                float: right;
                font-size: 12px;
                color: #00a1d6;
              }

              .all {
                padding: 35px 0 0 6px;
                background: url(http://static.biligame.net/biligametop/img/title.png) no-repeat;

                a {
                  width: 163px;
                  padding-left: 16px;
                  display: block;
                  font-size: 12px;
                  line-height: 28px;
                  color: #222;

                  &:hover {
                    background-color: #e5e9ef;
                  }
                }
              }
            }

            .imgdiv {
              width: 220px;
              height: 220px;
              display: block;
              position: absolute;
              bottom: 0;
              left: 442px;
            }
          }

          .live-box {
            position: relative;
            padding: 20px 0 0px 20px;
            width: 504px;
            background: #fff;
            border-radius: 0 0 4px 4px;
            box-shadow: 1px 1px 3px rgba(0, 0, 0, .4);
            font-family: "微软雅黑";

            .title {
              padding: 0;
              margin: 0;
              font-size: 14px;
              line-height: 15px;
              color: #ea759f;
            }

            .live-lf {
              float: left;
              width: 254px;

              .lf-list {
                margin: 6px 0 0;
                border-right: 1px solid #eaeaea;

                .lf-item {
                  position: relative;
                  display: inline-block;
                  position: relative;
                  margin: 10px 17px 0 0;
                  width: 64px;
                  height: 100px;
                  padding: 0;

                  img {
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    overflow: hidden;
                  }

                  i {
                    display: none;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    overflow: hidden;
                    background: rgba(0,0,0,.5);
                    font-style: normal;
                    font-size: 15px;
                    color: #fff;
                    text-indent: 22px;
                    line-height: 64px;
                    font-weight: 700;
                    cursor: pointer;
                    animation: scale-in-ease cubic-bezier(.22, .58, .12, .98) .5s;
                  }

                  i:before {
                    position: absolute;
                    left: 8px;
                    top: 27px;
                    content: "";
                    width: 12px;
                    height: 12px;
                    background: #ff699e;
                    border-radius: 50%;
                    overflow: hidden;
                  }

                  @keyframes scale-in-ease {
                    0% {
                      opacity: 0;
                      -webkit-transform: scale(0);
                      transform: scale(0);
                    }
                    50% {
                      -webkit-transform: scale(1);
                      transform: scale(1);
                    }
                    100% {
                      opacity: 1;
                      -webkit-transform: scale(1);
                      transform: scale(1);
                    }
                  }

                  p {
                    position: absolute;
                    top: 60px;
                    padding: 0;
                    margin: 3px 0 0;
                    text-align: center;
                    color: #000;
                    width: 100%;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    font-size: 12px;
                  }

                  &:hover i {
                    display: block;
                  }
                }
              }
            }

            .live-lr {
              width: 250px;
              display: inline-block;

              .banner {
                margin-top: 16px;

                a {
                  display: block;
                  padding: 10px 21px;
                  width: 208px;
                  height: 80px;

                  &:hover {
                    background-color: #eaeaea;
                  }
                }
              }
            }
          }

          &:hover .show-content {
            display: block;
          }

          &:first-child {
            padding: 0;
            background-image: url('http://static.hdslb.com/images/base/icons.png');
            background-repeat: no-repeat;
            background-position: -910px -74px;
            width: 70px;
            margin-left: -10px;

            a {
              width: 40px;
              padding-left: 33px;
              padding-right: 0;
            }
          }

          a {
            display: inline-block;
            padding: 0 12px;
            height: 100%;
          }

          a.phone {
            .mobile-p-box {
              position: absolute;
              top: 44px;
              left: -20px;
              visibility: hidden;
              overflow: hidden;
              width: 259px;
              height: 174px;
              background: url(http://static.hdslb.com/images/base/app-box.png) center center no-repeat;
              opacity: 0;
              transition: .2s;
              transition-property: opacity;
              *display: none;
              z-index: 999;

              .mobile-p-qrcode {
                position: absolute;
                top: 30px;
                left: 80px;
                width: 100px;
                height: 100px;
                background: url(http://static.hdslb.com/images/base/app-qrcode.png) center center no-repeat;
              }
            }

            &:hover .mobile-p-box {
              visibility: visible;
              opacity: 1;
              *display: block;
            }
          }
        }
      }

      .user-box {
        float: right;
        height: 42px;
        font-size: 12px;

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
              background: url('http://static.hdslb.com/images/base/b-post.png') center center no-repeat;
              height: 48px;
              border-radius: 0 0 5px 5px;
              color: #fff!important;
              font-size: 12px;
            }

            a.i-link:hover {
              opacity: 0.9;
            }
          }

          .s-line {
            float: left;
            display: inline-block;
            border-left: 1px solid #fff;
            height: 12px;
            margin-top: 16px;
            vertical-align: top;
          }

          .s-menu {
            position: absolute;
            display: block;
            top: 42px;
            right: 0;
            z-index: 15;
            width: 216px;
            border: 0;
            transition: .2s;
            border-radius: 0 0 4px 4px;
            background-color: #fff;
            box-shadow: rgba(0,0,0,0.16) 0 2px 4px;
            overflow: hidden;
            height: 64px;
            padding-left: 0;
            opacity: 0;
            visibility: hidden;

            li {
              float: left;
              width: 72px;
              height: 64px;
              transition: .1s;
              padding: 0;

              a {
                display: block;
                color: #f25d8e;
                padding: 14px 12px 0 12px;
                line-height: 1;
                width: 52px;
                height: 50px;
                font-size: 12px;

                i {
                  display: block;
                  width: 20px;
                  height: 20px;
                  margin: 0 auto 8px;
                  background: url('http://static.hdslb.com/images/base/icons.png') no-repeat;
                }

                i.b-icon-vp {
                  background-position: -471px -919px;
                }

                i.b-icon-vm {
                  background-position: -471px -982px;
                }

                i.b-icon-vc {
                  background-position: -471px -1753px;
                }
              }

              &:hover {
                background-color: #e5e9ef;
              }
            }
          }
        }
      }

      li:hover {
        background-color: rgba(255,255,255,0.2);
      }

      li.none:hover {
        background: none;
      }

      li.none:hover .s-menu {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  .black {
    color: white;
    .bg .bg-model {
      background-color: rgba(0,0,0,0.4);
    }

    .nav-content .nav li:first-child {
      background-position: -845px -74px;
    }

    .nav-content .nav li a {
      color: white;
      font-size: 12px;
    }

    .nav-content .user-box ul li a {
     color: white;
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
