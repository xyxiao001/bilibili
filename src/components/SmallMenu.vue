<template lang="html">
  <ul class="small-menu">
    <li v-for="item in items">
      <router-link :to="{path: item.url}">
        <span>{{ item.text }}<em></em></span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['items']
}
</script>

<style lang="scss">
  .header .h-menu .menu-wrapper ul.small-menu {
    position: absolute;
    top: 49px;
    left: 0;
    z-index: 100;
    display: none;
    overflow: hidden;
    height: auto;
    border: 1px solid #e5e9ef \9;
    border-top: 0;
    border-radius: 0 0 4px 4px;
    background: #fff;
    box-shadow: rgba(0,0,0,0.16) 0 2px 4px;
    *width: 150px;

    li {
      position: relative;
      overflow: hidden;
      height: auto;
      min-width: 120px;
      text-align: left;
      font-size: 12px;
      line-height: 20px;
      transition: .2s all;
      padding-right: 0px;

      &:hover {
        background-color: #e5e9ef;
      }

      a {
        position: relative;
        left: 0;
        display: block;
        overflow: hidden;
        font-size: 12px;
        padding: 5px 15px 5px 25px;
        background: url(http://static.hdslb.com/images/v3images/icons2.png) no-repeat 12px -1613px;
        color: #222;
        white-space: nowrap;
        transition: .2s all;
        height: 20px;
        width: auto;
        margin-right: 10px;

        span {
          position: absolute;
        	display: inline-block;
        	font-weight: normal;
          line-height: 20px;
          left: 25px;
        	*display: inline;
        	*zoom: 1;
        }

        em {
          position: absolute;
          top: 0;
          right: -100px;
          display: block;
          width: 15px;
          height: 18px;
          background: url(http://static.hdslb.com/images/v3images/icons2.png) no-repeat 0 -1581px;
          opacity: 0;
          transition: .2s all;
          filter: alpha(opacity=0);
        }
      }

      &:hover a {
        left: 5px;
        color: #222;
        text-shadow: none;
      }

      &:hover a span {
        color: #222;
      }

      &:hover a em {
        right: -21px;
      	opacity: 1;
      	filter: alpha(opacity=100);
      }
    }
  }
</style>
