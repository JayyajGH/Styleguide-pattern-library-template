<template>
  <div id="buttons" class="spa-page">
    <heading title="Buttons"></heading>

    <p>These styles will work on the button element, an input element with a type of button and an anchor styled as a button</p>

    <style-wrapper header="Button sizes">
      <div slot="descriptionSlot">
        <p>Use these classes to define the button size.  The button sizes should be used as follows:</p>
        <ul class="list">
          <li>A small button is used...</li>
          <li>A medium button is used...</li>
          <li>A large button is used...</li>
        </ul>
      </div>
      <div slot="exampleSlot" class="sg-flex u-flex sg-margin-bottom--none">
        <span v-for="bsize in buttonSize" class="sg-margin-bottom--medium">
          <button type="button" class="button button--simple button--primary" :class=bsize.style>{{bsize.content}}</button>
        </span>
      </div>
      <div slot="codeSlot">
        <code-snippet>
          <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(buttonSize, 'border--solid border-color--black')" class="sg-margin-bottom--none"></div>
        </code-snippet>
      </div>
    </style-wrapper>

    <style-wrapper header="Button importance">
      <div slot="descriptionSlot">
        <p>Use these classes to define a buttons importance. The button importance should be used as follows:</p>
        <ul class="list">
          <li>A primary button is used...</li>
          <li>A secondary button is used...</li>
          <li>A tertiary button is used...</li>
        </ul>
      </div>
      <div slot="exampleSlot" class="sg-flex u-flex sg-margin-bottom--none">
        <span v-for="bimportant in buttonImportance" class="sg-margin-bottom--medium">
          <button type="button" class="button button--simple button--medium" :class=bimportant.style>{{bimportant.content}}</button>
        </span>
      </div>
      <div slot="codeSlot">
        <code-snippet>
          <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(buttonImportance, 'button button--simple button--medium')" class="sg-margin-bottom--none"></div>
        </code-snippet>
      </div>
    </style-wrapper>

    <style-wrapper header="Button width">
      <div slot="descriptionSlot">
        <p>Use these classes to define the width of a button</p>
      </div>
      <div slot="exampleSlot" class="sg-margin-bottom--none">
        <div v-for="bwidth in buttonWidth" class="sg-margin-bottom--medium">
          <button type="button" class="button button--simple button--primary button--medium" :class=bwidth.style>{{bwidth.content}}</button>
        </div>
      </div>
      <div slot="codeSlot">
        <code-snippet>
          <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(buttonWidth, 'button button--simple button--primary button--medium')" class="sg-margin-bottom--none"></div>
        </code-snippet>
      </div>
    </style-wrapper>

    <style-wrapper header="Button styles">
      <div slot="descriptionSlot">
        <p>Use these classes to define the style of the button. All other options can be applied to each style.</p>
        <ul class="list">
          <li>A simple button is used...</li>
          <li>A ghost button is used...</li>
        </ul>
      </div>
      <div slot="exampleSlot" class="sg-flex u-flex sg-margin-bottom--none">
        <span v-for="bstyle in buttonStyle" class="sg-margin-bottom--medium">
          <button type="button" class="button button--medium" :class=bstyle.style>{{bstyle.content}}</button>
        </span>
      </div>
      <div slot="codeSlot">
        <code-snippet>
          <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(buttonStyle, 'button button--medium')" class="sg-margin-bottom--none"></div>
        </code-snippet>
      </div>
    </style-wrapper>

    <style-wrapper header="Button grouping" description="Set a grouping container for buttons.  This will add the correct padding etc.">
      <div slot="exampleSlot" class="sg-flex u-flex sg-margin-bottom--none">
        <span class="sg-margin-bottom--medium">
          <button type="button" class="button button--simple button--primary button--medium">Button</button>
        </span>
        <span class="sg-margin-bottom--medium">
          <button type="button" class="button button--simple button--primary button--medium">Button</button>
        </span>
      </div>
      <div slot="codeSlot">
        <code-snippet>
          <div slot="codeSnippetSlot" v-html="buttonGroupingCodeSnippet" class="sg-margin-bottom--none"></div>
        </code-snippet>
      </div>
    </style-wrapper>

  </div>
</template>

<script>
  import StyleWrapper from '@/components/stylewrapper';
  import Heading from '@/components/heading';
  import CodeSnippet from '@/components/codesnippet';
  import returnFormattedCodeString from '@/components/mixins/codestring';
  import PreCodeSnippet from '@/components/classes/precodesnippet';

  export default {
    components: { StyleWrapper, Heading, CodeSnippet },
    mixins: [returnFormattedCodeString],
    computed: {
      buttonGroupingCodeSnippet: function () {
        return `&lt;div class="button--group"&gt;\n  ${this.buttonExampleCodeSnippet}\n  ${this.buttonExampleCodeSnippet}\n&lt;/div&gt;`;
      }
    },
    data: function () {
      return {
        buttonSize: [
          new PreCodeSnippet('Small button', 'button--small', 'button'),
          new PreCodeSnippet('Medium button', 'button--medium', 'button'),
          new PreCodeSnippet('Large button', 'button--large', 'button')
        ],
        buttonImportance: [
          new PreCodeSnippet('Primary button', 'button--primary', 'button'),
          new PreCodeSnippet('Secondary button', 'button--secondary', 'button'),
          new PreCodeSnippet('Tertiary button', 'button--tertiary', 'button')
        ],
        buttonWidth: [
          new PreCodeSnippet('Half-width button', 'button--halfwidth', 'button'),
          new PreCodeSnippet('Full-width button', 'button--fullwidth', 'button')
        ],
        buttonStyle: [
          new PreCodeSnippet('Simple button', 'button--simple button--primary', 'button'),
          new PreCodeSnippet('Ghost button', 'button--ghost button-ghost--primary', 'button')
        ],
        buttonExampleCodeSnippet: '&lt;button type="button" class="button button--simple button--primary button--medium"&gt;Button&lt;/button&gt;'
      };
    }
  };
</script>

<style lang="scss">
</style>

<style scoped lang="scss">
  @import 'static/sass/abstracts/_abstracts.scss';

  .sg-flex-button {
    flex-direction: column;

    @include respond-to('medium and above') {
      flex-direction: row;
    }
  }
</style>
