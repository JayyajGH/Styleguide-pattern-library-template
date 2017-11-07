<template>
  <span class="sg-border__item">
    <span class="sg-border__contents sg-paddingleft--medium sg-paddingright--medium u-inline-block"
          :class=styling>
      <p class="u-align--center">{{title}}</p>
    </span>
  </span>
</template>

<script>
export default {
  props: {
    title: String,
    styling: [String, Array]
  }
};
</script>

<style lang="scss">
  @import 'static/sass/borders.scss';
</style>

<style scoped lang="scss">
  @import 'static/sass/abstracts/_abstracts.scss';

  .sg-border__item {
    width: 100px;
    margin: 0 15px 15px 15px;
  }

  .sg-border__contents {
    height: 100px;
    width: 100%;
    background-color: color('grey','x-light');
  }
</style>
