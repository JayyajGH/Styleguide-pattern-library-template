<template>
  <div id="colours" class="spa-page">
    <heading title="Colours"></heading>

    <div class="color-palette">
      <ul class="palette">
        <color-swatch text="Black Base" hex="#000" styling="black" :isBase=true></color-swatch>
      </ul>
      <ul class="palette">
        <color-swatch text="White Base" hex="#FFF" styling="white" :isBase=true></color-swatch>
      </ul>
      <ul class="palette">
        <color-swatch text="Purple Base" hex="#60C" styling="purple" :isBase=true></color-swatch>
        <color-swatch text="Purple Light" hex="#D9B3FF" styling="purplelight"></color-swatch>
        <color-swatch text="Purple Dark" hex="#4D0099" styling="purpledark"></color-swatch>
      </ul>
      <ul class="palette">
        <color-swatch text="Grey Base" hex="#BFBFBF" styling="grey" :isBase=true></color-swatch>
        <color-swatch text="Grey X-Light" hex="#F2F2F2" styling="greyxlight"></color-swatch>
        <color-swatch text="Grey Light" hex="#D9D9D9" styling="greylight"></color-swatch>
        <color-swatch text="Grey Dark" hex="#8C8C8C" styling="greydark"></color-swatch>
        <color-swatch text="Grey Darker" hex="#666" styling="greydarker"></color-swatch>
      </ul>
      <ul class="palette">
        <color-swatch text="Green Base" hex="#0C4" styling="green" :isBase=true></color-swatch>
        <color-swatch text="Green Light" hex="#9FB" styling="greenlight"></color-swatch>
        <color-swatch text="Green Dark" hex="#062" styling="greendark"></color-swatch>
      </ul>
      <ul class="palette">
        <color-swatch text="Blue Base" hex="#00F" styling="blue" :isBase=true></color-swatch>
        <color-swatch text="Blue Light" hex="#D6D6FF" styling="bluelight"></color-swatch>
        <color-swatch text="Blue Dark" hex="#4C4C7F" styling="bluedark"></color-swatch>
      </ul>
    </div>
  </div>
</template>

<script>
  import Heading from '@/components/heading'
  import ColorSwatch from '@/components/colorswatch'

  export default {
    components: { Heading, ColorSwatch }
  }
</script>

<style scoped lang="scss">
  @import 'static/sass/abstracts/_abstracts.scss';

  .color-palette {
    display: flex;
    justify-content: center;
  }

  .palette {
    margin: 10px;
    width: 50px;
    flex: 0 0 120px;
  }
</style>
