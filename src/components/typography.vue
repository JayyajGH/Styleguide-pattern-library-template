<template>
  <div id="typography" class="spa-page">
    <h1 class="header1">Typography</h1>


        <p>We follow a 1.5rem baseline grid for achieving a vertical rhythm on all block-level elements.</p>

        <h2 class="header2">Typefaces</h2>
        <p>Our typeface is Arial.  Arial is a sans-serif typeface.</p>

        <div class="button--group sg-sectionborder">
          <p>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
          <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
          <p>0 1 2 3 4 5 6 7 8 9</p>
        </div>

        <div>
          <pre class="prettyprint">
<code>&lt;p class="fontfamily"&gt;...&lt;/p&gt;</code></pre>
        </div>

        <h2 class="header2">Font sizes</h2>
        <p>The font scale contains 7 different font sizes.</p>

        <div class="button--group sg-sectionborder">
          <p class="header1">Pack my box with five dozen liquor jugs</p>
          <p class="header2">Pack my box with five dozen liquor jugs</p>
          <p class="header3">Pack my box with five dozen liquor jugs</p>
          <p class="header4">Pack my box with five dozen liquor jugs</p>
          <p class="body">Pack my box with five dozen liquor jugs</p>
          <p class="sg-font--small">Pack my box with five dozen liquor jugs</p>
          <p class="sg-font--smallest">Pack my box with five dozen liquor jugs</p>
        </div>

        <div>
          <pre class="prettyprint">
<code>&lt;p class="header1"&gt;Pack my box with five dozen liquor jugs&lt;/p&gt;
&lt;p class="header2"&gt;Pack my box with five dozen liquor jugs.&lt;/p&gt;
&lt;p class="header3"&gt;Pack my box with five dozen liquor jugs&lt;/p&gt;
&lt;p class="header4"&gt;Pack my box with five dozen liquor jugs&lt;/p&gt;
&lt;p class="body"&gt;Pack my box with five dozen liquor jugs&lt;/p&gt;
&lt;p class="xyz"&gt;Pack my box with five dozen liquor jugs&lt;/p&gt;
&lt;p class="xyz"&gt;Pack my box with five dozen liquor jugs&lt;/p&gt;</code></pre>
        </div>

        <h2 class="header2">Font weight</h2>
        <p>There are x font weights available to use.</p>

        <h2 class="header2">Type tags</h2>
        <p>Text can be set in a number of different html tags — &lt;p&gt;, &lt;small&gt;, &lt;strong&gt;, &lt;time&gt;, etc. Each tag communicates a different semantic meaning but tags don't carry any aesthetic value.</p>

        <h2 class="header2">Transformation classes</h2>
        <p>Tranform text with text transformation classes</p>

        <div class="button--group sg-sectionborder">
          <p class="u-text-lowercase">Lowercase text</p>
          <p class="u-text-uppercase">Uppercase text</p>
          <p class="u-text-capitalize">Capitalized text</p>
        </div>

        <div>
          <pre class="prettyprint">
<code>&lt;p class="u-text-lowercase"&gt;Lowercase text&lt;/p&gt;
&lt;p class="u-text-uppercase"&gt;Uppercase text&lt;/p&gt;
&lt;p class="u-text-capitalize"&gt;Capitalized text&lt;/p&gt;</code></pre>
        </div>
  </div>
</template>

<script>
export default {
  name: 'typography'
}
</script>

<style scoped lang="scss">
  @import 'static/sass/styleguide-typography.scss';
</style>
