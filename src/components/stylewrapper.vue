<template>
  <div>
    <h2 class="header2">{{header}}</h2>
    <p>{{description}}</p>
    <div class="sg-sectionborder sg-bottompadding--large">
      <slot name="exampleSlot"></slot>
    </div>
    <slot name="codeSlot"></slot>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      required: true
    },
    description: String
  }
}
</script>

<style scoped lang="scss">
</style>
