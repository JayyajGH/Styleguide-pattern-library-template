<template>
  <div id="logo" class="spa-page">
    <h1 class="header1">Logo</h1>
    <p>Add an example logo with colour options and any guard space around it.  Grab idea from EIS brand guidelines and twitter guidelines.</p>

    <h2 class="header2">General guidelines</h2>
    <ul>
      <li>Only show logo in blue</li>
      <li>Don't alter, rotate or modify the logo</li>
      <li>Follow the clear space guidance</li>
    </ul>

    <h2 class="header2">Spacing guidelines</h2>
    <ul>
    <li>Empty space around logo should be at least 150% of the width of the logo.</li>
    <li>Do not make the logo smaller than 16px wide.</li>
    </ul>

    150%
    <span class="logo-border-outer">
      <span>100%</span>
      <span class="logo-border">
        <img src="/static/logo.png" class="sg-logo-space"/>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'logo'
}
</script>

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
