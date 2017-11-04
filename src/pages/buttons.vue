<template>
  <div id="buttons" class="spa-page">
    <heading title="Buttons"></heading>

    <p>These styles will work on the button element, an input element with a type of button and an anchor styled as a button</p>

   <h2 class="header2">Button sizes</h2>
   <p>Define a button size with button--small, button--medium or button--large</p>

   <div class="button--group sg-flex sg-flex-button sg-sectionborder sg-padding--large u-flex">
     <span v-for="bsize in buttonSize" class="sg-margin-bottom--medium">
       <button type="button" class="button button--simple button--primary" :class=bsize.styling>{{bsize.name}}</button>
     </span>
   </div>
   <div>
  <pre v-highlightjs class="sg-sectionborder sg-code__section">
<code class="html">&lt;button type="button" class="button button--simple button--primary button--small"&gt;Small button&lt;/button&gt;
&lt;button type="button" class="button button--simple button--primary button--medium"&gt;Medium button&lt;/button&gt;
&lt;button type="button" class="button button--simple button--primary button--large"&gt;Large button&lt;/button&gt;</code></pre>
</div>

<h2 class="header2">Button importance</h2>
   <p>Define a buttons importance with button--primary, button--secondary or button--tertiary</p>

   <div class="button--group sg-flex sg-flex-button sg-sectionborder sg-padding--large u-flex">
     <span v-for="bimportant in buttonImportance" class="sg-margin-bottom--medium">
       <button type="button" class="button button--simple button--medium" :class=bimportant.styling>{{bimportant.name}}</button>
     </span>
   </div>

   <div>
     <pre v-highlightjs class="sg-sectionborder sg-code__section">
<code class="html">&lt;button type="button" class="button button--simple button--primary button--medium"&gt;Primary button&lt;/button&gt;
&lt;button type="button" class="button button--simple button--secondary button--medium"&gt;Secondary button&lt;/button&gt;
&lt;button type="button" class="button button--simple button--tertiary button--medium"&gt;Tertiary button&lt;/button&gt;</code></pre>
   </div>

   <h2 class="header2">Button width</h2>
   <p>Define the width of a button to a set size with button--halfwidth or button--fullwidth</p>

   <div class="button--group sg-sectionborder sg-padding--large">
     <div v-for="bwidth in buttonWidth">
       <button type="button" class="button button--simple button--primary button--medium" :class=bwidth.styling>{{bwidth.name}}</button>
     </div>
   </div>

<div>
  <pre v-highlightjs class="sg-sectionborder sg-code__section">
<code class="html">&lt;button type="button" class="button button--simple button--halfwidth button--primary button--medium"&gt;Half-width button&lt;/button&gt;
&lt;button type="button" class="button button--simple button--fullwidth button--primary button--medium"&gt;Full-width button&lt;/button&gt;</code></pre>
</div>

<h2 class="header2">Button Styles</h2>
<p>Define the style of a button with button--simple or button--ghost.  All other options can be applied to each style.</p>

<div class="button--group sg-flex sg-flex-button sg-sectionborder sg-padding--large u-flex">
  <span v-for="bstyle in buttonStyle" class="sg-margin-bottom--medium">
    <button type="button" class="button button--medium" :class=bstyle.styling>{{bstyle.name}}</button>
  </span>
</div>

<div>
  <pre v-highlightjs class="sg-sectionborder sg-code__section">
<code class="html">&lt;button type="button" class="button button--simple button--primary button--medium"&gt;Simple button&lt;/button&gt;
&lt;button type="button" class="button button--ghost button-ghost--primary button--medium"&gt;Ghost button&lt;/button&gt;</code></pre>
</div>

<h2 class="header2">Button Grouping</h2>
<p>Set a grouping container for buttons.  This will add the correct padding etc.</p>

<div class="button--group sg-flex sg-flex-button sg-sectionborder sg-padding--large u-flex">
  <span class="sg-margin-bottom--medium">
    <button type="button" class="button button--simple button--primary button--medium">Button 1</button>
  </span>
  <span class="sg-margin-bottom--medium">
    <button type="button" class="button button--simple button--primary button--medium">Button 2</button>
  </span>
</div>

<div>
  <pre v-highlightjs class="sg-sectionborder sg-code__section">
<code class="html">&lt;div class="button--group"&gt;
  &lt;button type="button" class="button button--simple button--primary button--medium"&gt;Button 1&lt;/button&gt;
  &lt;button type="button" class="button button--simple button--primary button--medium"&gt;Button 2&lt;/button&gt;
&lt;/div&gt;</code></pre>
</div>


  </div>
</template>

<script>
  import Heading from '@/components/heading';

  export default {
    components: { Heading },
    data: function () {
      return {
        buttonSize: [
          {name: 'Small button', styling: 'button--small'},
          {name: 'Medium button', styling: 'button--medium'},
          {name: 'Large button', styling: 'button--large'}
        ],
        buttonImportance: [
          {name: 'Primary button', styling: 'button--primary'},
          {name: 'Secondary button', styling: 'button--secondary'},
          {name: 'Tertiary button', styling: 'button--tertiary'}
        ],
        buttonWidth: [
          {name: 'Half-width button', styling: 'button--halfwidth'},
          {name: 'Full-width button', styling: 'button--fullwidth'}
        ],
        buttonStyle: [
          {name: 'Simple button', styling: 'button--simple button--primary'},
          {name: 'Ghost button', styling: 'button--ghost button-ghost--primary'}
        ]
      };
    }
  };
</script>

<style lang="scss">
  @import 'static/sass/buttons.scss';
</style>

<style scoped lang="scss">
  @import 'static/sass/abstracts/_abstracts.scss';

  .sg-flex-button {
    flex-direction: column;

    @include respond-to('medium and above') {
      flex-direction: row;
    }
  }
</style>
