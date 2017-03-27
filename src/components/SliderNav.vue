<template lang="html">
  <div class="index-nav" :style="{'top': top + 'px'}">
    <div class="nav-list">
      <div class="nav-item" v-for="item in lists">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      top: 232
    }
  },
  props: ['lists'],
  mounted () {
    window.onscroll = () => {
      if (window.scrollY > 200) {
        this.top = 0
      } else {
        this.top = 232
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
    left: 1541.5px;
    right: auto;
  }

  .nav-list {
    position: relative;
    z-index: 233;
    background-color: #f6f9fa;
    border: 1px solid #e5e9ef;
    overflow: hidden;
    border-radius: 4px;
  }

  .nav-item {
    height: 32px;
    line-height: 32px;
    transition: .1s linear;
    transition-property: background-color,color;
    cursor: pointer;

    &:hover {
      color: white;
      background-color: #00a1d6;
    }
  }
</style>
