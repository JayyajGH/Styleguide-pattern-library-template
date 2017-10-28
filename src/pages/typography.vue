<template>
  <div id="typography" class="spa-page">
    <heading title="Typography"></heading>

    <p>We follow a 1.5rem baseline grid for achieving a vertical rhythm on all block-level elements.</p>

    <style-wrapper header="Typefaces" description="Our standard typeface is Arial.  Arial is a sans-serif typeface.">
      <div slot="exampleSlot" class="button--group">
        <p>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
        <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
        <p>0 1 2 3 4 5 6 7 8 9</p>
      </div>
      <pre v-highlightjs slot="codeSlot" class="sg-sectionborder sg-code">
<code class="html">&lt;p&gt;...&lt;/p&gt;</code></pre>
    </style-wrapper>

    <style-wrapper header="Font sizes" description="The font scale contains 7 different font sizes.">
      <div slot="exampleSlot" class="button--group">
        <p class="header1">Pack my box with five dozen liquor jugs</p>
        <p class="header2">Pack my box with five dozen liquor jugs</p>
        <p class="header3">Pack my box with five dozen liquor jugs</p>
        <p class="header4">Pack my box with five dozen liquor jugs</p>
        <p class="body">Pack my box with five dozen liquor jugs</p>
        <p class="sg-font--small">Pack my box with five dozen liquor jugs</p>
        <p class="sg-font--smallest">Pack my box with five dozen liquor jugs</p>
      </div>
      <pre v-highlightjs slot="codeSlot" class="sg-sectionborder sg-code">
<code class="html">&lt;p class="header1"&gt;Pack my box with five dozen liquor jugs&lt;/p&gt;
&lt;p class="header2"&gt;Pack my box with five dozen liquor jugs.&lt;/p&gt;
&lt;p class="header3"&gt;Pack my box with five dozen liquor jugs&lt;/p&gt;
&lt;p class="header4"&gt;Pack my box with five dozen liquor jugs&lt;/p&gt;
&lt;p class="body"&gt;Pack my box with five dozen liquor jugs&lt;/p&gt;
&lt;p class="xyz"&gt;Pack my box with five dozen liquor jugs&lt;/p&gt;
&lt;p class="xyz"&gt;Pack my box with five dozen liquor jugs&lt;/p&gt;</code></pre>
    </style-wrapper>

    <style-wrapper header="Font weight" description="There are x font weights available to use.">
      <div slot="exampleSlot" class="button--group">
        <p class="">Normal weight text</p>
        <p class="sg-font--bold">Bold weight text</p>
      </div>
      <pre v-highlightjs slot="codeSlot" class="sg-sectionborder sg-code">
<code class="html">&lt;p&gt;Normal weight text&lt;/p&gt;
&lt;p class="xyz"&gt;Bold weight text&lt;/p&gt;</code></pre>
    </style-wrapper>

    <style-wrapper header="Type tags" description="Text can be set in a number of different semantic html tags. Each tag communicates a different semantic meaning but tags don't carry any aesthetic value.">
      <div slot="exampleSlot" class="button--group">
        <p>Paragraph tag</p>
        <p><small>Small tag</small></p>
        <p><strong>Strong tag</strong></p>
        <p><b>Bold tag</b></p>
        <p><i>Italic tag</i></p>
        <p><em>Emphasis tag</em></p>
      </div>
      <pre v-highlightjs slot="codeSlot" class="sg-sectionborder  sg-code">
<code class="html">&lt;p&gt;Paragraph tag&lt;/p&gt;
&lt;small&gt;Small tag&lt;/small&gt;
&lt;strong&gt;Strong tag&lt;/strong&gt;
&lt;b&gt;Bold tag&lt;/b&gt;
&lt;i&gt;Italic tag&lt;/i&gt;
&lt;em&gt;Emphasis tag&lt;/em&gt;</code></pre>
    </style-wrapper>


    <style-wrapper header="Transformation classes" description="Transform text with text transformation classes">
      <div slot="exampleSlot" class="button--group">
        <p class="u-text-lowercase">Lowercase text</p>
        <p class="u-text-uppercase">Uppercase text</p>
        <p class="u-text-capitalize">Capitalized text</p>
      </div>
      <pre v-highlightjs slot="codeSlot" class="sg-sectionborder  sg-code">
<code class="html">&lt;p class="u-text-lowercase"&gt;Lowercase text&lt;/p&gt;
&lt;p class="u-text-uppercase"&gt;Uppercase text&lt;/p&gt;
&lt;p class="u-text-capitalize"&gt;Capitalized text&lt;/p&gt;</code></pre>
    </style-wrapper>

  </div>
</template>

<script>
  import StyleWrapper from '@/components/stylewrapper'
  import Heading from '@/components/heading'

  export default {
    components: { StyleWrapper, Heading }
  }
</script>

<style lang="scss">
</style>

<style scoped lang="scss">
  @import 'static/sass/abstracts/_abstracts';

  .sg-font--smallest {
      @extend %bodysmallest;
  }

  .sg-font--small {
      @extend %bodysmall;
  }

  .sg-font--bold {
      @extend %bodybold;
  }
</style>
