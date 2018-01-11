<template>
  <pre v-highlightjs class="sg-sectionborder sg-code__section sg-margin-bottom--none">
<code class="html"><slot name="codeSnippetSlot"></slot></code></pre>
</template>

<script>
export default {
  name: 'CodeSnippet'
};
</script>

<style scoped lang="scss">
  .sg-code__section {
    font-family: consolas, menlo, monaco, monospace;
    font-size: 13px;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
</style>
