<template>
  <div id="borders" class="spa-page">
    <h1 class="header1">Borders</h1>

    <style-wrapper header="Border styles" description="Define a border style with border--solid">
      <div slot="exampleSlot" class="sg-flex">
        <border-example title="Solid" styling="border--solid border-width--medium border-color--black"></border-example>
        <border-example title="Dashed" styling="border--dashed border-width--medium border-color--black"></border-example>
        <border-example title="Dotted" styling="border--dotted border-width--medium border-color--black"></border-example>
      </div>

      <pre v-highlightjs slot="codeSlot" class="sg-sectionborder">
<code class="html">&lt;div class="border--solid border-width--medium border-color--black"&gt;Solid&lt;/div&gt;
&lt;div class="border--dashed border-width--medium border-color--black"&gt;Dashed&lt;/div&gt;
&lt;div class="border--dotted border-width--medium border-color--black"&gt;Dotted&lt;/div&gt;</code></pre>

    </style-wrapper>

    <style-wrapper header="Uniform border sizes" description="Define a border size with border-width--thin, border-width--medium or border-width--thick">
      <div slot="exampleSlot" class="sg-flex">
        <border-example title="Thin" styling="border--solid border-width--thin border-color--black"></border-example>
        <border-example title="Medium" styling="border--solid border-width--medium border-color--black"></border-example>
        <border-example title="Thick" styling="border--solid border-width--thick border-color--black"></border-example>
      </div>

      <pre v-highlightjs slot="codeSlot" class="sg-sectionborder">
<code class="html">&lt;div class="border-solid border-width--thin border-color--black"&gt;Thin&lt;/div&gt;
&lt;div class="border-solid border-width--medium border-color--black"&gt;Medium&lt;/div&gt;
&lt;div class="border-solid border-width--thick border-color--black"&gt;Thick&lt;/div&gt;</code></pre>
      </style-wrapper>

      <style-wrapper header="Unequal border sizes" description="Define a border size with bordertop-width--thin, bordertop-width--medium, bordertop-width--thick,
        borderbottom-width--thin, borderbottom-width--medium, borderbottom-width--thick
        borderleft-width--thin, borderleft-width--medium, borderleft-width--thick
        borderright-width--thin, borderright-width--medium, borderright-width--thick">
        <div slot="exampleSlot">
          <div class="sg-flex">
            <border-example title="Top thin" styling="border--solid bordertop-width--thin border-color--black"></border-example>
            <border-example title="Top medium" styling="border--solid bordertop-width--medium border-color--black"></border-example>
            <border-example title="Top thick" styling="border--solid bordertop-width--thick border-color--black"></border-example>
            <border-example title="Bottom thin" styling="border--solid borderbottom-width--thin border-color--black"></border-example>
            <border-example title="Bottom medium" styling="border--solid borderbottom-width--medium border-color--black"></border-example>
            <border-example title="Bottom thick" styling="border--solid borderbottom-width--thick border-color--black"></border-example>
          </div>
          <div class="sg-flex">
            <border-example title="Left thin" styling="border--solid borderleft-width--thin border-color--black"></border-example>
            <border-example title="Left medium" styling="border--solid borderleft-width--medium border-color--black"></border-example>
            <border-example title="Left thick" styling="border--solid borderleft-width--thick border-color--black"></border-example>
            <border-example title="Right thin" styling="border--solid borderright-width--thin border-color--black"></border-example>
            <border-example title="Right medium" styling="border--solid borderright-width--medium border-color--black"></border-example>
            <border-example title="Right thick" styling="border--solid borderright-width--thick border-color--black"></border-example>
          </div>
        </div>
        <pre v-highlightjs slot="codeSlot" class="sg-sectionborder">
<code class="html">&lt;div class="border--solid bordertop-width--thin border-color--black"&gt;Top thin&lt;/div&gt;
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
      </style-wrapper>

      <style-wrapper header="Border colour" description="Define a border colour with border-color--black or border-color--grey">
        <div slot="exampleSlot" class="sg-flex">
          <border-example title="Black" styling="border--solid border-width--medium border-color--black"></border-example>
          <border-example title="Grey" styling="border--solid border-width--medium border-color--grey"></border-example>
        </div>
        <pre v-highlightjs slot="codeSlot" class="sg-sectionborder">
<code class="html">&lt;div class="border--solid border-width--medium border-color--black"&gt;Black&lt;/div&gt;
&lt;div class="border--solid border-width--medium border-color--grey"&gt;Grey&lt;/div&gt;</code></pre>
      </style-wrapper>

      <style-wrapper header="Border radius" description="Define a border radius with border-radius--small, border-radius--medium, border-radius--large, border-radius--circle">
        <div slot="exampleSlot" class="sg-flex">
          <border-example title="Small border radius" styling="border--solid border-width--thin border-color--black border-radius--small"></border-example>
          <border-example title="Medium border radius" styling="border--solid border-width--thin border-color--black border-radius--medium"></border-example>
          <border-example title="Large border radius" styling="border--solid border-width--thin border-color--black border-radius--large"></border-example>
          <border-example title="Circle border radius" styling="border--solid border-width--thin border-color--black border-radius--circle"></border-example>
        </div>
        <pre v-highlightjs slot="codeSlot" class="sg-sectionborder">
<code class="html">&lt;div class="border-solid border-width--thin border-color--black border-radius--small"&gt;Small border radius&lt;/div&gt;
&lt;div class="border-solid border-width--thin border-color--black border-radius--medium"&gt;Medium border radius&lt;/div&gt;
&lt;div class="border-solid border-width--thin border-color--black border-radius--large"&gt;Large border radius&lt;/div&gt;
&lt;div class="border-solid border-width--thin border-color--black border-radius--circle"&gt;Circle border radius&lt;/div&gt;</code></pre>
      </style-wrapper>
  </div>
</template>

<script>
  import StyleWrapper from '@/components/stylewrapper'
  import BorderExample from '@/components/borderexample'

  export default {
    components: { StyleWrapper, BorderExample }
  }
</script>

<style lang="scss">
  @import 'static/sass/borders.scss';
</style>

<style scoped lang="scss">
</style>
