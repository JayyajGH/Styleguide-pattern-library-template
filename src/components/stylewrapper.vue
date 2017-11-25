<template>
  <section>
    <header>
      <h2 class="header2">{{header}}</h2>
    </header>
    <!-- A simple description can be provided via the description property or a more complex description can be provided using the description slot -->
    <slot name="descriptionSlot"></slot>
    <p>{{description}}</p>
    <div class="sg-sectionborder sg-padding--large sg-margin-bottom--none">
      <slot name="exampleSlot"></slot>
    </div>
    <slot name="codeSlot"></slot>
  </section>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    }
  }
};
</script>

<style scoped lang="scss">
</style>
