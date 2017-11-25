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

      <code-snippet slot="codeSlot">
        <div slot="codeSnippetSlot" v-html="listCodeSnippet" class="sg-margin-bottom--none"></div>
      </code-snippet>

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
      listCodeSnippet: function () {
        return `${this.list.listDisc}\n  ${this.list.listItemExample1}\n  ${this.list.listItemExample2}\n${this.list.listEndList}\n
${this.list.listCircle}\n  ${this.list.listItemExample1}\n  ${this.list.listItemExample2}\n${this.list.listEndList}\n
${this.list.listNone}\n  ${this.list.listItemExample1}\n  ${this.list.listItemExample2}\n${this.list.listEndList}`;
      }
    },
    data: function () {
      return {
        list: {
          listDisc: '&lt;ul class="list list--disc"&gt;',
          listCircle: '&lt;ul class="list list--circle"&gt;',
          listNone: '&lt;ul class="list list--none"&gt;',
          listItemExample1: '&lt;li&gt;Item 1&lt;/li&gt;',
          listItemExample2: '&lt;li&gt;Item 2&lt;/li&gt;',
          listEndList: '&lt;/ul&gt;'
        }
      };
    }
  };
</script>

<style lang="scss">
</style>

<style scoped lang="scss">
</style>
