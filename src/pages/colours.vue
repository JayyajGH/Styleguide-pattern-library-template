<template>
  <div id="colours" class="spa-page">
    <heading title="Colours"></heading>

    <div class="color-palette">
      <ul v-for="colour in colorList" class="palette">
        <color-swatch v-for="item in colour" :text=item.name :hex=item.hex :styling=item.styling :isBase=item.isBase :isDarkColour=item.isDarkColour :isLightColour=item.isLightColour :key=item.hex></color-swatch>
      </ul>
    </div>

  </div>
</template>

<script>
  import Heading from '@/components/heading';
  import ColorSwatch from '@/components/colorswatch';

  export default {
    components: { Heading, ColorSwatch },
    data: function () {
      return {
        colorList: [
          [
            {name: 'White Base', hex: '#FFF', isBase: true, isLightColour: true}
          ],
          [
            {name: 'Black Base', hex: '#000', isBase: true, isDarkColour: true}
          ],
          [
            {name: 'Purple Base', hex: '#60C', isBase: true, isDarkColour: true},
            {name: 'Purple Light', hex: '#D9B3FF'},
            {name: 'Purple Dark', hex: '#4D0099', isDarkColour: true}
          ],
          [
            {name: 'Grey Base', hex: '#BFBFBF', isBase: true},
            {name: 'Grey X-Light', hex: '#F2F2F2'},
            {name: 'Grey Light', hex: '#D9D9D9'},
            {name: 'Grey Dark', hex: '#8C8C8C', isDarkColour: true},
            {name: 'Grey Darker', hex: '#666', isDarkColour: true}
          ],
          [
            {name: 'Green Base', hex: '#0C4', isBase: true},
            {name: 'Green Light', hex: '#9FB'},
            {name: 'Green Dark', hex: '#062', isDarkColour: true}
          ],
          [
            {name: 'Blue Base', hex: '#00F', isBase: true, isDarkColour: true},
            {name: 'Blue Light', hex: '#D6D6FF'},
            {name: 'Blue Dark', hex: '#4C4C7F', isDarkColour: true}
          ]
        ]
      };
    }
  };
</script>

<style scoped lang="scss">
  @import 'static/sass/abstracts/_abstracts.scss';

  .color-palette {
    display: flex;
    flex-direction: column;
    align-items: center;

    @include respond-to('medium and above') {
      align-items: stretch;
    }

    @include respond-to('large and above') {
      flex-direction: row;
      justify-content: center;
    }
  }

  .palette {
    margin: 10px;
    display: flex;
    flex-direction: column;

    @include respond-to('medium and above') {
      flex-direction: row;
      flex: 0 0 120px;
    }

    @include respond-to('large and above') {
      display: block;
    }
  }
</style>
