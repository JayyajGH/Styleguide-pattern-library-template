<template>
  <div id="buttons" class="spa-page">
    <h1 class="header1">Buttons</h1>

    <p>These styles will work on the button element, an input element with a type of button and an anchor styled as a button</p>

   <h2 class="header2">Button sizes</h2>
   <p>Define a button size with button--small, button--medium or button--large</p>

   <div class="button--group sg-flex sg-sectionborder sg-bottompadding--large">
     <span>
       <button type="button" class="button button--simple button--primary button--small">Small button</button>
     </span>
     <span>
       <button type="button" class="button button--simple button--primary button--medium">Medium button</button>
     </span>
     <span>
       <button type="button" class="button button--simple button--primary button--large">Large button</button>
     </span>
   </div>

   <div>
  <pre v-highlightjs class="sg-sectionborder">
<code class="html">&lt;button type="button" class="button button--simple button--primary button--small"&gt;Small button&lt;/button&gt;
&lt;button type="button" class="button button--simple button--primary button--medium"&gt;Medium button&lt;/button&gt;
&lt;button type="button" class="button button--simple button--primary button--large"&gt;Large button&lt;/button&gt;</code></pre>
</div>

<h2 class="header2">Button importance</h2>
   <p>Define a buttons importance with button--primary, button--secondary or button--tertiary</p>

   <div class="button--group sg-flex sg-sectionborder sg-bottompadding--large">
     <span>
       <button type="button" class="button button--simple button--primary button--medium">Primary button</button>
     </span>
     <span>
       <button type="button" class="button button--simple button--secondary button--medium">Secondary button</button>
     </span>
     <span>
       <button type="button" class="button button--simple button--tertiary button--medium">Tertiary button</button>
     </span>
   </div>

   <div>
     <pre v-highlightjs class="sg-sectionborder">
<code class="html">&lt;button type="button" class="button button--simple button--primary button--medium"&gt;Primary button&lt;/button&gt;
&lt;button type="button" class="button button--simple button--secondary button--medium"&gt;Secondary button&lt;/button&gt;
&lt;button type="button" class="button button--simple button--tertiary button--medium"&gt;Tertiary button&lt;/button&gt;</code></pre>
   </div>

   <h2 class="header2">Button width</h2>
<p>Define the width of a button to a set size with button--halfwidth or button--fullwidth</p>

<div class="button--group sg-sectionborder sg-bottompadding--large">
  <div>
    <button type="button" class="button button--simple button--halfwidth button--primary button--medium">Half-width button</button>
  </div>
  <span>
    <button type="button" class="button button--simple button--fullwidth button--primary button--medium">Full-width button</button>
  </span>
</div>

<div>
  <pre v-highlightjs class="sg-sectionborder">
<code class="html">&lt;button type="button" class="button button--simple button--halfwidth button--primary button--medium"&gt;Half-width button&lt;/button&gt;
&lt;button type="button" class="button button--simple button--fullwidth button--primary button--medium"&gt;Full-width button&lt;/button&gt;</code></pre>
</div>

<h2 class="header2">Button Styles</h2>
<p>Define the style of a button with button--simple or button--ghost.  All other options can be applied to each style.</p>

<div class="button--group sg-flex sg-sectionborder sg-bottompadding--large">
  <span>
    <button type="button" class="button button--simple button--primary button--medium">Simple button</button>
  </span>
  <span>
    <button type="button" class="button button--ghost button-ghost--primary button--medium">Ghost button</button>
  </span>
</div>

<div>
  <pre v-highlightjs class="sg-sectionborder">
<code class="html">&lt;button type="button" class="button button--simple button--primary button--medium"&gt;Half-width button&lt;/button&gt;
&lt;button type="button" class="button button--ghost button-ghost--primary button--medium"&gt;Full-width button&lt;/button&gt;</code></pre>
</div>


  </div>
</template>

<script>
export default {
  name: 'buttons'
}
</script>

<style scoped lang="scss">
  @import 'static/sass/buttons.scss';
  @import 'static/sass/styleguide-buttons.scss';
</style>
