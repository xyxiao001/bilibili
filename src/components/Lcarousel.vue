<template>
  <div class="l-carousel">
    <ul>
      <li>
        <div class="v-item">
          <a href="http://www.bilibili.com//video/av6832901/" target="_blank" title="【德语视频】教你制作一分钟快手奶酪意面 @柚子木字幕组">
            <div class="medal"></div>
            <div class="original"></div>
            <div class="preview">
              <img src="http://i2.hdslb.com/bfs/archive/0d768bbae2d85d485fbfd67222a3b242c66a89c8.jpg@320w_200h.webp"  alt="【德语视频】教你制作一分钟快手奶酪意面 @柚子木字幕组">
            </div>
            <div class="mask"></div>
            <div class="play-icon"></div>
            <div class="info">
              <div class="t">【德语视频】教你制作一分钟快手奶酪意面 @柚子木字幕组</div>
              <p class="up">up主：柚子木字幕组</p>
              <p class="play">播放：11437</p>
            </div>
          </a>
        </div>
      </li>
    </ul>
    <div class="prev" @click="now = now > 0 ? now -= 1 : now = 2">{{ this.pre = this.now === 0 ? '昨日' : this.now === 1 ? '三日' : '一周'}}</div>
    <div class="next" @click="now = now < 2 ? now += 1 : now = 0">{{ this.next = this.now === 0 ? '下周' : this.now === 1 ? '昨日' : '三日'}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 昨日2 一周1 三日0
      now: 1,
      pre: '',
      next: ''
    }
  },
  methods: {
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
  .l-carousel {
    position: relative;
    height: 240px;
    overflow: hidden;
    margin-left: 20px;

    ul {
      margin-right: -20px;

      li {
        float: left;
        width: 180px;
        margin-bottom: 20px;

        .v-item {
          width: 160px;
          height: 100px;
          position: relative;

          .medal {
            position: absolute;
            left: 0;
            top: 0;
            display: none;
            width: 40px;
            height: 24px;
            background: url(../assets/icons.png) no-repeat;
            background-position: -849px -212px;
            z-index: 5;
            pointer-events: none;
          }

          .preview {
            height: 100px;
            background: 0;
            overflow: hidden;
            border-radius: 4px;

            img {
              height: 100%;
              opacity: 1;
              margin: 0 auto;
              display: block;
            }
          }

          .mask {
            position: absolute;
            width: 100%;
            height: 100%;
            opacity: 0;
            visibility: hidden;
            top: 0;
            left: 0;
            background: #000;
            background: rgba(0,0,0,0.7);
            filter: alpha(opacity=70) \9;
            z-index: 1;
            transition: .3s all linear;
            border-radius: 4px;
          }

          .play-icon {
            background: url(../assets/icons2.png) 0 -547px no-repeat;
            width: 40px;
            height: 40px;
            position: absolute;
            right: 1px;
            bottom: 2px;
            opacity: .5;
            filter: alpha(opacity=50);
            z-index: 2;
            display: none;
          }

          .info {
            padding: 10px 0 3px;
            height: 18px;
            overflow: hidden;
            position: absolute;
            width: 100%;
            bottom: 0;
            left: 0;
            z-index: 1;
            background: #000;
            background: url(/images/base/gradient.png) 0 0 repeat-x;
            background: -webkit-linear-gradient(transparent,rgba(0,0,0,0.1) 20%,rgba(0,0,0,0.2) 35%,rgba(0,0,0,0.6) 65%,rgba(0,0,0,0.9));
            background: -o-linear-gradient(transparent,rgba(0,0,0,0.1) 20%,rgba(0,0,0,0.2) 35%,rgba(0,0,0,0.6) 65%,rgba(0,0,0,0.9));
            background: -moz-linear-gradient(transparent,rgba(0,0,0,0.1) 20%,rgba(0,0,0,0.2) 35%,rgba(0,0,0,0.6) 65%,rgba(0,0,0,0.9));
            background: linear-gradient(transparent,rgba(0,0,0,0.1) 20%,rgba(0,0,0,0.2) 35%,rgba(0,0,0,0.6) 65%,rgba(0,0,0,0.9));
            border-radius: 0 0 4px 4px;

            p {
              color: #99a2aa;
              margin: 5px 5px 0;
              opacity: 0;
              transition: .2s all linear;
            }

            .t {
              height: 18px;
              line-height: 18px;
              overflow: hidden;
              color: #fff;
              margin: 0 5px;
              word-break: break-all;
              word-wrap: break-word;
            }

            .up {
              margin-top: 10px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            }
          }

          &:hover .mask {
            visibility: visible;
            opacity: 1;
            transition: none;
          }

          &:hover .play-icon {
            display: none;
          }

          &:hover  .info{
            padding: 0;
            height: 100%;
            background: 0;
          }

          &:hover .info p {
            opacity: 1;
            transition: .3s all linear;
          }

          &:hover .t {
            margin-top: 10px;
            height: 36px;
          }
        }
      }
    }

    .prev {
      position: absolute;
      left: 0;
      border-radius: 0 2px 2px 0;
      background-position: 6px -1211px;
      padding: 13px 5px 13px 10px;
      background-color: rgba(0,0,0,0.6);
      background-image: url(../assets/icons2.png);
      background-repeat: no-repeat;
      width: 20px;
      top: 50%;
      margin-top: -30px;
      cursor: pointer;
      font-size: 12px;
      color: #fff;
      z-index: 99;
      text-align: center;
      display: none;
    }

    .next {
      position: absolute;
      right: 0;
      border-radius: 0 2px 2px 0;
      background-position: 6px -1211px;
      padding: 13px 5px 13px 10px;
      background-color: rgba(0,0,0,0.6);
      background-image: url(../assets/icons2.png);
      background-repeat: no-repeat;
      width: 20px;
      top: 50%;
      margin-top: -30px;
      cursor: pointer;
      font-size: 12px;
      color: #fff;
      z-index: 99;
      text-align: center;
      display: none;
    }

    &:hover .prev, &:hover .next {
      display: block;
    }
  }
</style>
