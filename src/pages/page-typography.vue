<template>
  <div id="typography" class="spa-page">
    <heading title="Typography"></heading>

    <p>A 1.5rem baseline grid is used for achieving a consistent vertical rhythm on all block-level elements.</p>

    <p>Add some information on the font licencing</p>

    <style-wrapper :header=typeface.title :description=typeface.description>
      <div slot="exampleSlot">
        <p>{{alphabetText.toUpperCase()}}</p>
        <p>{{alphabetText}}</p>
        <p>0 1 2 3 4 5 6 7 8 9</p>
      </div>
      <code-snippet slot="codeSlot">
        <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(typeface.elements, '')" class="sg-margin-bottom--none"></div>
      </code-snippet>
    </style-wrapper>

    <style-wrapper :header=fontSizes.title :description=fontSizes.description>
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
        <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(fontSizes.elements, '')" class="sg-margin-bottom--none"></div>
      </code-snippet>
    </style-wrapper>

    <style-wrapper :header=fontWeight.title>
      <div slot="descriptionSlot">
        <p>There are 2 font weights available to use for body text.</p>
      </div>
      <div slot="exampleSlot">
        <p class="">Normal weight text</p>
        <p class="sg-font--bold">Bold weight text</p>
      </div>
      <code-snippet slot="codeSlot">
        <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(fontWeight.elements, '')" class="sg-margin-bottom--none"></div>
      </code-snippet>
    </style-wrapper>

    <style-wrapper :header=typeTags.title :description=typeTags.description>
      <div slot="exampleSlot">
        <p>Paragraph tag</p>
        <p><small>Small tag</small></p>
        <p><strong>Strong tag</strong></p>
        <p><b>Bold tag</b></p>
        <p><i>Italic tag</i></p>
        <p><em>Emphasis tag</em></p>
      </div>
      <code-snippet slot="codeSlot">
        <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(typeTags.elements, '')" class="sg-margin-bottom--none"></div>
      </code-snippet>
    </style-wrapper>

    <style-wrapper :header=transformation.title :description=transformation.description>
      <div slot="exampleSlot">
        <p class="u-text-lowercase">Lowercase text</p>
        <p class="u-text-uppercase">Uppercase text</p>
        <p class="u-text-capitalize">Capitalized text</p>
      </div>
      <code-snippet slot="codeSlot">
        <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(transformation.elements, '')" class="sg-margin-bottom--none"></div>
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

  export default {
    name: 'PageTypography',
    components: { StyleWrapper, Heading, CodeSnippet },
    mixins: [returnFormattedCodeString],
    data: function () {
      const pangramText = 'Pack my box with five dozen liquor jugs';
      const alphabetText = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
      return {
        pangramText,
        alphabetText,
        typeface: {
          title: 'Typefaces',
          description: 'Our standard typeface is Arial.  Arial is a sans-serif typeface.',
          elements: [
            new ElementExample('...', '', 'p')
          ]
        },
        fontSizes: {
          title: 'Font sizes',
          description: 'The font scale contains 7 different font sizes.',
          elements: [
            new ElementExample(pangramText, 'header1', 'p'),
            new ElementExample(pangramText, 'header2', 'p'),
            new ElementExample(pangramText, 'header3', 'p'),
            new ElementExample(pangramText, 'header3', 'p'),
            new ElementExample(pangramText, 'body', 'p'),
            new ElementExample(pangramText, 'xyz1', 'p'),
            new ElementExample(pangramText, 'xyz2', 'p')
          ]
        },
        fontWeight: {
          title: 'Font weight',
          elements: [
            new ElementExample('Normal weight text', '', 'p'),
            new ElementExample('Bold weight text', 'xyz', 'p')
          ]
        },
        typeTags: {
          title: 'Type tags',
          description: 'Text can be set in a number of different semantic html tags. Each tag communicates a different semantic meaning but tags don\'t carry any aesthetic value.',
          elements: [
            new ElementExample('Paragraph tag', '', 'p'),
            new ElementExample('Small tag', '', 'small'),
            new ElementExample('Strong tag', '', 'strong'),
            new ElementExample('Bold tag', '', 'bold'),
            new ElementExample('Italic tag', '', 'i'),
            new ElementExample('Emphasis tag', '', 'em')
          ]
        },
        transformation: {
          title: 'Transformation classes',
          description: 'Transform text with text transformation classes',
          elements: [
            new ElementExample('Lowercase text', 'u-text-lowercase', 'p'),
            new ElementExample('Uppercase text', 'u-text-uppercase', 'p'),
            new ElementExample('Capitalized text', 'u-text-capitalize', 'p')
          ]
        }
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
