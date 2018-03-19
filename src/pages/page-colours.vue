<template>
  <div id="colours" class="spa-page">
    <stroked-heading title="Colours"></stroked-heading>

    <table>
      <tr>
        <th class="color-format__item color-format__header">Hex</th>
        <th class="color-format__item color-format__header">RGB</th>
        <th class="color-format__item color-format__header">HSL</th>
      </tr>
      <tr>
        <td class="color-format__item">{{hexcode}}</td>
        <td class="color-format__item">{{rgbcode}}</td>
        <td class="color-format__item">{{hslcode}}</td>
      </tr>
    </table>

    <section class="palette__container u-flex">
      <ul v-for="colour in colorList" class="palette sg-margin--medium">
        <color-swatch @mouseover.native="showme(item.hex)"  v-for="item in colour" :color-name=item.name :hex-code=item.hex :is-base=item.isBase :is-dark-colour=item.isDarkColour :is-light-colour=item.isLightColour :key=item.hex></color-swatch>
      </ul>
    </section>

  </div>
</template>

<script>
  import Colr from 'Colr';
  import StrokedHeading from '@/components/stroked-heading/stroked-heading';
  import ColorSwatch from '@/components/color-swatch/color-swatch';

  export default {
    name: 'PageColours',
    components: { StrokedHeading, ColorSwatch },
    data: function () {
      var cde = '#FFF';
      return {
        cde,
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
    },
    computed: {
      hexcode: function () {
        return this.cde;
      },
      rgbcode: function () {
        var colr = Colr.fromHex(this.cde);
        return 'rgb(' + colr.toRgbArray() + ')';
      },
      hslcode: function () {
        var colr = Colr.fromHex(this.cde);
        return 'hsl(' + colr.toHslArray() + ')';
      }
    },
    methods: {
      showme: function (hex) {
        this.cde = hex;
      }
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

 .color-format__header {
   background-color: color('grey', 'light')
 }

 .color-format__item {
     border: 1px solid black;
     padding: 5px;
     width: 150px;
   }
</style>
