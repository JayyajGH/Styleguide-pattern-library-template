<template>
  <div id="layout" class="spa-page">
    <stroked-heading title="Layout"></stroked-heading>

    <p>Uniform spacing.  How to add padding/margins etc.</p>

    <p>Most elements will already have the correct spacing added to them.</p>

    <p>Talk about using css grid for layout.  And mention support. Should there be some default boilerplate classes for layout? </p>

    <p>
      Maybe some ideas from: https://marvelapp.com/styleguide/design/layout
    </p>

    <div class="sg-sectionborder sg-padding--large sg-margin-bottom--none">
      <div class="sg-flex--main-axis-spacearound u-flex">
        <div class="sg-layout sg-paddingleft--medium sg-paddingright--medium sg-margin-bottom--none u-full-width">
          <div class="border--solid border-width--thin border-color--black sg-layout__item">
          </div>
        </div>
      </div>
      <div class="sg-flex--main-axis-spacearound u-flex">
        <div class="sg-layout sg-paddingleft--medium sg-paddingright--medium sg-margin-bottom--none u-full-width">
          <div class="border--solid border-width--thin border-color--black sg-layout__item">
          </div>
        </div>
        <div class="sg-layout sg-paddingleft--medium sg-paddingright--medium sg-margin-bottom--none u-full-width">
          <div class="border--solid border-width--thin border-color--black sg-layout__item">
          </div>
        </div>
      </div>
      <div class="sg-flex--main-axis-spacearound u-flex">
        <div class="sg-layout sg-paddingleft--medium sg-paddingright--medium sg-margin-bottom--none u-full-width">
          <div class="border--solid border-width--thin border-color--black sg-layout__item">
          </div>
        </div>
        <div class="sg-layout sg-paddingleft--medium sg-paddingright--medium sg-margin-bottom--none u-full-width">
          <div class="border--solid border-width--thin border-color--black sg-layout__item">
          </div>
        </div>
        <div class="sg-layout sg-paddingleft--medium sg-paddingright--medium sg-margin-bottom--none u-full-width">
          <div class="border--solid border-width--thin border-color--black sg-layout__item">
          </div>
        </div>
      </div>
      <div class="sg-flex--main-axis-spacearound u-flex">
        <div class="sg-layout sg-paddingleft--medium sg-paddingright--medium sg-margin-bottom--none u-full-width">
          <div class="border--solid border-width--thin border-color--black sg-layout__item">
          </div>
        </div>
        <div class="sg-layout sg-paddingleft--medium sg-paddingright--medium sg-margin-bottom--none u-full-width">
          <div class="border--solid border-width--thin border-color--black sg-layout__item">
          </div>
        </div>
        <div class="sg-layout sg-paddingleft--medium sg-paddingright--medium sg-margin-bottom--none u-full-width">
          <div class="border--solid border-width--thin border-color--black sg-layout__item">
          </div>
        </div>
        <div class="sg-layout sg-paddingleft--medium sg-paddingright--medium sg-margin-bottom--none u-full-width">
          <div class="border--solid border-width--thin border-color--black sg-layout__item">
          </div>
        </div>
      </div>
    </div>

    <div>
      <code-snippet slot="codeSlot">
        <div slot="codeSnippetSlot" v-html="layoutCodeSnippet" class="sg-margin-bottom--none"></div>
      </code-snippet>
    </div>

  </div>
</template>

<script>
  import StrokedHeading from '@/components/stroked-heading/stroked-heading';
  import CodeSnippet from '@/components/code-snippet/code-snippet';

  export default {
    name: 'PageLayout',
    components: { StrokedHeading, CodeSnippet },
    computed: {
      layoutCodeSnippet () {
        return `${this.layoutCodeSnippet}`;
      }
    },
    data: function () {
      return {
        layoutCodeSnippet: 'Add some code example here'
      };
    }
  };
</script>

<style lang="scss">
</style>

<style scoped lang="scss">
  @import 'static/sass/abstracts/_abstracts';

  .sg-layout__item {
    margin: 0;
    height: 40px;
    background-color: color('grey', 'x-light');
  }
</style>
