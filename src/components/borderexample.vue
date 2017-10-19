<template>
  <span class="sg-border__item">
    <span :class="[styling, 'sg-border__contents u-inline-block']">
      <p class="u-align--center">{{title}}</p>
    </span>
  </span>
</template>

<script>
export default {
  props: {
    title: String,
    styling: String
  }
}
</script>

<style scoped lang="scss">
  @import 'static/sass/borders.scss';

  .sg-border__item {
    width: 100px;
  }

  .sg-border__contents {
    height: 100px;
    width: 100%;
    background-color: color('grey','x-light');
    padding-left: 10px;
    padding-right: 10px;
  }
</style>
