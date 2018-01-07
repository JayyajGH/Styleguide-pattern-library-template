<template>
  <div id="buttons" class="spa-page">
    <heading title="Buttons"></heading>

    <p>These styles will work on the button element, an input element with a type of button and an anchor styled as a button</p>

    <style-wrapper :header=buttonSize.title>
      <div slot="descriptionSlot">
        <p>Use these classes to define the button size.  The button sizes should be used as follows:</p>
        <ul class="list">
          <li>A small button is used...</li>
          <li>A medium button is used...</li>
          <li>A large button is used...</li>
        </ul>
      </div>
      <div slot="exampleSlot" class="sg-flex--main-axis-spacearound sg-flex--cross-axis-center sg-flex-button u-flex sg-margin-bottom--none">
        <span v-for="bsize in buttonSize.elements" class="sg-margin-bottom--medium">
          <button type="button" :class="[bsize.style, buttonSize.commonClasses]">{{bsize.content}}</button>
        </span>
      </div>
      <div slot="codeSlot">
        <code-snippet>
          <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(buttonSize.elements, buttonSize.commonClasses)" class="sg-margin-bottom--none"></div>
        </code-snippet>
      </div>
    </style-wrapper>

    <style-wrapper :header=buttonImportance.title>
      <div slot="descriptionSlot">
        <p>Use these classes to define a buttons importance. The button importance should be used as follows:</p>
        <ul class="list">
          <li>A primary button is used...</li>
          <li>A secondary button is used...</li>
          <li>A tertiary button is used...</li>
        </ul>
      </div>
      <div slot="exampleSlot" class="sg-flex--main-axis-spacearound sg-flex--cross-axis-center sg-flex-button u-flex sg-margin-bottom--none">
        <span v-for="bimportant in buttonImportance.elements" class="sg-margin-bottom--medium">
          <button type="button" :class="[bimportant.style, buttonImportance.commonClasses]">{{bimportant.content}}</button>
        </span>
      </div>
      <div slot="codeSlot">
        <code-snippet>
          <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(buttonImportance.elements, buttonImportance.commonClasses)" class="sg-margin-bottom--none"></div>
        </code-snippet>
      </div>
    </style-wrapper>

    <style-wrapper :header=buttonWidth.title>
      <div slot="descriptionSlot">
        <p>Use these classes to define the width of a button</p>
      </div>
      <div slot="exampleSlot" class="sg-margin-bottom--none">
        <div v-for="bwidth in buttonWidth.elements" class="sg-margin-bottom--medium">
          <button type="button" :class="[bwidth.style, buttonWidth.commonClasses]">{{bwidth.content}}</button>
        </div>
      </div>
      <div slot="codeSlot">
        <code-snippet>
          <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(buttonWidth.elements, buttonWidth.commonClasses)" class="sg-margin-bottom--none"></div>
        </code-snippet>
      </div>
    </style-wrapper>

    <style-wrapper :header=buttonStyle.title>
      <div slot="descriptionSlot">
        <p>Use these classes to define the style of the button. All other options can be applied to each style.</p>
        <ul class="list">
          <li>A simple button is used...</li>
          <li>A ghost button is used...</li>
        </ul>
      </div>
      <div slot="exampleSlot" class="sg-flex--main-axis-spacearound sg-flex--cross-axis-center sg-flex-button u-flex sg-margin-bottom--none">
        <span v-for="bstyle in buttonStyle.elements" class="sg-margin-bottom--medium">
          <button type="button" :class="[bstyle.style, buttonStyle.commonClasses]">{{bstyle.content}}</button>
        </span>
      </div>
      <div slot="codeSlot">
        <code-snippet>
          <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(buttonStyle.elements, buttonStyle.commonClasses)" class="sg-margin-bottom--none"></div>
        </code-snippet>
      </div>
    </style-wrapper>

    <style-wrapper :header=buttonGroup.title :description=buttonGroup.description>
      <div slot="exampleSlot" class="sg-flex--main-axis-spacearound sg-flex--cross-axis-center u-flex sg-margin-bottom--none">
        <span class="sg-margin-bottom--medium">
          <button type="button" :class=buttonGroup.commonClasses>Button</button>
        </span>
        <span class="sg-margin-bottom--medium">
          <button type="button" :class=buttonGroup.commonClasses>Button</button>
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
        const buttons = this.returnFormattedCodeString(this.buttonGroup.elements, 'button button--simple button--primary button--medium', '&nbsp;&nbsp;');

        return `&lt;div class="button--group"&gt;\n${buttons}\n&lt;/div&gt;`;
      }
    },
    data: function () {
      return {
        buttonSize: {
          title: 'Button sizes',
          commonClasses: 'button button--simple button--primary',
          elements: [
            new ElementExample('Small button', 'button--small', 'button'),
            new ElementExample('Medium button', 'button--medium', 'button'),
            new ElementExample('Large button', 'button--large', 'button')
          ]
        },
        buttonImportance: {
          title: 'Button importance',
          commonClasses: 'button button--simple button--medium',
          elements: [
            new ElementExample('Primary button', 'button--primary', 'button'),
            new ElementExample('Secondary button', 'button--secondary', 'button'),
            new ElementExample('Tertiary button', 'button--tertiary', 'button')
          ]
        },
        buttonWidth: {
          title: 'Button width',
          commonClasses: 'button button--simple button--primary button--medium',
          elements: [
            new ElementExample('Half-width button', 'button--halfwidth', 'button'),
            new ElementExample('Full-width button', 'button--fullwidth', 'button')
          ]
        },
        buttonStyle: {
          title: 'Button style',
          commonClasses: 'button button--medium',
          elements: [
            new ElementExample('Simple button', 'button--simple button--primary', 'button'),
            new ElementExample('Ghost button', 'button--ghost button-ghost--primary', 'button')
          ]
        },
        buttonGroup: {
          title: 'Button grouping',
          description: 'Set a grouping container for buttons.  This will add the correct padding etc.',
          commonClasses: 'button button--simple button--primary button--medium',
          elements: [
            new ElementExample('Button 1', '', 'button'),
            new ElementExample('Button 2', '', 'button')
          ]
        }
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
