<template>
  <div id="layout" class="spa-page">
    <h1 class="header1">Layout</h1>

    <p>Uniform spacing.  Mention layout stuff.  How to add padding/margins etc.</p>

    <p>Most elements will already have the correct spacing added to them.</p>

    <p>Talk about using css grid for layout.  And mention support. </p>

    Maybe some ideas from:
    https://marvelapp.com/styleguide/design/layout

    <div class="sg-sectionborder sg-padding--large">
      <div class="sg-flex">
        <div class="sg-layout">
          <div class="border--solid border-width--medium border-color--black sg-layout__item">
          </div>
        </div>
      </div>
      <div class="sg-flex">
        <div class="sg-layout">
          <div class="border--dashed border-width--medium border-color--black sg-layout__item">
          </div>
        </div>
        <div class="sg-layout">
          <div class="border--dashed border-width--medium border-color--black sg-layout__item">
          </div>
        </div>
      </div>
      <div class="sg-flex">
        <div class="sg-layout">
          <div class="border--dashed border-width--medium border-color--black sg-layout__item">
          </div>
        </div>
        <div class="sg-layout">
          <div class="border--dashed border-width--medium border-color--black sg-layout__item">
          </div>
        </div>
        <div class="sg-layout">
          <div class="border--dashed border-width--medium border-color--black sg-layout__item">
          </div>
        </div>
      </div>
      <div class="sg-flex">
        <div class="sg-layout">
          <div class="border--dashed border-width--medium border-color--black sg-layout__item">
          </div>
        </div>
        <div class="sg-layout">
          <div class="border--dashed border-width--medium border-color--black sg-layout__item">
          </div>
        </div>
        <div class="sg-layout">
          <div class="border--dashed border-width--medium border-color--black sg-layout__item">
          </div>
        </div>
        <div class="sg-layout">
          <div class="border--dashed border-width--medium border-color--black sg-layout__item">
          </div>
        </div>
      </div>
    </div>

    <div>
    <pre v-highlightjs class="sg-sectionborder">
<code class="html">&lt;button type="button" class="button button--simple button--primary button--small"&gt;Small button&lt;/button&gt;
&lt;button type="button" class="button button--simple button--primary button--medium"&gt;Medium button&lt;/button&gt;
&lt;button type="button" class="button button--simple button--primary button--large"&gt;Large button&lt;/button&gt;</code></pre>
    </div>

  </div>
</template>

<script>
export default {
  name: 'layout'
}
</script>

<style scoped lang="scss">
  .sg-layout {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 0;
  }

  .sg-layout__item {
    margin: 0;
    height: 40px;
    background-color: #f0f0f5;
  }
</style>
