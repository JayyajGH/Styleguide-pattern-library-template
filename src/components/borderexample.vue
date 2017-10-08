<template>
  <span class="sg-border">
    <div :class="[styling, 'sg-border__item']">
      <p class="sg-border-para">{{title}}</p>
    </div>
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
  @import 'static/sass/styleguide-borders.scss';
</style>
