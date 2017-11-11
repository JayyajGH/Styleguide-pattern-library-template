<template>
  <div id="links" class="spa-page">
    <heading title="Links"></heading>

    <style-wrapper header="Link styles" description="Define a link style with link--regular, link--subtle, link--dark or link--phone">
      <div slot="exampleSlot" class="sg-flex u-flex sg-margin-bottom--none">
        <span>
          <a href="#" class="link link--regular sg-margin-bottom--none">Regular</a>
        </span>

        <span>
          <a href="#" class="link link--subtle sg-margin-bottom--none">Subtle</a>
        </span>

        <span>
          <a href="#" class="link link--dark sg-margin-bottom--none">Dark</a>
        </span>

        <span>
          <a href="#" class="link link--regular u-text-decoration--none sg-margin-bottom--none">No decoration</a>
        </span>

        <span>
          <a href="tel: 0800 111111" class="link link--phone">0800 111111</a>
        </span>
      </div>
      <pre v-highlightjs slot="codeSlot" class="sg-sectionborder sg-code__section sg-margin-bottom--none">
<code class="html">&lt;a href="#" class="link link--regular"&gt;Regular&lt;/a&gt;
&lt;a href="#" class="link link--subtle"&gt;Subtle&lt;/a&gt;
&lt;a href="#" class="link link--dark"&gt;Dark&lt;/a&gt;
&lt;a href="#" class="link link--regular u-text-decoration--none"&gt;No decoration&lt;/a&gt;
&lt;a href="tel: 0800 111111" class="link link--phone"&gt;0800 111111&lt;/a&gt;</code></pre>
    </style-wrapper>
  </div>
</template>

<script>
  import StyleWrapper from '@/components/stylewrapper';
  import Heading from '@/components/heading';

  export default {
    components: { StyleWrapper, Heading }
  };
</script>

<style lang="scss">
</style>

<style scoped lang="scss">
</style>
