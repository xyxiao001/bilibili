<template>
  <div class="l-carousel">
    <ul>
      <li v-for="list in lists[now]">
        <div class="v-item">
          <a  :href="list.url" target="_blank" :title="list.title">
            <div class="medal"></div>
            <div class="original"></div>
            <div class="preview">
              <img :src="list.img"  :alt="list.title">
            </div>
            <div class="mask"></div>
            <div class="play-icon"></div>
            <div class="info">
              <div class="t">{{ list.title }}</div>
              <p class="up">{{ list.up }}</p>
              <p class="play">{{ list.play }}</p>
            </div>
          </a>
        </div>
      </li>
    </ul>
    <div class="prev" @click="now = now > 0 ? now -= 1 : now = 2">{{ this.pre = this.now === 0 ? '昨日' : this.now === 1 ? '三日' : '一周'}}</div>
    <div class="next" @click="now = now < 2 ? now += 1 : now = 0">{{ this.next = this.now === 0 ? '一周' : this.now === 1 ? '昨日' : '三日'}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 昨日2 一周1 三日0
      now: 0,
      pre: '',
      next: '',
      lists: [
        [
          {
            url: 'http://www.bilibili.com/video/av6809843',
            title: '【魔道祖师】《在下名叫蓝忘机》by花千诚',
            img: 'http://i2.hdslb.com/bfs/archive/3ebf7f39aeec3b188ad4962ed49983fd21d1bedb.jpg@320w_200h.webp',
            up: 'up主：横夏',
            play: '播放：124354'
          },
          {
            url: 'http://www.bilibili.com/video/av6812091',
            title: '【凡大王】第3期 万圣节装扮，你准备好了吗？朋克小恶魔/哥特萝莉/蒸朋女巫',
            img: 'http://i2.hdslb.com/bfs/archive/7404bc4b8e23b94d9fc5add53fb6cd03328140f1.jpg@320w_200h.webp',
            up: 'up主：梵凡凡大王',
            play: '播放：175820'
          },
          {
            url: 'http://www.bilibili.com/video/av6822693',
            title: '【诸葛魔琴】新空城计',
            img: 'http://i0.hdslb.com/bfs/archive/5ff58d39f259e06c63d2b8ee5e1985f3dcc9fb88.jpg@320w_200h.webp',
            up: 'up主：OELoop',
            play: '播放：195900'
          },
          {
            url: 'http://www.bilibili.com/video/av6822527',
            title: '看完这个视频我就又玩游戏去了',
            img: 'http://i1.hdslb.com/bfs/archive/3748dc5548eb91699f44857248fb2099a97e74d0.jpg@320w_200h.webp',
            up: 'up主：史丹利Studio',
            play: '播放：412454'
          },
          {
            url: 'http://www.bilibili.com/video/av6818987/',
            title: '[中日歌词] 天际与心扉都会雨过天晴 - Aqours (二年级)',
            img: 'http://i1.hdslb.com/bfs/archive/294c9b6c3e562896e49daf684d7154b24b360f27.jpg@320w_200h.webp',
            up: 'up主：南條小鹿',
            play: '播放：25879'
          },
          {
            url: 'http://www.bilibili.com/video/av6822817/',
            title: '「偶像梦幻祭」组合歌曲CD 第2弾 vol.03 Knights',
            img: 'http://i1.hdslb.com/bfs/archive/de4f874a60cd43d5fa4a32eee9a4c4e9d1adbc9d.jpg@320w_200h.webp',
            up: 'up主：苍红☆将M抖到底',
            play: '播放：11576'
          },
          {
            url: 'http://www.bilibili.com/video/av6814878',
            title: '【欣欣】久保由利香summer chance翻跳( •̀∀•́ )',
            img: 'http://i2.hdslb.com/bfs/archive/d89ccd927dc188921f8471940090c1a78ded6191.jpg@320w_200h.webp"',
            up: 'up主：欣欣是个大兄控ww',
            play: '播放：44087'
          },
          {
            url: 'http://www.bilibili.com/video/av6812487',
            title: '【翻填】非洲人的NNRR一直下【阴阳师爆肝魂歌】NL不分/阿睿/狩觞',
            img: 'http://i1.hdslb.com/bfs/archive/9fc96a55c25e30dea7fc68b0d21e55824e1a54aa.jpg@320w_200h.webp',
            up: 'up主：喵草鞋veravi',
            play: '16392'
          }
        ],
        [
          {
            url: 'http://www.bilibili.com/video/av6749717',
            title: '【米优手书】My Pretty Teddy【百夜优一郎2016生诞祭】终结的炽天使',
            img: 'http://i0.hdslb.com/bfs/archive/c2d6547c6d2c78d7faafc7de2a9bef97c804a731.jpg@320w_200h.webp',
            up: 'up主：百夜米迦勒',
            play: '播放：48544'
          },
          {
            url: 'http://www.bilibili.com//video/av6750386',
            title: '[AMV]仅此一次的迷恋',
            img: 'http://i1.hdslb.com/bfs/archive/db961c2557f9f874b743408e135a126de0d0da09.jpg@320w_200h.webp',
            up: 'up主：Cola141',
            play: '播放：93416'
          },
          {
            url: 'http://www.bilibili.com/video/av6766853',
            title: '【多素材/节奏向/抽帧系/AMV】486燃烧的综漫梦',
            img: 'http://i2.hdslb.com/bfs/archive/58d05ed48aec27d5320509281a2db479f95c54ca.jpg@320w_200h.webp',
            up: 'up主：真德万万',
            play: '播放：84165'
          },
          {
            url: 'http://www.bilibili.com/video/av6764164',
            title: '【言和·洛天依·乐正绫】颓坠【原创曲·野良犬P】',
            img: 'http://i1.hdslb.com/bfs/archive/eb66d42aca24d2113ca3eb50c93571014ed1fdbb.jpg@320w_200h.webp',
            up: 'up主：skm',
            play: '播放：44118'
          },
          {
            url: 'http://www.bilibili.com/video/av6752867',
            title: '【Fate kaleid liner】卫宫士郎的回答',
            img: 'http://i2.hdslb.com/bfs/archive/c3ac9b3a796514f60dd5a50a27953ce70cef38ee.jpg@320w_200h.webp',
            up: 'up主：AA8',
            play: '播放：89143'
          },
          {
            url: 'http://www.bilibili.com/video/av6765172',
            title: '【狂风桑】极乐肾宝【极乐净土】',
            img: 'http://i1.hdslb.com/bfs/archive/499973782edbe17a67a70827218cb8b9a7568a27.jpg@320w_200h.webp',
            up: 'up主：狂风桑',
            play: '播放：290866'
          },
          {
            url: 'http://www.bilibili.com/video/av6753239',
            title: '【全明星RAP】一人我饮酒醉',
            img: 'http://i0.hdslb.com/bfs/archive/841225c0e27e0b17c71f351c559e064693cb5141.jpg@320w_200h.webp',
            up: 'up主：一咸菊菊',
            play: '播放：612607'
          },
          {
            url: 'http://www.bilibili.com/video/av6783826',
            title: '【时之歌Project】【原创曲】孤帆【小坠】',
            img: 'http://i2.hdslb.com/bfs/archive/10b24ef477eab8feb9f8cd53c84113a12d0513f0.jpg@320w_200h.webp',
            up: 'up主：时之歌Project',
            play: '103842'
          }
        ],
        [
          {
            url: 'http://www.bilibili.com/video/av6834776/',
            title: '【KBShinya】剑阁来客',
            img: 'http://i0.hdslb.com/bfs/archive/fc1d3d14545ae25754a7a5b79375d0088ab7a90c.jpg@320w_200h.webp',
            up: 'up主：KBShinya',
            play: '24997'
          },
          {
            url: 'http://www.bilibili.com/video/av6833022',
            title: '【洛洛烘焙坊】教你做进击的巨人主题蛋挞 @柚子木字幕组',
            img: 'http://i1.hdslb.com/bfs/archive/ad057138a969a9a1b1294e9a94a2adcbd51ada10.jpg@320w_200h.webp',
            up: 'up主：柚子木字幕组',
            play: '播放：14121'
          },
          {
            url: 'http://www.bilibili.com/video/av6836427/',
            title: '【电音金坷垃】Pneumatic Tokyo - Env——有些节奏就是让人欲罢不能！',
            img: 'http://i2.hdslb.com/bfs/archive/70d60eaee3231730489e90094d7a2567cf4f87d9.jpg@320w_200h.webp',
            up: 'up主：别惹精神病',
            play: '播放：5362'
          },
          {
            url: 'http://www.bilibili.com/video/av6840246/',
            title: '【刘醒  梁非凡】Beat it',
            img: 'http://i1.hdslb.com/bfs/archive/03dd3ed21624558b786fd1de4c418505d331126b.jpg@320w_200h.webp',
            up: 'up主：绿豆KC',
            play: '播放：9481'
          },
          {
            url: 'http://www.bilibili.com/video/av6835341/',
            title: '【初音ミクx鏡音リン】帰路奇譚【犬丸芝居小屋】',
            img: 'http://i2.hdslb.com/bfs/archive/a4e24d8d2377a530bbf18723e535c81fbbbac979.jpg@320w_200h.webp',
            up: 'up主：MENたいこ/一十',
            play: '播放：641'
          },
          {
            url: 'http://www.bilibili.com/video/av6837910/',
            title: '【作死物理小讲堂】无线充电器骗局揭秘 @FPS罗兹 灵魂字幕',
            img: 'http://i1.hdslb.com/bfs/archive/b402f440741df144e40079923244458bfb309280.jpg@320w_200h.webp',
            up: 'up主：罗兹',
            play: '播放：22831'
          },
          {
            url: 'http://www.bilibili.com/video/av6837630/',
            title: '【木鱼微剧场】几分钟看完《李献计历险记》',
            img: 'http://i1.hdslb.com/bfs/archive/ae881eec2b90da248810e3410a41029b531d1787.jpg@320w_200h.webp',
            up: 'up主：木鱼水心',
            play: '播放：31564'
          },
          {
            url: 'http://www.bilibili.com/video/av6835340/',
            title: '【MMD镜头配布】弱音唯美向婚纱-Soleil【2016MMD配布向】',
            img: 'http://i0.hdslb.com/bfs/archive/ebeadde8491bb09649a44d3d4120672399d46abe.jpg@320w_200h.webp',
            up: 'up主：哟不正',
            play: '1244'
          }
        ]
      ]
    }
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
            background: url(http://static.hdslb.com/images/base/icons.png) no-repeat;
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
            background: url(http://static.hdslb.com/images/v3images/icons2.png) 0 -547px no-repeat;
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
      background-image: url(http://static.hdslb.com/images/v3images/icons2.png);
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
      user-select: none;
    }

    .next {
      position: absolute;
      right: 0;
      border-radius: 0 2px 2px 0;
      background-position: 6px -1211px;
      padding: 13px 5px 13px 10px;
      background-color: rgba(0,0,0,0.6);
      background-image: url(http://static.hdslb.com/images/v3images/icons2.png);
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
      user-select: none;
    }

    &:hover .prev, &:hover .next {
      display: block;
    }
  }
</style>
