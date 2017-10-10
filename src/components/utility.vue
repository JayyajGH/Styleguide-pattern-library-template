<template>
  <div id="utility" class="spa-page">
    <h1 class="header1">Utility Classes</h1>

    <style-wrapper header="Inline content alignment" description="The following classes are used to align inline content">
      <div slot="exampleSlot" class="">
        <div class="sg-utility-box">
          <p class="u-align--left">Left aligned text</p>
          <p class="u-align--center">Center aligned text</p>
          <p class="u-align--right">Right aligned text</p>
        </div>
      </div>
      <pre slot="codeSlot" class="prettyprint">
<code>&lt;p class="u-align--left"&gt;Left aligned text&lt;/p&gt;
&lt;p class="u-align--center"&gt;Center aligned text&lt;/p&gt;
&lt;p class="u-align--right"&gt;Right aligned text&lt;/p&gt;</code></pre>
    </style-wrapper>

    <style-wrapper header="Block element alignment" description="The following classes are used to align block elements">
      <div slot="exampleSlot" class="">
        <div class="sg-utility-box">
          <div class="sg-utility-block u-block--center"></div>
        </div>
      </div>
      <pre slot="codeSlot" class="prettyprint">
<code>&lt;div class="u-block--center"&gt;...&lt;/div&gt;</code></pre>
    </style-wrapper>

    <style-wrapper header="Float elements" description="The following classes are used to float elements.">
      <div slot="exampleSlot" class="">
        <div class="sg-utility-box">
          <div class="sg-utility-block u-float--left"></div>
          <div class="sg-utility-block u-float--right"></div>
          <!-- Hack to stop parent collapsing -->
          <div style="clear: both;"></div>
        </div>
      </div>
      <pre slot="codeSlot" class="prettyprint">
<code>&lt;div class="u-float--left"&gt;...&lt;/div&gt;
&lt;div class="u-float--right"&gt;...&lt;/div&gt;</code></pre>
    </style-wrapper>

    <style-wrapper header="Display settings" description="The following classes are used to change the display property.">
      <div slot="exampleSlot" class="">
        <div class="sg-utility-box">
          <p class="sg-utility-block u-block"></p>
                    <p class="sg-utility-block u-block"></p>
          <p class="sg-utility-block u-inline-block"></p>
        </div>
      </div>
      <pre slot="codeSlot" class="prettyprint">
<code>&lt;div class="u-block"&gt;...&lt;/div&gt;
&lt;div class="u-inline"&gt;...&lt;/div&gt;
&lt;div class="u-inline-block"&gt;...&lt;/div&gt;</code></pre>
    </style-wrapper>

    <style-wrapper header="Text transforms" description="The following classes are used to transform text.">
      <div slot="exampleSlot" class="">
        <div class="sg-utility-box">
          <p class="u-text-lowercase">Lowercase text</p>
          <p class="u-text-uppercase">Uppercase text</p>
          <p class="u-text-capitalize">Capitalized text</p>
        </div>
      </div>
      <pre slot="codeSlot" class="prettyprint">
<code>&lt;div class="u-block"&gt;...&lt;/div&gt;
&lt;div class="u-inline"&gt;...&lt;/div&gt;
&lt;div class="u-inline-block"&gt;...&lt;/div&gt;</code></pre>
    </style-wrapper>

    <style-wrapper header="Hiding content" description="The following classes are used to hide content.">
      <div slot="exampleSlot" class="">
        <div class="sg-utility-box">
          <div class="sg-utility-block u-hidden">This is a hidden element</div>
          <div class="sg-utility-block u-hidden-visually">This is a visually hidden element</div>
        </div>
      </div>
      <pre slot="codeSlot" class="prettyprint">
<code>&lt;div class="u-hidden"&gt;...&lt;/div&gt;
&lt;div class="u-hidden-visually"&gt;...&lt;/div&gt;</code></pre>
    </style-wrapper>

<!--
// Hiding content

// NB: This will not be available to screenreaders.  Some screenreaders will ignore display: none
.u-hidden {
    display: none;
    visibility: hidden;
}

// NB: This will be hidden from view but still be available to screenreaders
// http://webaim.org/techniques/css/invisiblecontent/
.u-hidden-visually {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
}


-->


  </div>
</template>

<script>
  import StyleWrapper from '@/components/stylewrapper'

  export default {
    components: { StyleWrapper }
  }
</script>

<style scoped lang="scss">
  @import 'static/sass/styleguide-utility.scss';
</style>
