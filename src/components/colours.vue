<template>
  <div id="colours" class="spa-page">
    <heading title="Colours"></heading>

    <div class="color-palette">
      <ul class="palette">
        <li class="tone black">
          <p class="sg-color-para">Black Base</p>
          <p class="sg-color-para">#000</p>
        </li>
      </ul>
      <ul class="palette">
        <li class="tone white">
          <p class="sg-color-para">White Base</p>
          <p class="sg-color-para">#FFF</p>
        </li>
      </ul>
      <ul class="palette">
        <li class="tone purple sg-base-color">
          <p class="sg-color-para">Purple Base</p>
          <p class="sg-color-para">#60C</p>
        </li>
        <li class="tone purplelight">
          <p class="sg-color-para">Purple Light</p>
          <p class="sg-color-para">#D9B3FF</p>
        </li>
        <li class="tone purpledark">
          <p class="sg-color-para">Purple Dark</p>
          <p class="sg-color-para">#4D0099</p>
        </li>
      </ul>
      <ul class="palette">
        <li class="tone grey sg-base-color">
          <p class="sg-color-para">Grey Base</p>
          <p class="sg-color-para">#60C</p>
        </li>
        <li class="tone greyxlight">
          <p class="sg-color-para">Grey X-Light</p>
          <p class="sg-color-para">#D9B3FF</p>
        </li>
        <li class="tone greylight">
          <p class="sg-color-para">Grey Light</p>
          <p class="sg-color-para">#D9B3FF</p>
        </li>
        <li class="tone greydark">
          <p class="sg-color-para">Grey Dark</p>
          <p class="sg-color-para">#4D0099</p>
        </li>
        <li class="tone greydarker">
          <p class="sg-color-para">Grey Darker</p>
          <p class="sg-color-para">#4D0099</p>
        </li>
      </ul>
      <ul class="palette">
        <li class="tone green sg-base-color">
          <p class="sg-color-para">Green Base</p>
          <p class="sg-color-para">#60C</p>
        </li>
        <li class="tone greenlight">
          <p class="sg-color-para">Green Light</p>
          <p class="sg-color-para">#D9B3FF</p>
        </li>
        <li class="tone greendark">
          <p class="sg-color-para">Green Dark</p>
          <p class="sg-color-para">#4D0099</p>
        </li>
      </ul>
      <ul class="palette">
        <li class="tone blue sg-base-color">
          <p class="sg-color-para">Blue Base</p>
          <p class="sg-color-para">#00F</p>
        </li>
        <li class="tone bluelight">
          <p class="sg-color-para">Blue Light</p>
          <p class="sg-color-para">#D6D6FF</p>
        </li>
        <li class="tone bluedark">
          <p class="sg-color-para">Blue Dark</p>
          <p class="sg-color-para">#4C4C7F</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Heading from '@/components/heading'

  export default {
    components: { Heading }
  }
</script>

<style scoped lang="scss">
  @import 'static/sass/styleguide-color.scss';
</style>
