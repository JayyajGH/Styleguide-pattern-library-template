<template>
  <div id="utility" class="spa-page">
    <heading title="Utility Classes"></heading>

    <style-wrapper :header=inlineContentAlignment.title :description=inlineContentAlignment.description>
      <div slot="exampleSlot" v-for="item in inlineContentAlignment.elements">
        <utility-example :title=item.content :styling=item.style :element=item.element></utility-example>
      </div>
      <code-snippet slot="codeSlot">
        <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(inlineContentAlignment.elements, '')" class="sg-margin-bottom--none"></div>
      </code-snippet>
    </style-wrapper>

    <style-wrapper :header=blockContentAlignment.title :description=blockContentAlignment.description>
      <div slot="exampleSlot" v-for="item in blockContentAlignment.elements">
        <utility-example :title=item.content :styling="[item.style, blockContentAlignment.commonClasses]" :element=item.element></utility-example>
      </div>
      <code-snippet slot="codeSlot">
        <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(blockContentAlignment.elements, '')" class="sg-margin-bottom--none"></div>
      </code-snippet>
    </style-wrapper>

    <style-wrapper :header=floatBlock.title :description=floatBlock.description>
      <div slot="exampleSlot">
        <div class="sg-utility-block border--solid border-width--thin border-color--black u-float--left"></div>
        <div class="sg-utility-block border--solid border-width--thin border-color--black u-float--right"></div>
        <!-- Hack to stop parent collapsing -->
        <div style="clear: both;"></div>
      </div>
      <code-snippet slot="codeSlot">
        <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(floatBlock.elements, '')" class="sg-margin-bottom--none"></div>
      </code-snippet>
    </style-wrapper>

    <style-wrapper :header=display.title :description=display.description>
      <div slot="exampleSlot">
        <div>
          <span class="sg-utility-block border--solid border-width--thin border-color--black u-align--center u-block sg-padding--medium">Inline element displayed as block element</span>
          <span class="sg-utility-block border--solid border-width--thin border-color--black u-align--center u-block sg-padding--medium">Inline element displayed as block element</span>
        </div>
        <div>
          <p class="sg-utility-block border--solid border-width--thin border-color--black u-inline sg-padding--medium">Block element displayed as inline element</p>
          <p class="sg-utility-block border--solid border-width--thin border-color--black u-inline sg-padding--medium">Block element displayed as inline element</p>
        </div>
        <div>
          <span class="sg-utility-block border--solid border-width--thin border-color--black sg-utility-block--wide u-inline-block sg-padding--medium">Inline element displayed as inline-block element</span>
        </div>
        <div>
          <div class="sg-utility-block border--solid border-width--thin border-color--black sg-utility-block--wide u-flex sg-padding--medium">Element displayed as flex element</div>
        </div>
      </div>
      <code-snippet slot="codeSlot">
        <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(display.elements, '')" class="sg-margin-bottom--none"></div>
      </code-snippet>
    </style-wrapper>

    <style-wrapper :header=position.title :description=position.description>
      <div slot="exampleSlot">
        <div>
          <span class="u-relative sg-relative-block sg-utility-block border--solid border-width--thin border-color--black u-align--center sg-padding--medium">Relatively position element</span>
        </div>
        <div class="u-relative">
          <span class="u-absolute sg-absolute-block sg-utility-block border--solid border-width--thin border-color--black u-align--center sg-padding--medium">Absolutely positioned element</span>
        </div>
      </div>
      <code-snippet slot="codeSlot">
        <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(position.elements, '')" class="sg-margin-bottom--none"></div>
      </code-snippet>
    </style-wrapper>

    <style-wrapper :header=transformation.title :description=transformation.description>
      <div slot="exampleSlot" v-for="item in transformation.elements">
        <utility-example :title=item.content :styling=item.style :element=item.element></utility-example>
      </div>
      <code-snippet slot="codeSlot">
        <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(transformation.elements, '')" class="sg-margin-bottom--none"></div>
      </code-snippet>
    </style-wrapper>

    <style-wrapper :header=contentHiding.title :description=contentHiding.description>
      <div slot="exampleSlot">
        <p>Following this line is a hidden element</p>
        <div class="sg-utility-block u-hidden">This is a hidden element</div>
        <p>Following this line is a visually hidden element</p>
        <div class="sg-utility-block u-hidden-visually">This is a visually hidden element</div>
      </div>
      <code-snippet slot="codeSlot">
        <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(contentHiding.elements, '')" class="sg-margin-bottom--none"></div>
      </code-snippet>
    </style-wrapper>

  </div>
