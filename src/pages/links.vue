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

      <div slot="codeSlot">
        <code-snippet slot="codeSlot">
          <div slot="codeSnippetSlot" v-html="linkCodeSnippet" class="sg-margin-bottom--none"></div>
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
    components: { StyleWrapper, Heading, CodeSnippet },
    computed: {
      linkCodeSnippet: function () {
        return `${this.link.linkRegular}\n${this.link.linkSubtle}\n${this.link.linkDark}\n${this.link.linkNoDecoration}\n${this.link.linkPhone}`;
      }
    },
    data: function () {
      return {
        link: {
          linkRegular: '&lt;a href="#" class="link link--regular"&gt;Regular&lt;/a&gt;',
          linkSubtle: '&lt;a href="#" class="link link--subtle"&gt;Subtle&lt;/a&gt;',
          linkDark: '&lt;a href="#" class="link link--dark"&gt;Dark&lt;/a&gt;',
          linkNoDecoration: '&lt;a href="#" class="link link--regular u-text-decoration--none"&gt;No decoration&lt;/a&gt;',
          linkPhone: '&lt;a href="tel: 0800 111111" class="link link--phone"&gt;0800 111111&lt;/a&gt;'
        }
      };
    }
  };
</script>

<style lang="scss">
</style>

<style scoped lang="scss">
</style>
