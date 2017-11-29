<template>
  <div id="typography" class="spa-page">
    <heading title="Typography"></heading>

    <p>We follow a 1.5rem baseline grid for achieving a vertical rhythm on all block-level elements.</p>

    <style-wrapper header="Typefaces" description="Our standard typeface is Arial.  Arial is a sans-serif typeface.">
      <div slot="exampleSlot">
        <p>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
        <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
        <p>0 1 2 3 4 5 6 7 8 9</p>
      </div>
      <code-snippet slot="codeSlot">
        <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(typeface, '')" class="sg-margin-bottom--none"></div>
      </code-snippet>
    </style-wrapper>

    <style-wrapper header="Font sizes" description="The font scale contains 7 different font sizes.">
      <div slot="exampleSlot">
        <p class="header1">{{pangramText}}</p>
        <p class="header2">{{pangramText}}</p>
        <p class="header3">{{pangramText}}</p>
        <p class="header4">{{pangramText}}</p>
        <p class="body">{{pangramText}}</p>
        <p class="sg-font--small">{{pangramText}}</p>
        <p class="sg-font--smallest">{{pangramText}}</p>
      </div>
      <code-snippet slot="codeSlot">
        <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(fontSizes, '')" class="sg-margin-bottom--none"></div>
      </code-snippet>
    </style-wrapper>

    <style-wrapper header="Font weight" description="There are x font weights available to use.">
      <div slot="exampleSlot">
        <p class="">Normal weight text</p>
        <p class="sg-font--bold">Bold weight text</p>
      </div>
      <code-snippet slot="codeSlot">
        <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(fontWeight, '')" class="sg-margin-bottom--none"></div>
      </code-snippet>
    </style-wrapper>

    <style-wrapper header="Type tags" description="Text can be set in a number of different semantic html tags. Each tag communicates a different semantic meaning but tags don't carry any aesthetic value.">
      <div slot="exampleSlot">
        <p>Paragraph tag</p>
        <p><small>Small tag</small></p>
        <p><strong>Strong tag</strong></p>
        <p><b>Bold tag</b></p>
        <p><i>Italic tag</i></p>
        <p><em>Emphasis tag</em></p>
      </div>
      <code-snippet slot="codeSlot">
        <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(typeTags, '')" class="sg-margin-bottom--none"></div>
      </code-snippet>
    </style-wrapper>

    <style-wrapper header="Transformation classes" description="Transform text with text transformation classes">
      <div slot="exampleSlot">
        <p class="u-text-lowercase">Lowercase text</p>
        <p class="u-text-uppercase">Uppercase text</p>
        <p class="u-text-capitalize">Capitalized text</p>
      </div>
      <code-snippet slot="codeSlot">
        <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(transformation, '')" class="sg-margin-bottom--none"></div>
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
      var pangramText = 'Pack my box with five dozen liquor jugs';
      return {
        pangramText,
        typeface: [
          {content: '...', style: '', element: 'p'}
        ],
        fontSizes: [
          {content: pangramText, style: 'header1', element: 'p'},
          {content: pangramText, style: 'header2', element: 'p'},
          {content: pangramText, style: 'header3', element: 'p'},
          {content: pangramText, style: 'header4', element: 'p'},
          {content: pangramText, style: 'body', element: 'p'},
          {content: pangramText, style: 'xyz1', element: 'p'},
          {content: pangramText, style: 'xyz2', element: 'p'}
        ],
        fontWeight: [
          {content: 'Normal weight text', style: '', element: 'p'},
          {content: 'Bold weight text', style: 'xyz', element: 'p'}
        ],
        typeTags: [
          {content: 'Paragraph tag', style: '', element: 'p'},
          {content: 'Small tag', style: '', element: 'small'},
          {content: 'Strong tag', style: '', element: 'strong'},
          {content: 'Bold tag', style: '', element: 'bold'},
          {content: 'Italic tag', style: '', element: 'i'},
          {content: 'Emphasis tag', style: '', element: 'em'}
        ],
        transformation: [
          {content: 'Lowercase text', style: 'u-text-lowercase', element: 'p'},
          {content: 'Uppercase text', style: 'u-text-uppercase', element: 'p'},
          {content: 'Capitalized text', style: 'u-text-capitalize', element: 'p'}
        ]
      };
    }
  };
</script>

<style lang="scss">
</style>

<style scoped lang="scss">
  @import 'static/sass/abstracts/_abstracts';

  .sg-font--smallest {
      @include body-smallest();
  }

  .sg-font--small {
      @include body-small();
  }

  .sg-font--bold {
      @include body-bold();
  }
</style>
