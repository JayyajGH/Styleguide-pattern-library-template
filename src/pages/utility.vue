<template>
  <div id="utility" class="spa-page">
    <heading title="Utility Classes"></heading>

    <style-wrapper header="Inline content alignment" description="The following classes are used to align inline content">
      <div slot="exampleSlot">
        <p class="u-align--left">Left aligned text</p>
        <p class="u-align--center">Center aligned text</p>
        <p class="u-align--right">Right aligned text</p>
      </div>
      <pre v-highlightjs slot="codeSlot" class="sg-sectionborder sg-code__section sg-margin-bottom--none">
<code class="html">&lt;p class="u-align--left"&gt;Left aligned text&lt;/p&gt;
&lt;p class="u-align--center"&gt;Center aligned text&lt;/p&gt;
&lt;p class="u-align--right"&gt;Right aligned text&lt;/p&gt;</code></pre>
    </style-wrapper>

    <style-wrapper header="Block element alignment" description="The following class is used to align block elements">
      <div slot="exampleSlot">
        <div class="sg-utility-block border--solid border-width--thin border-color--black u-block--center"></div>
      </div>
      <pre v-highlightjs slot="codeSlot" class="sg-sectionborder sg-code__section sg-margin-bottom--none">
<code class="html">&lt;div class="u-block--center"&gt;...&lt;/div&gt;</code></pre>
    </style-wrapper>

    <style-wrapper header="Float elements" description="The following classes are used to float block elements.">
      <div slot="exampleSlot">
        <div class="sg-utility-block border--solid border-width--thin border-color--black u-float--left"></div>
        <div class="sg-utility-block border--solid border-width--thin border-color--black u-float--right"></div>
        <!-- Hack to stop parent collapsing -->
        <div style="clear: both;"></div>
      </div>
      <pre v-highlightjs slot="codeSlot" class="sg-sectionborder sg-code__section sg-margin-bottom--none">
<code class="html">&lt;div class="u-float--left"&gt;...&lt;/div&gt;
&lt;div class="u-float--right"&gt;...&lt;/div&gt;</code></pre>
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
      <pre v-highlightjs slot="codeSlot" class="sg-sectionborder sg-code__section sg-margin-bottom--none">
<code class="html">&lt;div class="u-block"&gt;...&lt;/div&gt;
&lt;div class="u-inline"&gt;...&lt;/div&gt;
&lt;div class="u-inline-block"&gt;...&lt;/div&gt;
&lt;div class="u-flex"&gt;...&lt;/div&gt;</code></pre>
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
      <pre v-highlightjs slot="codeSlot" class="sg-sectionborder sg-code__section sg-margin-bottom--none">
    <code class="html">&lt;div class="u-relative"&gt;...&lt;/div&gt;
&lt;div class="u-absolute"&gt;...&lt;/div&gt;</code></pre>
    </style-wrapper>

    <style-wrapper header="Text transforms" description="The following classes are used to transform text.">
      <div slot="exampleSlot">
        <p class="u-text-lowercase">Lowercase text</p>
        <p class="u-text-uppercase">Uppercase text</p>
        <p class="u-text-capitalize">Capitalized text</p>
      </div>
      <pre v-highlightjs slot="codeSlot" class="sg-sectionborder sg-code__section sg-margin-bottom--none">
<code class="html">&lt;div class="u-block"&gt;...&lt;/div&gt;
&lt;div class="u-inline"&gt;...&lt;/div&gt;
&lt;div class="u-inline-block"&gt;...&lt;/div&gt;</code></pre>
    </style-wrapper>

    <style-wrapper header="Hiding content" description="The following classes are used to hide content.  A visually hidden element is useful for screen-readers where an element is required for accessibility reasons but not desirable to be displayed on the screen.">
      <div slot="exampleSlot">
        <p>Following this line is a hidden element</p>
        <div class="sg-utility-block u-hidden">This is a hidden element</div>
        <p>Following this line is a visually hidden element</p>
        <div class="sg-utility-block u-hidden-visually">This is a visually hidden element</div>
      </div>
      <pre v-highlightjs slot="codeSlot" class="sg-sectionborder sg-code__section sg-margin-bottom--none">
<code class="html">&lt;div class="u-hidden"&gt;...&lt;/div&gt;
&lt;div class="u-hidden-visually"&gt;...&lt;/div&gt;</code></pre>
    </style-wrapper>

  </div>
</template>

<script>
  import StyleWrapper from '@/components/stylewrapper';
  import Heading from '@/components/heading';

  export default {
    components: { StyleWrapper, Heading }
  };
</script>

<style lang="scss">
</style>

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
