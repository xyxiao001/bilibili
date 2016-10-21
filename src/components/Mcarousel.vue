<template>
  <div class="t-carousel">
    <ul>
      <li>
        <a href="#">123</a>
      </li>
      <li>
        <a href="#">456</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
  .t-carousel {
    position: relative;
    width: 440px;
    height: 220px;
    overflow: hidden;

    ul {
      width: 500%;
      height: 100%;

      li {
        width: 440px;
        height: 220px;
        float: left;
        overflow: hidden;
      }
    }
  }
</style>
