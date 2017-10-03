<template>
  <div id="links" class="spa-page">
    <h1 class="header1">Links</h1>

    <p>Define a link style with link--regular, link--subtle, link--dark or link--phone</p>

    <div class="sg-flex sg-sectionborder">
      <span>
        <a href="#" class="link link--regular">Regular</a>
      </span>

      <span>
        <a href="#" class="link link--subtle">Subtle</a>
      </span>

      <span>
        <a href="#" class="link link--dark">Dark</a>
      </span>

      <span>
        <a href="tel: 0800 111111" class="link link--phone">0800 111111</a>
      </span>
    </div>

    <div>
      <pre class="prettyprint">
<code>&lt;a href="#" class="link link--regular"&gt;Regular&lt;/a&gt;
&lt;a href="#" class="link link--subtle"&gt;Subtle&lt;/a&gt;
&lt;a href="#" class="link link--dark"&gt;Dark&lt;/a&gt;
&lt;a href="tel: 0800 111111" class="link link--phone"&gt;0800 111111&lt;/a&gt;</code></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'links'
}
</script>

<style scoped lang="scss">
  @import 'static/sass/links.scss';
</style>
