<template>
  <div id="utility" class="spa-page">
    <heading title="Utility Classes"></heading>

    <style-wrapper header="Inline content alignment" description="The following classes are used to align inline content">
      <div slot="exampleSlot">
        <p class="u-align--left">Left aligned text</p>
        <p class="u-align--center">Center aligned text</p>
        <p class="u-align--right">Right aligned text</p>
      </div>
      <code-snippet slot="codeSlot">
        <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(inlineContentAlignment, '')" class="sg-margin-bottom--none"></div>
      </code-snippet>
    </style-wrapper>

    <style-wrapper header="Block element alignment" description="The following class is used to align block elements">
      <div slot="exampleSlot">
        <div class="sg-utility-block border--solid border-width--thin border-color--black u-block--center"></div>
      </div>
      <code-snippet slot="codeSlot">
        <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(blockContentAlignment, '')" class="sg-margin-bottom--none"></div>
      </code-snippet>
    </style-wrapper>

    <style-wrapper header="Float elements" description="The following classes are used to float block elements.">
      <div slot="exampleSlot">
        <div class="sg-utility-block border--solid border-width--thin border-color--black u-float--left"></div>
        <div class="sg-utility-block border--solid border-width--thin border-color--black u-float--right"></div>
        <!-- Hack to stop parent collapsing -->
        <div style="clear: both;"></div>
      </div>
      <code-snippet slot="codeSlot">
        <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(floatBlock, '')" class="sg-margin-bottom--none"></div>
      </code-snippet>
    </style-wrapper>

    <style-wrapper header="Display settings" description="The following classes are used to change the display property.">
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
        <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(display, '')" class="sg-margin-bottom--none"></div>
      </code-snippet>
    </style-wrapper>

    <style-wrapper header="Position settings" description="The following classes are used to change the position property.">
      <div slot="exampleSlot">
        <div>
          <span class="u-relative sg-relative-block sg-utility-block border--solid border-width--thin border-color--black u-align--center sg-padding--medium">Relatively position element</span>
        </div>
        <div class="u-relative">
          <span class="u-absolute sg-absolute-block sg-utility-block border--solid border-width--thin border-color--black u-align--center sg-padding--medium">Absolutely positioned element</span>
        </div>
      </div>
      <code-snippet slot="codeSlot">
        <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(position, '')" class="sg-margin-bottom--none"></div>
      </code-snippet>
    </style-wrapper>

    <style-wrapper header="Text transforms" description="The following classes are used to transform text.">
      <div slot="exampleSlot">
        <p class="u-text-lowercase">Lowercase text</p>
        <p class="u-text-uppercase">Uppercase text</p>
        <p class="u-text-capitalize">Capitalized text</p>
      </div>
      <code-snippet slot="codeSlot">
        <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(transformation, '')" class="sg-margin-bottom--none"></div>
      </code-snippet>
    </style-wrapper>

    <style-wrapper header="Hiding content" description="The following classes are used to hide content.  A visually hidden element is useful for screen-readers where an element is required for accessibility reasons but not desirable to be displayed on the screen.">
      <div slot="exampleSlot">
        <p>Following this line is a hidden element</p>
        <div class="sg-utility-block u-hidden">This is a hidden element</div>
        <p>Following this line is a visually hidden element</p>
        <div class="sg-utility-block u-hidden-visually">This is a visually hidden element</div>
      </div>
      <code-snippet slot="codeSlot">
        <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(contentHiding, '')" class="sg-margin-bottom--none"></div>
      </code-snippet>
    </style-wrapper>

  </div>
</template>

<script>
  import StyleWrapper from '@/components/stylewrapper';
  import Heading from '@/components/heading';
  import CodeSnippet from '@/components/codesnippet';
  import returnFormattedCodeString from '@/components/mixins/codestring';

  export default {
    components: { StyleWrapper, Heading, CodeSnippet },
    mixins: [returnFormattedCodeString],
    data: function () {
      return {
        inlineContentAlignment: [
          {content: 'Left aligned text', style: 'u-align--left', element: 'p'},
          {content: 'Center aligned text', style: 'u-align--center', element: 'p'},
          {content: 'Right aligned text', style: 'u-align--right', element: 'p'}
        ],
        blockContentAlignment: [
          {content: '...', style: 'u-block--center', element: 'div'}
        ],
        floatBlock: [
          {content: '...', style: 'u-float--left', element: 'div'},
          {content: '...', style: 'u-float--right', element: 'div'}
        ],
        display: [
          {content: '...', style: 'u-block', element: 'div'},
          {content: '...', style: 'u-inline', element: 'div'},
          {content: '...', style: 'u-inline-block', element: 'div'},
          {content: '...', style: 'u-flex', element: 'div'}
        ],
        position: [
          {content: '...', style: 'u-relative', element: 'div'},
          {content: '...', style: 'u-absolute', element: 'div'}
        ],
        transformation: [
          {content: 'Lowercase text', style: 'u-text-lowercase', element: 'p'},
          {content: 'Uppercase text', style: 'u-text-uppercase', element: 'p'},
          {content: 'Capitalized text', style: 'u-text-capitalize', element: 'p'}
        ],
        contentHiding: [
          {content: '...', style: 'u-hidden', element: 'div'},
          {content: '...', style: 'u-hidden-visually', element: 'div'}
        ]
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
