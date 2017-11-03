<template>
  <div id="borders" class="spa-page">

    <heading title="Borders"></heading>

    <style-wrapper header="Border styles" description="Define a border style with border--solid">
      <div slot="exampleSlot" class="sg-flex">
          <border-example v-for="bstyle in borderStyle" :key=bstyle.name :title=bstyle.name :styling="[bstyle.style,'border-width--medium border-color--black']"></border-example>
      </div>

      <pre v-highlightjs slot="codeSlot" class="sg-sectionborder sg-code">
<code class="html">&lt;div class="border--solid border-width--medium border-color--black"&gt;Solid&lt;/div&gt;
&lt;div class="border--dashed border-width--medium border-color--black"&gt;Dashed&lt;/div&gt;
&lt;div class="border--dotted border-width--medium border-color--black"&gt;Dotted&lt;/div&gt;</code></pre>

    </style-wrapper>

    <style-wrapper header="Uniform border sizes" description="Define a border size with border-width--thin, border-width--medium or border-width--thick">
      <div slot="exampleSlot" class="sg-flex">
        <border-example v-for="bsize in borderSize" :key=bsize.name :title=bsize.name :styling="[bsize.style,'border--solid border-color--black']"></border-example>
      </div>

      <pre v-highlightjs slot="codeSlot" class="sg-sectionborder sg-code">
<code class="html">&lt;div class="border-solid border-width--thin border-color--black"&gt;Thin&lt;/div&gt;
&lt;div class="border-solid border-width--medium border-color--black"&gt;Medium&lt;/div&gt;
&lt;div class="border-solid border-width--thick border-color--black"&gt;Thick&lt;/div&gt;</code></pre>
      </style-wrapper>

      <style-wrapper header="Unequal border sizes" description="Define a border size with bordertop-width--thin, bordertop-width--medium, bordertop-width--thick,
        borderbottom-width--thin, borderbottom-width--medium, borderbottom-width--thick
        borderleft-width--thin, borderleft-width--medium, borderleft-width--thick
        borderright-width--thin, borderright-width--medium, borderright-width--thick">
        <div slot="exampleSlot">
          <div class="sg-flex sg-flex-border">
            <border-example v-for="bsizeueq in borderSizeUnequal" :key=bsizeueq.name :title=bsizeueq.name :styling="[bsizeueq.style,'border--solid border-color--black']"></border-example>
          </div>
          <div class="sg-flex">
            <border-example v-for="bsizeueq in borderSizeUnequal2" :key=bsizeueq.name :title=bsizeueq.name :styling="[bsizeueq.style,'border--solid border-color--black']"></border-example>
          </div>
        </div>
        <pre v-highlightjs slot="codeSlot" class="sg-sectionborder sg-code">
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
          <border-example v-for="bcolour in borderColour" :key=bcolour.name :title=bcolour.name :styling="[bcolour.style,'border--solid border-width--medium']"></border-example>
        </div>
        <pre v-highlightjs slot="codeSlot" class="sg-sectionborder sg-code">
<code class="html">&lt;div class="border--solid border-width--medium border-color--black"&gt;Black&lt;/div&gt;
&lt;div class="border--solid border-width--medium border-color--grey"&gt;Grey&lt;/div&gt;</code></pre>
      </style-wrapper>

      <style-wrapper header="Border radius" description="Define a border radius with border-radius--small, border-radius--medium, border-radius--large, border-radius--circle">
        <div slot="exampleSlot" class="sg-flex">
          <border-example v-for="bradius in borderRadius" :key=bradius.name :title=bradius.name :styling="[bradius.style,'border--solid border-width--thin border-color--black']"></border-example>
        </div>
        <pre v-highlightjs slot="codeSlot" class="sg-sectionborder sg-code">
<code class="html">&lt;div class="border-solid border-width--thin border-color--black border-radius--small"&gt;Small border radius&lt;/div&gt;
&lt;div class="border-solid border-width--thin border-color--black border-radius--medium"&gt;Medium border radius&lt;/div&gt;
&lt;div class="border-solid border-width--thin border-color--black border-radius--large"&gt;Large border radius&lt;/div&gt;
&lt;div class="border-solid border-width--thin border-color--black border-radius--circle"&gt;Circle border radius&lt;/div&gt;</code></pre>
      </style-wrapper>
  </div>
</template>

<script>
  import StyleWrapper from '@/components/stylewrapper';
  import BorderExample from '@/components/borderexample';
  import Heading from '@/components/heading';

  export default {
    components: { StyleWrapper, BorderExample, Heading },
    data: function () {
      return {
        borderStyle: [
          {name: 'Solid', style: 'border--solid'},
          {name: 'Dashed', style: 'border--dashed'},
          {name: 'Dotted', style: 'border--dotted'}
        ],
        borderSize: [
          {name: 'Thin', style: 'border-width--thin'},
          {name: 'Medium', style: 'border-width--medium'},
          {name: 'Thick', style: 'border-width--thick'}
        ],
        borderSizeUnequal: [
          {name: 'Top Thin', style: 'bordertop-width--thin'},
          {name: 'Top Medium', style: 'bordertop-width--medium'},
          {name: 'Top Thick', style: 'bordertop-width--thick'},
          {name: 'Bottom Thin', style: 'borderbottom-width--thin'},
          {name: 'Bottom Medium', style: 'borderbottom-width--medium'},
          {name: 'Bottom Thick', style: 'borderbottom-width--thick'}
        ],
        borderSizeUnequal2: [
          {name: 'Left Thin', style: 'borderleft-width--thin'},
          {name: 'Left Medium', style: 'borderleft-width--medium'},
          {name: 'Left Thick', style: 'borderleft-width--thick'},
          {name: 'Right Thin', style: 'borderright-width--thin'},
          {name: 'Right Medium', style: 'borderright-width--medium'},
          {name: 'Right Thick', style: 'borderright-width--thick'}
        ],
        borderColour: [
          {name: 'Black', style: 'border-color--black'},
          {name: 'Grey', style: 'border-color--grey'}
        ],
        borderRadius: [
          {name: 'Small', style: 'border-radius--small'},
          {name: 'Medium', style: 'border-radius--medium'},
          {name: 'Large', style: 'border-radius--large'},
          {name: 'Circle', style: 'border-radius--circle'}
        ]
      };
    }
  };
</script>

<style lang="scss">
  @import 'static/sass/borders.scss';
</style>

<style scoped lang="scss">
  .sg-flex-border {
    flex-wrap: wrap;
  }
</style>
