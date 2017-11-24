<template>
  <div id="lists" class="spa-page">
    <heading title="Lists"></heading>

    <style-wrapper header="List styles" description="Define a list style with list--disc or list--circle">
      <div slot="exampleSlot" class="sg-flex u-flex sg-margin-bottom--none">
        <ul class="list list--disc sg-list__item sg-margin-bottom--none">
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>

        <ul class="list list--circle sg-margin-bottom--none">
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>

        <ul class="list list--none sg-margin-bottom--none">
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>

      </div>

      <div slot="codeSlot">
        <code-snippet slot="codeSlot">
          <div slot="codeSnippetSlot" class="sg-margin-bottom--none">&lt;ul class="list list--disc"&gt;
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
&lt;/ul&gt;</div>
        </code-snippet>
      </div>

    </style-wrapper>
  </div>
</template>

<script>
  import StyleWrapper from '@/components/stylewrapper';
  import Heading from '@/components/heading';
  import CodeSnippet from '@/components/codesnippet';

  export default {
    components: { StyleWrapper, Heading, CodeSnippet }
  };
</script>

<style lang="scss">
</style>

<style scoped lang="scss">
</style>
