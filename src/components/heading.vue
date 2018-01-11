<template>
  <header class="u-relative">
    <h1 class="header1 u-relative highzindex">{{title}}</h1>

    <div class="brush-stroke u-absolute u-full-width"
      :class="{'brush-stroke--large': isMainHeading, 'brush-stroke--small': !isMainHeading }"></div>
  </header>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    title: String,
    isMainHeading: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
  .brush-stroke {
    background-image: url("/static/images/blue-brush-stroke.png");
    z-index: 1;
    left: -30px;
  }

  .brush-stroke--small {
      height: 10px;
      background-size: 100% 10px;
      top: 35px;
  }

  .brush-stroke--large {
    height: 75px;
    background-size: 100% 75px;
    top: 10px;
  }

  .highzindex {
    z-index: 2;
  }
</style>
