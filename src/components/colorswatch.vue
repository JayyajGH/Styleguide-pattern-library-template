<template>
  <li class="tone list--none u-align--center sg-paddingtop--large sg-paddingbottom--large"
      :class="[{'sg-base-color': isBase}, styling]">
    <p class="sg-color-para">{{text}}</p>
    <p class="sg-color-para">{{hex}}</p>
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
    }
  }
}
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

  .sg-color-para {
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

  .black {
    background-color: color('black');
    color: color('white');
  }

  .white {
    background-color: color('white');
    border: 1px grey solid;
  }

  .purple {
    background-color: color('purple','base');
    color: color('white');
  }

  .purplelight {
    background-color: color('purple','light');
  }

  .purpledark {
    background-color: color('purple','dark');
    color: color('white');
  }

  .grey {
    background-color: color('grey','base');
  }

  .greyxlight {
    background-color: color('grey','x-light');
  }

  .greylight {
    background-color: color('grey','light');
  }

  .greydark {
    background-color: color('grey','dark');
    color: color('white');
  }

  .greydarker {
    background-color: color('grey','darker');
    color: color('white');
  }

  .green {
    background-color: color('green','base');
  }

  .greenlight {
    background-color: color('green','light');
  }

  .greendark {
    background-color: color('green','dark');
    color: color('white');
  }

  .blue {
    background-color: color('blue','base');
    color: color('white');
  }

  .bluelight {
    background-color: color('blue','light');
  }

  .bluedark {
    background-color: color('blue','dark');
    color: color('white');
  }
</style>
