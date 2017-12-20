<template>
  <div id="typography" class="spa-page">
    <heading title="Typography"></heading>

    <p>A 1.5rem baseline grid is used for achieving a consistent vertical rhythm on all block-level elements.</p>

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

    <style-wrapper header="Font weight">
      <div slot="descriptionSlot">
        <p>There are 2 font weights available to use for body text.</p>
      </div>
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
  import ElementExample from '@/components/classes/elementexample';

  export default {
    components: { StyleWrapper, Heading, CodeSnippet },
    mixins: [returnFormattedCodeString],
    data: function () {
      const pangramText = 'Pack my box with five dozen liquor jugs';
      return {
        pangramText,
        typeface: [
          new ElementExample('...', '', 'p')
        ],
        fontSizes: [
          new ElementExample(pangramText, 'header1', 'p'),
          new ElementExample(pangramText, 'header2', 'p'),
          new ElementExample(pangramText, 'header3', 'p'),
          new ElementExample(pangramText, 'header3', 'p'),
          new ElementExample(pangramText, 'body', 'p'),
          new ElementExample(pangramText, 'xyz1', 'p'),
          new ElementExample(pangramText, 'xyz2', 'p')
        ],
        fontWeight: [
          new ElementExample('Normal weight text', '', 'p'),
          new ElementExample('Bold weight text', 'xyz', 'p')
        ],
        typeTags: [
          new ElementExample('Paragraph tag', '', 'p'),
          new ElementExample('Small tag', '', 'small'),
          new ElementExample('Strong tag', '', 'strong'),
          new ElementExample('Bold tag', '', 'bold'),
          new ElementExample('Italic tag', '', 'i'),
          new ElementExample('Emphasis tag', '', 'em')
        ],
        transformation: [
          new ElementExample('Lowercase text', 'u-text-lowercase', 'p'),
          new ElementExample('Uppercase text', 'u-text-uppercase', 'p'),
          new ElementExample('Capitalized text', 'u-text-capitalize', 'p')
        ]
      };
    }
  };
</script>

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
