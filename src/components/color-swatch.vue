<template>
  <li class="tone list--none u-align--center sg-paddingtop--large sg-paddingbottom--large"
      :class="classObject" :style="{backgroundColor: hex}">
    <div class="tone__name sg-paddingleft--medium sg-paddingright--medium">
      <p class="sg-margin-bottom--none">{{text}}</p>
    </div>

    <div class="tone__hexcode">
      <p class="sg-margin-bottom--none">{{hex}}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ColorSwatch',
  props: {
    text: String,
    hex: String,
    styling: String,
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
    }
  }
};
</script>

<style scoped lang="scss">
  @import 'static/sass/abstracts/_abstracts.scss';

  .tone {
    width: 250px;

    @include respond-to('medium and above') {
      width: 100px;
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
