<template>
  <div id="logo" class="spa-page">
    <stroked-heading title="Logo"></stroked-heading>

    <section>
      <header>
        <h2 class="header2">General guidelines</h2>
      </header>
      <ul class="list list--circle">
        <li>Only show logo in blue</li>
        <li>Don't alter, rotate or modify the logo</li>
        <li>Follow the clear space guidance</li>
        <li>The logo should always be a minimum size of ...</li>
      </ul>
    </section>

    <section>
      <header>
        <h2 class="header2">Spacing guidelines</h2>
      </header>
      <ul class="list list--circle">
        <li>Empty space around logo should be at least 150% of the width of the logo. Or maybe take a letter from the logo and use that.</li>
        <li>Do not make the logo smaller than 16px wide.</li>
      </ul>
    </section>

    150%
    <div class="logo-border-outer u-flex">
      <span>100%</span>
      <span class="logo-border u-inline-block">
        <img src="/static/images/logo.png" class="sg-logo-space"/>
      </span>
    </div>

    <section>
      <header>
        <h2 class="header2">Logo dont's</h2>
      </header>
      <ul class="list list--circle">
        <li>Don't change the colour of the logo</li>
        <li>Don't rotate the logo</li>
      </ul>
    </section>

    <section>
      <header>
        <h2 class="header2">Lockups</h2>
        <ul class="list list--circle">
          <li>What are the rules?</li>
        </ul>
      </header>
    </section>

  </div>
</template>

<script>
  import StrokedHeading from '@/components/stroked-heading/stroked-heading';

  export default {
    name: 'PageLogo',
    components: { StrokedHeading }
  };
</script>

<style lang="scss">
</style>

<style scoped lang="scss">
  .logo-border-outer {
    justify-content: center;
    align-items: center;
    border: 1px dotted black;
    width: 300px;
    height: 300px;
  }

  .logo-border {
    border: 1px dotted black;
  }

  .sg-logo-space {
    width: 200px;
  }
</style>
