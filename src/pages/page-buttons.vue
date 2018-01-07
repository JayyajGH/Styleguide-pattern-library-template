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
      <div slot="exampleSlot" class="sg-flex--main-axis-spacearound sg-flex--cross-axis-center sg-flex-button u-flex sg-margin-bottom--none">
        <span v-for="bsize in buttonSize" class="sg-margin-bottom--medium">
          <button type="button" class="button button--simple button--primary" :class=bsize.style>{{bsize.content}}</button>
        </span>
      </div>
      <div slot="codeSlot">
        <code-snippet>
          <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(buttonSize, 'button button--simple button--primary')" class="sg-margin-bottom--none"></div>
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
      <div slot="exampleSlot" class="sg-flex--main-axis-spacearound sg-flex--cross-axis-center sg-flex-button u-flex sg-margin-bottom--none">
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
      <div slot="exampleSlot" class="sg-flex--main-axis-spacearound sg-flex--cross-axis-center sg-flex-button u-flex sg-margin-bottom--none">
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
      <div slot="exampleSlot" class="sg-flex--main-axis-spacearound sg-flex--cross-axis-center u-flex sg-margin-bottom--none">
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
  import StyleWrapper from '@/components/style-wrapper/style-wrapper';
  import Heading from '@/components/heading';
  import CodeSnippet from '@/components/codesnippet';
  import returnFormattedCodeString from '@/components/mixins/codestring';
  import ElementExample from '@/components/classes/elementexample';

  export default {
    components: { StyleWrapper, Heading, CodeSnippet },
    mixins: [returnFormattedCodeString],
    computed: {
      buttonGroupingCodeSnippet: function () {
        const buttons = this.returnFormattedCodeString(this.buttonGroup, 'button button--simple button--primary button--medium', '&nbsp;&nbsp;');

        return `&lt;div class="button--group"&gt;\n${buttons}\n&lt;/div&gt;`;
      }
    },
    data: function () {
      return {
        buttonSize: [
          new ElementExample('Small button', 'button--small', 'button'),
          new ElementExample('Medium button', 'button--medium', 'button'),
          new ElementExample('Large button', 'button--large', 'button')
        ],
        buttonImportance: [
          new ElementExample('Primary button', 'button--primary', 'button'),
          new ElementExample('Secondary button', 'button--secondary', 'button'),
          new ElementExample('Tertiary button', 'button--tertiary', 'button')
        ],
        buttonWidth: [
          new ElementExample('Half-width button', 'button--halfwidth', 'button'),
          new ElementExample('Full-width button', 'button--fullwidth', 'button')
        ],
        buttonStyle: [
          new ElementExample('Simple button', 'button--simple button--primary', 'button'),
          new ElementExample('Ghost button', 'button--ghost button-ghost--primary', 'button')
        ],
        buttonGroup: [
          new ElementExample('Button 1', '', 'button'),
          new ElementExample('Button 2', '', 'button')
        ]
      };
    }
  };
</script>

<style scoped lang="scss">
  @import 'static/sass/abstracts/_abstracts.scss';

  .sg-flex-button {
    flex-direction: column;

    @include respond-to('medium and above') {
      flex-direction: row;
    }
  }
</style>
