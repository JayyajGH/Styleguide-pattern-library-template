<template>
  <li class="tone list--none u-align--center"
      :class="classObject" :style="{backgroundColor: hexCode}">
    <div class="tone__name sg-paddingleft--medium sg-paddingright--medium">
      <p class="sg-margin-bottom--none">{{colorName}}</p>
    </div>

    <div class="tone__hexcode">
      <p class="sg-margin-bottom--none">{{hexCode}}</p>
      <p class="sg-margin-bottom--none">{{converthextorgb}}</p>
    </div>
  </li>
</template>

<script>
import Colr from 'Colr';

export default {
  name: 'ColorSwatch',
  props: {
    colorName: String,
    hexCode: {
      type: String,
      required: true
    },
    isBase: {
      type: Boolean,
      default: false
    },
    isDarkColour: {
      type: Boolean,
      default: false
    },
    isLightColour: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classObject: function () {
      return {
        'sg-base-color': this.isBase,
        'light-text': this.isDarkColour,
        'light-border': this.isLightColour
      };
    },
    converthextorgb: function () {
      var colr = Colr.fromHex(this.hexCode);
      return 'rgb(' + colr.toRgbArray() + ')';
    }
  }
};
</script>

<style scoped lang="scss">
  @import 'static/sass/abstracts/_abstracts.scss';

  .tone {
    height: 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @include respond-to('medium and above') {
      width: 130px;
    }

    @include respond-to('large and above') {
        width: 100%;
    }

    &:hover {
      .tone__name {
        display: none;
      }
      .tone__hexcode {
        display: block;
        opacity: 1;
      }
    }
  }

  .tone__name {
    @include body-bold();
    margin-bottom: 0;
  }

  .tone__hexcode {
    display: none;
    margin-bottom: 0;
    font-size : 15px;
    font-weight: 400;
  }

  .sg-base-color {
    margin-bottom: 0;
    margin-right: 20px;

    @include respond-to('large and above') {
      margin-bottom: 20px;
      margin-right: 0;
    }
  }

  .light-text {
    color: color('white');
  }

  .light-border {
    border: 1px grey solid;
  }

</style>
