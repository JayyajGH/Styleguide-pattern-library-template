<template>
  <div id="borders" class="spa-page">
    <h1 class="header1">Borders</h1>

    <h2 class="header2">Border styles</h2>
        <p>Define a border style with border--solid</p>

        <div class="sg-flex sg-sectionborder">
          <span class="sg-border">
            <div class="border--solid border-width--medium border-color--black sg-border__item">
              <p class="sg-border-para">Solid</p>
            </div>
          </span>
          <span class="sg-border">
            <div class="border--dashed border-width--medium border-color--black sg-border__item">
              <p class="sg-border-para">Dashed</p>
            </div>
          </span>
          <span class="sg-border">
            <div class="border--dotted border-width--medium border-color--black sg-border__item">
              <p class="sg-border-para">Dotted</p>
            </div>
          </span>
        </div>

        <div>
          <pre class="prettyprint">
    <code>&lt;div class="border--solid border-width--medium border-color--black"&gt;Solid&lt;/div&gt;
    &lt;div class="border--dashed border-width--medium border-color--black"&gt;Dashed&lt;/div&gt;
    &lt;div class="border--dotted border-width--medium border-color--black"&gt;Dotted&lt;/div&gt;</code></pre>
        </div>

        <h2 class="header2">Uniform border sizes</h2>
        <p>Define a border size with border-width--thin, border-width--medium or border-width--thick</p>

        <div class="sg-flex sg-sectionborder">
          <span class="sg-border">
            <div class="border--solid border-width--thin border-color--black sg-border__item">
              <p class="sg-border-para">Thin</p>
            </div>
          </span>
          <span  class="sg-border">
            <div class="border--solid border-width--medium border-color--black sg-border__item">
              <p class="sg-border-para">Medium</p>
            </div>
          </span>
          <span class="sg-border">
            <div class="border--solid border-width--thick border-color--black sg-border__item">
              <p class="sg-border-para">Thick</p>
            </div>
          </span>
        </div>

        <div>
          <pre class="prettyprint">
    <code>&lt;div class="border-solid border-width--thin border-color--black"&gt;Thin&lt;/div&gt;
    &lt;div class="border-solid border-width--medium border-color--black"&gt;Medium&lt;/div&gt;
    &lt;div class="border-solid border-width--thick border-color--black"&gt;Thick&lt;/div&gt;</code></pre>
        </div>

        <h2 class="header2">Unequal border sizes</h2>
        <p>Define a border size with bordertop-width--thin, bordertop-width--medium, bordertop-width--thick,
          borderbottom-width--thin, borderbottom-width--medium, borderbottom-width--thick
          borderleft-width--thin, borderleft-width--medium, borderleft-width--thick
          borderright-width--thin, borderright-width--medium, borderright-width--thick</p>

        <div class="sg-flex sg-sectionborder">
          <span class="sg-border">
            <div class="border--solid bordertop-width--thin border-color--black sg-border__item">
              <p class="sg-border-para">Top thin</p>
            </div>
          </span>
          <span class="sg-border">
            <div class="border--solid bordertop-width--medium border-color--black sg-border__item">
              <p class="sg-border-para">Top medium</p>
            </div>
          </span>
          <span class="sg-border">
            <div class="border--solid bordertop-width--thick border-color--black sg-border__item">
              <p class="sg-border-para">Top thick</p>
            </div>
          </span>
          <span class="sg-border">
            <div class="border--solid borderbottom-width--thin border-color--black sg-border__item">
              <p class="sg-border-para">Bottom thin</p>
            </div>
          </span>
          <span class="sg-border">
            <div class="border--solid borderbottom-width--medium border-color--black sg-border__item">
              <p class="sg-border-para">Bottom medium</p>
            </div>
          </span>
          <span class="sg-border">
            <div class="border--solid borderbottom-width--thick border-color--black sg-border__item">
              <p class="sg-border-para">Bottom thick</p>
            </div>
          </span>
        </div>

        <div class="sg-flex sg-sectionborder">
          <span class="sg-border">
            <div class="border--solid borderleft-width--thin border-color--black sg-border__item">
              <p class="sg-border-para">Left thin</p>
            </div>
          </span>
          <span class="sg-border">
            <div class="border--solid borderleft-width--medium border-color--black sg-border__item">
              <p class="sg-border-para">Left medium</p>
            </div>
          </span>
          <span class="sg-border">
            <div class="border--solid borderleft-width--thick border-color--black sg-border__item">
              <p class="sg-border-para">Left thick</p>
            </div>
          </span>
          <span class="sg-border">
            <div class="border--solid borderright-width--thin border-color--black sg-border__item">
              <p class="sg-border-para">Right thin</p>
            </div>
          </span>
          <span class="sg-border">
            <div class="border--solid borderright-width--medium border-color--black sg-border__item">
              <p class="sg-border-para">Right medium</p>
            </div>
          </span>
          <span class="sg-border">
            <div class="border--solid borderright-width--thick border-color--black sg-border__item">
              <p class="sg-border-para">Right thick</p>
            </div>
          </span>
        </div>

        <div>
          <pre class="prettyprint">
    <code>&lt;div class="border--solid bordertop-width--thin border-color--black"&gt;Top thin&lt;/div&gt;
    &lt;div class="border--solid bordertop-width--medium border-color--black"&gt;Top medium&lt;/div&gt;
    &lt;div class="border--solid bordertop-width--thick border-color--black"&gt;Top thick&lt;/div&gt;
    &lt;div class="border--solid borderbottom-width--thin border-color--black"&gt;Bottom thin&lt;/div&gt;
    &lt;div class="border--solid borderbottom-width--medium border-color--black"&gt;Bottom medium&lt;/div&gt;
    &lt;div class="border--solid borderbottom-width--thick border-color--black"&gt;Bottom thick&lt;/div&gt;
    &lt;div class="border--solid borderleft-width--thin border-color--black"&gt;Left thin&lt;/div&gt;
    &lt;div class="border--solid borderleft-width--medium border-color--black"&gt;Left medium&lt;/div&gt;
    &lt;div class="border--solid borderleft-width--thick border-color--black"&gt;Left thick&lt;/div&gt;
    &lt;div class="border--solid borderright-width--thin border-color--black"&gt;Right thin&lt;/div&gt;
    &lt;div class="border--solid borderright-width--medium border-color--black"&gt;Right medium&lt;/div&gt;
    &lt;div class="border--solid borderright-width--thick border-color--black"&gt;Right thick&lt;/div&gt;</code></pre>
        </div>

        <h2 class="header2">Border colour</h2>
        <p>Define a border colour with border-color--black or border-color--grey</p>

        <div class="sg-flex sg-sectionborder">
          <span class="sg-border">
            <div class="border--solid border-width--medium border-color--black sg-border__item">
              <p class="sg-border-para">Black</p>
            </div>
          </span>
          <span class="sg-border">
            <div class="border--solid border-width--medium border-color--grey sg-border__item">
              <p class="sg-border-para">Grey</p>
            </div>
          </span>
        </div>

        <div>
          <pre class="prettyprint">
    <code>&lt;div class="border--solid border-width--medium border-color--black"&gt;Black&lt;/div&gt;
    &lt;div class="border--solid border-width--medium border-color--grey"&gt;Grey&lt;/div&gt;</code></pre>
        </div>


        <h2 class="header2">Border radius</h2>
        <p>Define a border radius with border-radius--small, border-radius--medium, border-radius--large, border-radius--circle</p>

        <div class="sg-flex sg-sectionborder">
          <span class="sg-border">
            <div class="border--solid border-width--thin border-color--black border-radius--small sg-border__item">
              <p class="sg-border-para">Small border radius</p>
            </div>
          </span>
          <span class="sg-border">
            <div class="border--solid border-width--thin border-color--black border-radius--medium sg-border__item">
              <p class="sg-border-para">Medium border radius</p>
            </div>
          </span>
          <span class="sg-border">
            <div class="border--solid border-width--thin border-color--black border-radius--large sg-border__item">
              <p class="sg-border-para">Large border radius</p>
            </div>
          </span>
          <span class="sg-border">
            <div class="border--solid border-width--thin border-color--black border-radius--circle sg-border__item">
              <p class="sg-border-para">Circle border radius</p>
            </div>
          </span>
        </div>

        <div>
          <pre class="prettyprint">
    <code>&lt;div class="border-solid border-width--thin border-color--black border-radius--small"&gt;Small border radius&lt;/div&gt;
    &lt;div class="border-solid border-width--thin border-color--black border-radius--medium"&gt;Medium border radius&lt;/div&gt;
    &lt;div class="border-solid border-width--thin border-color--black border-radius--large"&gt;Large border radius&lt;/div&gt;
    &lt;div class="border-solid border-width--thin border-color--black border-radius--circle"&gt;Circle border radius&lt;/div&gt;</code></pre>
        </div>
  </div>
</template>

<script>
export default {
  name: 'borders'
}
</script>

<style scoped lang="scss">
  @import 'static/sass/borders.scss';
  @import 'static/sass/styleguide-borders.scss';
</style>
