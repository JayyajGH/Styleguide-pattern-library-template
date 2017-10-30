<template>
  <div id="borders" class="spa-page">

    <heading title="Panels"></heading>

    <style-wrapper header="Hero panels" description="These panels are used as the page hero.">
      <div slot="exampleSlot" class="sg-flex panel-flex">
        <div class="panel panel--hero">
          <h1 class="header1 hero__title">Brevity is beautiful</h1>
          <div class="button-group">
            <button type="button" class="button button--ghost button-ghost--primary button--large hero__cta">Click to find out why</button>
          </div>
        </div>
      </div>

      <pre v-highlightjs slot="codeSlot" class="sg-sectionborder sg-code">
      <code class="html">&sol;&ast; This code is for demo purposes only.  These classes only exist for the purpose of demonstration &ast;&sol;
&lt;panel class="panel panel--hero"&gt;...&lt;/panel&gt;</code></pre>

    </style-wrapper>

    <style-wrapper header="Promotional panels" description="These panels are used to promote a product or feature.">
      <div slot="exampleSlot" class="sg-flex panel-flex">
        <div class="panel panel--promo">
          <div class="panel__image"></div>
          <div class="panel__text">
            <h2 class="header2">Item #1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque nec sapien eget lobortis. Mauris ut tristique nulla, eu porta elit. Integer hendrerit orci et congue lobortis. Vestibulum commodo porttitor blandit.
            </p>
          </div>
        </div>

        <div class="panel panel--promo">
          <div class="panel__image"></div>
          <div class="panel__text">
            <h2 class="header2">Item #2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque nec sapien eget lobortis. Mauris ut tristique nulla, eu porta elit. Integer hendrerit orci et congue lobortis. Vestibulum commodo porttitor blandit.
            </p>
          </div>
        </div>

      </div>

      <pre v-highlightjs slot="codeSlot" class="sg-sectionborder sg-code">
      <code class="html">&sol;&ast; This code is for demo purposes only.  These classes only exist for the purpose of demonstration &ast;&sol;
&lt;panel class="panel panel--promo"&gt;...&lt;/panel&gt;</code></pre>

    </style-wrapper>


  </div>
</template>

<script>
  import StyleWrapper from '@/components/stylewrapper';
  import Heading from '@/components/heading';

  export default {
    components: { StyleWrapper, Heading }
  };
</script>

<style lang="scss">
  @import 'static/sass/buttons.scss';
</style>

<style scoped lang="scss">
  @import 'static/sass/abstracts/_abstracts.scss';

  /* These are demo panels created for the requirements of the styleguide */
  .panel {
    display: flex;
    width: 100%;
  }

  .panel--hero {
    background-image: url("/static/hero.jpg");
    background-size: cover;
    height: 400px;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .hero__title {
    color: color('white');
    text-align: center;
    padding: 15px;
  }

  .hero_cta {
    align-self: flex-end;
  }

  /* Overide some of the button styles for the purpose of the styleguide */
  .button-ghost--primary {
    border-color: color('grey', 'x-light');
    color: color('white');

    &:hover {
      background-color: color('grey', 'x-light');
      color: color('black');
    }
  }

  .panel--promo {
    flex-wrap: wrap;

    @include respond-to('large and above') {
        flex: 1;
        padding-left: 10px;
        padding-right: 10px;
    }
  }

  .panel-flex {
      flex-wrap: wrap;
  }

  .panel__image {
    flex: 1 1 100%;
    background-image: url("/static/panel1.jpg");
    background-size: cover;
    margin-bottom: 0;
    min-height: 200px;

    @include respond-to('large and above') {
        flex: 0 1 40%;
    }
  }

  .panel__text {
    flex: 1 1 100%;
    background-color: color('purple', 'light');
    padding: 10px;
    margin-bottom: 0;

    @include respond-to('large and above') {
        flex: 0 1 60%;
    }
  }
</style>
