<template>
  <li class="tone list--none u-align--center sg-paddingtop--large sg-paddingbottom--large"
      :class="classObject" :style="{backgroundColor: hex}">
    <p class="sg-margin-bottom--none">{{text}}</p>
    <p class="sg-margin-bottom--none">{{hex}}</p>
  </li>
</template>

<script>
export default {
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
