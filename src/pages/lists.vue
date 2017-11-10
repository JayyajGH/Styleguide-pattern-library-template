<template>
  <div id="lists" class="spa-page">
    <heading title="Lists"></heading>

    <style-wrapper header="List styles" description="Define a list style with list--disc or list--circle">
      <div slot="exampleSlot" class="sg-flex u-flex">
        <ul class="list list--disc">
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>

        <ul class="list list--circle">
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>

        <ul class="list list--none">
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>

      </div>
      <pre v-highlightjs slot="codeSlot" class="sg-sectionborder sg-code__section">
<code class="html">&lt;ul class="list list--disc"&gt;
  &lt;li&gt;Item 1&lt;/li&gt;
  &lt;li&gt;Item 2&lt;/li&gt;
&lt;/ul&gt;

&lt;ul class="list list--circle"&gt;
  &lt;li&gt;Item 1&lt;/li&gt;
  &lt;li&gt;Item 2&lt;/li&gt;
&lt;/ul&gt;

&lt;ul class="list list--none"&gt;
  &lt;li&gt;Item 1&lt;/li&gt;
  &lt;li&gt;Item 2&lt;/li&gt;
&lt;/ul&gt;</code></pre>
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
  @import 'static/sass/lists.scss';
</style>

<style scoped lang="scss">
</style>
