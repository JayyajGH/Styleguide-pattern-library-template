<template>
  <div id="lists" class="spa-page">
    <stroked-heading title="Lists"></stroked-heading>

    <style-wrapper header="List styles" description="Define a list style with list--disc or list--circle">
      <div slot="exampleSlot" class="sg-flex--main-axis-spacearound u-flex sg-margin-bottom--none">
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

        <ol class="list list-ordered--decimal sg-margin-bottom--none">
          <li>Item 1</li>
          <li>Item 2</li>
        </ol>

      </div>

      <code-snippet slot="codeSlot">
        <div slot="codeSnippetSlot" v-html="listCodeSnippet" class="sg-margin-bottom--none"></div>
      </code-snippet>

    </style-wrapper>
  </div>
</template>

<script>
  import StyleWrapper from '@/components/style-wrapper/style-wrapper';
  import StrokedHeading from '@/components/stroked-heading/stroked-heading';
  import CodeSnippet from '@/components/code-snippet/code-snippet';
  import returnFormattedCodeString from '@/components/mixins/codestring';
  import ElementExample from '@/components/classes/elementexample';

  export default {
    name: 'PageLists',
    components: { StyleWrapper, StrokedHeading, CodeSnippet },
    mixins: [returnFormattedCodeString],
    computed: {
      listCodeSnippet () {
        const items = this.returnFormattedCodeString(this.listItems, '', '&nbsp;&nbsp;');

        return `${this.list.listDisc}\n${items}\n${this.list.listUnorderedEndList}\n
${this.list.listCircle}\n${items}}\n${this.list.listUnorderedEndList}\n
${this.list.listNone}\n${items}}\n${this.list.listUnorderedEndList}\n
${this.list.listOrderedDecimal}\n${items}}\n${this.list.listOrderedEndList}`;
      }
    },
    data: function () {
      return {
        list: {
          listDisc: '&lt;ul class="list list--disc"&gt;',
          listCircle: '&lt;ul class="list list--circle"&gt;',
          listNone: '&lt;ul class="list list--none"&gt;',
          listUnorderedEndList: '&lt;/ul&gt;',
          listOrderedEndList: '&lt;/ol&gt;',
          listOrderedDecimal: '&lt;ol class="list list-ordered--decimal"&gt;'
        },
        listItems: [
          new ElementExample('Item 1', '', 'li'),
          new ElementExample('Item 2', '', 'li')
        ]
      };
    }
  };
</script>

<style lang="scss">
</style>

<style scoped lang="scss">
</style>
