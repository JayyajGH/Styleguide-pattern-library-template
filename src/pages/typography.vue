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
        <div slot="codeSnippetSlot" v-html="typefaceCodeSnippet" class="sg-margin-bottom--none"></div>
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
        <div slot="codeSnippetSlot" v-html="fontSizesCodeSnippet" class="sg-margin-bottom--none"></div>
      </code-snippet>
    </style-wrapper>

    <style-wrapper header="Font weight" description="There are x font weights available to use.">
      <div slot="exampleSlot">
        <p class="">Normal weight text</p>
        <p class="sg-font--bold">Bold weight text</p>
      </div>
      <code-snippet slot="codeSlot">
        <div slot="codeSnippetSlot" v-html="fontWeightCodeSnippet" class="sg-margin-bottom--none"></div>
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
        <div slot="codeSnippetSlot" v-html="typeTagsCodeSnippet" class="sg-margin-bottom--none"></div>
      </code-snippet>
    </style-wrapper>

    <style-wrapper header="Transformation classes" description="Transform text with text transformation classes">
      <div slot="exampleSlot">
        <p class="u-text-lowercase">Lowercase text</p>
        <p class="u-text-uppercase">Uppercase text</p>
        <p class="u-text-capitalize">Capitalized text</p>
      </div>
      <code-snippet slot="codeSlot">
        <div slot="codeSnippetSlot" v-html="transformationCodeSnippet" class="sg-margin-bottom--none"></div>
      </code-snippet>
    </style-wrapper>

  </div>
</template>

<script>
  import StyleWrapper from '@/components/stylewrapper';
  import Heading from '@/components/heading';
  import CodeSnippet from '@/components/codesnippet';

  export default {
    components: { StyleWrapper, Heading, CodeSnippet },
    computed: {
      typefaceCodeSnippet: function () {
        return '&lt;p&gt;...&lt;/p&gt;';
      },
      fontSizesCodeSnippet: function () {
        return `${this.fontSizes.header1}\n${this.fontSizes.header2}\n${this.fontSizes.header3}\n${this.fontSizes.header4}\n${this.fontSizes.body}\n${this.fontSizes.xyz1}\n${this.fontSizes.xyz2}`;
      },
      fontWeightCodeSnippet: function () {
        return `${this.fontWeight.normal}\n${this.fontWeight.bold}`;
      },
      typeTagsCodeSnippet: function () {
        return `${this.typeTags.paragraph}\n${this.typeTags.small}\n${this.typeTags.strong}\n${this.typeTags.bold}\n${this.typeTags.italic}\n${this.typeTags.emphasis}`;
      },
      transformationCodeSnippet: function () {
        return `${this.transformation.lowercase}\n${this.transformation.uppercase}\n${this.transformation.capitalize}\n`;
      }
    },
    data: function () {
      var pangramText = 'Pack my box with five dozen liquor jugs';
      return {
        pangramText,
        fontSizes: {
          header1: `&lt;p class="header1"&gt;${pangramText}&lt;/p&gt;`,
          header2: `&lt;p class="header2"&gt;${pangramText}&lt;/p&gt;`,
          header3: `&lt;p class="header3"&gt;${pangramText}&lt;/p&gt;`,
          header4: `&lt;p class="header4"&gt;${pangramText}&lt;/p&gt;`,
          body: `&lt;p class="body"&gt;${pangramText}&lt;/p&gt;`,
          xyz1: `&lt;p class="xyz1"&gt;${pangramText}&lt;/p&gt;`,
          xyz2: `&lt;p class="xyz2"&gt;${pangramText}&lt;/p&gt;`
        },
        fontWeight: {
          normal: `&lt;p&gt;Normal weight text&lt;/p&gt;`,
          bold: `&lt;p class="xyz"&gt;Bold weight text&lt;/p&gt;`
        },
        typeTags: {
          paragraph: `&lt;p&gt;Paragraph tag&lt;/p&gt;`,
          small: `&lt;small&gt;Small tag&lt;/small&gt;`,
          strong: `&lt;strong&gt;Strong tag&lt;/strong&gt;`,
          bold: `&lt;b&gt;Bold tag&lt;/b&gt;`,
          italic: `&lt;i&gt;Italic tag&lt;/i&gt;`,
          emphasis: `&lt;em&gt;Emphasis tag&lt;/em&gt;`
        },
        transformation: {
          lowercase: `&lt;p class="u-text-lowercase"&gt;Lowercase text&lt;/p&gt;`,
          uppercase: `&lt;p class="u-text-uppercase"&gt;Uppercase text&lt;/p&gt;`,
          capitalize: `&lt;p class="u-text-capitalize"&gt;Capitalized text&lt;/p&gt;`
        }
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
