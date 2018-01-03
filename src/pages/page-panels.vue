<template>
  <div id="borders" class="spa-page">

    <heading title="Panels"></heading>

    <style-wrapper header="Hero panels" description="These panels are used as the page hero.">
      <div slot="exampleSlot" class="sg-flex--main-axis-spacearound panel-flex u-flex">
        <div class="panel panel--hero u-flex u-full-width">
          <h1 class="header1 hero__title u-align--center sg-paddingleft--large sg-paddingright--large">Brevity is beautiful</h1>
          <div class="button-group">
            <button type="button" class="button button--ghost button-ghost--primary button--large hero__cta">Click to find out why</button>
          </div>
        </div>
      </div>
      <code-snippet slot="codeSlot">
        <div slot="codeSnippetSlot" v-html="heroPanelCodeSnippet" class="sg-margin-bottom--none"></div>
      </code-snippet>
    </style-wrapper>

    <style-wrapper header="Promotional panels" description="These panels are used to promote a product or feature.">
      <div slot="exampleSlot" class="sg-flex--main-axis-spacearound panel-flex u-flex">
        <div class="panel panel--promo u-flex u-full-width">
          <div class="panel__image sg-margin-bottom--none"></div>
          <div class="panel__text sg-margin-bottom--none">
            <h2 class="header2">Item #1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque nec sapien eget lobortis. Mauris ut tristique nulla, eu porta elit. Integer hendrerit orci et congue lobortis. Vestibulum commodo porttitor blandit.
            </p>
          </div>
        </div>

        <div class="panel panel--promo u-flex u-full-width">
          <div class="panel__image sg-margin-bottom--none"></div>
          <div class="panel__text sg-margin-bottom--none">
            <h2 class="header2">Item #2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque nec sapien eget lobortis. Mauris ut tristique nulla, eu porta elit. Integer hendrerit orci et congue lobortis. Vestibulum commodo porttitor blandit.
            </p>
          </div>
        </div>
      </div>

      <code-snippet slot="codeSlot">
        <div slot="codeSnippetSlot" v-html="promoPanelCodeSnippet" class="sg-margin-bottom--none"></div>
      </code-snippet>

    </style-wrapper>


  </div>
</template>

<script>
  import StyleWrapper from '@/components/style-wrapper';
  import Heading from '@/components/heading';
  import CodeSnippet from '@/components/codesnippet';

  export default {
    components: { StyleWrapper, Heading, CodeSnippet },
    computed: {
      heroPanelCodeSnippet: function () {
        return `&sol;&ast; This code is for demo purposes only.  These classes only exist for the purpose of demonstration &ast;&sol;
&lt;panel class="panel panel--hero"&gt;...&lt;/panel&gt;`;
      },
      promoPanelCodeSnippet: function () {
        return `&sol;&ast; This code is for demo purposes only.  These classes only exist for the purpose of demonstration &ast;&sol;
&lt;panel class="panel panel--promo"&gt;...&lt;/panel&gt;`;
      }
    }
  };
</script>

<style lang="scss">
</style>

<style scoped lang="scss">
  @import 'static/sass/abstracts/_abstracts.scss';

  /* These are demo panels created for the requirements of the styleguide */
  .panel {
  }

  .panel--hero {
    background-image: url("/static/images/hero.jpg");
    background-size: cover;
    height: 400px;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .hero__title {
    color: color('white');
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
    background-image: url("/static/images/panel1.jpg");
    background-size: cover;
    min-height: 200px;

    @include respond-to('large and above') {
        flex: 0 1 40%;
    }
  }

  .panel__text {
    flex: 1 1 100%;
    background-color: color('purple', 'light');
    padding: 10px;

    @include respond-to('large and above') {
        flex: 0 1 60%;
    }
  }
</style>
