<template>
  <div id="colours" class="spa-page">
    <stroked-heading title="Colours"></stroked-heading>

    <section class="palette__container u-flex">
      <ul v-for="colour in colorList" class="palette sg-margin--medium">
        <color-swatch v-for="item in colour" :color-name=item.name :hex-code=item.hex :is-base=item.isBase :is-dark-colour=item.isDarkColour :is-light-colour=item.isLightColour :key=item.hex></color-swatch>
      </ul>
    </section>

  </div>
</template>

<script>
  import StrokedHeading from '@/components/stroked-heading/stroked-heading';
  import ColorSwatch from '@/components/color-swatch/color-swatch';

  export default {
    name: 'PageColours',
    components: { StrokedHeading, ColorSwatch },
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

  .palette__container {
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
    display: flex;
    flex-direction: column;

    @include respond-to('medium and above') {
      flex-direction: row;
      flex: 0 0 135px;
    }

    @include respond-to('large and above') {
      display: block;
    }
  }
</style>
