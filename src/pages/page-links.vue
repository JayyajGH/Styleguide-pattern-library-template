<template>
  <div id="links" class="spa-page">
    <heading title="Links"></heading>

    <style-wrapper header="Link styles" description="Define a link style with link--regular, link--subtle, link--dark or link--phone">
      <div slot="exampleSlot" class="sg-flex--main-axis-spacearound sg-flex--cross-axis-center u-flex sg-margin-bottom--none">
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

      <code-snippet slot="codeSlot">
        <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(link, '')" class="sg-margin-bottom--none"></div>
      </code-snippet>

    </style-wrapper>
  </div>
</template>

<script>
  import StyleWrapper from '@/components/stylewrapper';
  import Heading from '@/components/heading';
  import CodeSnippet from '@/components/codesnippet';
  import returnFormattedCodeString from '@/components/mixins/codestring';
  import ElementExample from '@/components/classes/elementexample';

  export default {
    components: { StyleWrapper, Heading, CodeSnippet },
    mixins: [returnFormattedCodeString],
    data: function () {
      return {
        link: [
          new ElementExample('Regular', 'link link--regular', 'a'),
          new ElementExample('Subtle', 'link link--subtle', 'a'),
          new ElementExample('Dark', 'link link--dark', 'a'),
          new ElementExample('No decoration', 'link link--regular u-text-decoration--none', 'a'),
          new ElementExample('0800 111111', 'link link--phone', 'a')
        ]
      };
    }
  };
</script>

<style lang="scss">
</style>

<style scoped lang="scss">
</style>