</template>

<script>
  import StyleWrapper from '@/components/style-wrapper/style-wrapper';
  import Heading from '@/components/heading';
  import CodeSnippet from '@/components/code-snippet/code-snippet';
  import returnFormattedCodeString from '@/components/mixins/codestring';
  import ElementExample from '@/components/classes/elementexample';
  import UtilityExample from '@/components/utility-example/utility-example';

  export default {
    name: 'PageUtility',
    components: { StyleWrapper, Heading, CodeSnippet, UtilityExample },
    mixins: [returnFormattedCodeString],
    data: function () {
      return {
        inlineContentAlignment: {
          title: 'Inline content alignment',
          description: 'The following classes are used to align inline content',
          elements: [
            new ElementExample('Left aligned text', 'u-align--left', 'p'),
            new ElementExample('Center aligned text', 'u-align--center', 'p'),
            new ElementExample('Right aligned text', 'u-align--right', 'p')
          ]
        },
        blockContentAlignment: {
          title: 'Block element alignment',
          description: 'The following class is used to align block elements',
          commonClasses: 'sg-utility-block border--solid border-width--thin border-color--black',
          elements: [
            new ElementExample('', 'u-block--center', 'div')
          ]
        },
        floatBlock: {
          title: 'Float elements',
          description: 'The following classes are used to float block elements.',
          elements: [
            new ElementExample('...', 'u-float--left', 'div'),
            new ElementExample('...', 'u-float--right', 'div')
          ]
        },
        display: {
          title: 'Display settings',
          description: 'The following classes are used to change the display property.',
          elements: [
            new ElementExample('...', 'u-block', 'div'),
            new ElementExample('...', 'u-inline', 'div'),
            new ElementExample('...', 'u-inline-block', 'div'),
            new ElementExample('...', 'u-flex', 'div')
          ]
        },
        position: {
          title: 'Position settings',
          description: 'The following classes are used to change the position property.',
          elements: [
            new ElementExample('...', 'u-relative', 'div'),
            new ElementExample('...', 'u-absolute', 'div')
          ]
        },
        transformation: {
          title: 'Text transforms',
          description: 'The following classes are used to transform text.',
          elements: [
            new ElementExample('Lowercase text', 'u-text-lowercase', 'p'),
            new ElementExample('Uppercase text', 'u-text-uppercase', 'p'),
            new ElementExample('Capitalized text', 'u-text-capitalize', 'p')
          ]
        },
        contentHiding: {
          title: 'Hiding content',
          description: 'The following classes are used to hide content.  A visually hidden element is useful for screen-readers where an element is required for accessibility reasons but not desirable to be displayed on the screen.',
          elements: [
            new ElementExample('...', 'u-hidden', 'div'),
            new ElementExample('...', 'u-hidden-visually', 'div')
          ]
        }
      };
    }
  };
</script>

<style scoped lang="scss">
  @import 'static/sass/abstracts/_abstracts.scss';

  .sg-utility-block {
    width: 100px;
    height: 100px;
    background-color: color('grey','x-light');
    line-height: 1rem;
  }

  .sg-utility-block--wide {
    width: 300px;
  }

  .sg-relative-block {
    left: 50px;
  }

  .sg-absolute-block {
    left: 250px;

    @include respond-to('large and above') {
      left: 300px;
    }
  }
</style>
