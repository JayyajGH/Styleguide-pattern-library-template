<template>
  <div id="logo" class="spa-page">
    <heading title="Logo"></heading>

    <h2 class="header2">General guidelines</h2>
    <ul class="list list--circle">
      <li>Only show logo in blue</li>
      <li>Don't alter, rotate or modify the logo</li>
      <li>Follow the clear space guidance</li>
      <li>The logo should always be a minimum size of ...</li>
    </ul>

    <h2 class="header2">Spacing guidelines</h2>
    <ul class="list list--circle">
      <li>Empty space around logo should be at least 150% of the width of the logo. Or maybe take a letter from the logo and use that.</li>
      <li>Do not make the logo smaller than 16px wide.</li>
    </ul>

    150%
    <div class="logo-border-outer">
      <span>100%</span>
      <span class="logo-border">
        <img src="/static/logo.png" class="sg-logo-space"/>
      </span>
    </div>

    <h2 class="header2">Logo dont's</h2>
    <ul class="list list--circle">
      <li>Don't change the colour of the logo</li>
      <li>Don't rotate the logo</li>
    </ul>
  </div>
</template>

<script>
  import Heading from '@/components/heading'

  export default {
    components: { Heading }
  }
</script>

<style lang="scss">
  @import 'static/sass/lists.scss';
</style>

<style scoped lang="scss">
  .logo-border-outer {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px dotted black;

    width: 300px;
    height: 300px;
  }

  .logo-border {
    display: inline-block;
    border: 1px dotted black;
  }

  .sg-logo-space {
    width: 200px;
  }
</style>
