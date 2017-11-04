<template>
  <div id="layout" class="spa-page">
    <heading title="Layout"></heading>

    <p>Uniform spacing.  How to add padding/margins etc.</p>

    <p>Most elements will already have the correct spacing added to them.</p>

    <p>Talk about using css grid for layout.  And mention support. Should there be some default boilerplate classes for layout? </p>

    <p>
      Maybe some ideas from: https://marvelapp.com/styleguide/design/layout
    </p>

    <div class="sg-sectionborder sg-padding--large">
      <div class="sg-flex u-flex">
        <div class="sg-layout sg-margin-bottom--none">
          <div class="border--solid border-width--thin border-color--black sg-layout__item">
          </div>
        </div>
      </div>
      <div class="sg-flex u-flex">
        <div class="sg-layout sg-margin-bottom--none">
          <div class="border--solid border-width--thin border-color--black sg-layout__item">
          </div>
        </div>
        <div class="sg-layout sg-margin-bottom--none">
          <div class="border--solid border-width--thin border-color--black sg-layout__item">
          </div>
        </div>
      </div>
      <div class="sg-flex u-flex">
        <div class="sg-layout sg-margin-bottom--none">
          <div class="border--solid border-width--thin border-color--black sg-layout__item">
          </div>
        </div>
        <div class="sg-layout sg-margin-bottom--none">
          <div class="border--solid border-width--thin border-color--black sg-layout__item">
          </div>
        </div>
        <div class="sg-layout sg-margin-bottom--none">
          <div class="border--solid border-width--thin border-color--black sg-layout__item">
          </div>
        </div>
      </div>
      <div class="sg-flex u-flex">
        <div class="sg-layout sg-margin-bottom--none">
          <div class="border--solid border-width--thin border-color--black sg-layout__item">
          </div>
        </div>
        <div class="sg-layout sg-margin-bottom--none">
          <div class="border--solid border-width--thin border-color--black sg-layout__item">
          </div>
        </div>
        <div class="sg-layout sg-margin-bottom--none">
          <div class="border--solid border-width--thin border-color--black sg-layout__item">
          </div>
        </div>
        <div class="sg-layout sg-margin-bottom--none">
          <div class="border--solid border-width--thin border-color--black sg-layout__item">
          </div>
        </div>
      </div>
    </div>

    <div>
    <pre v-highlightjs class="sg-sectionborder sg-code__section">
<code class="html">&lt;button type="button" class="button button--simple button--primary button--small"&gt;Small button&lt;/button&gt;
&lt;button type="button" class="button button--simple button--primary button--medium"&gt;Medium button&lt;/button&gt;
&lt;button type="button" class="button button--simple button--primary button--large"&gt;Large button&lt;/button&gt;</code></pre>
    </div>

  </div>
</template>

<script>
  import Heading from '@/components/heading';

  export default {
    components: { Heading }
  };
</script>

<style lang="scss">
  @import 'static/sass/borders.scss';
</style>

<style scoped lang="scss">
  .sg-layout {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }

  .sg-layout__item {
    margin: 0;
    height: 40px;
    background-color: #f0f0f5;
  }
</style>
