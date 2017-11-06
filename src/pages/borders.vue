<template>
  <div id="borders" class="spa-page">

    <heading title="Borders"></heading>

    <!-- Border styles -->
    <style-wrapper header="Border styles" description="Define the style of the border">
      <div slot="exampleSlot" class="sg-flex sg-flex--wrap u-flex">
          <border-example v-for="bstyle in borderStyle" :key=bstyle.name :title=bstyle.name :styling="[bstyle.style,'border-width--medium border-color--black']"></border-example>
      </div>
      <pre v-highlightjs slot="codeSlot" class="sg-sectionborder sg-code__section">
        <code class="html"><div v-html="returnFormattedCodeString(borderStyle, 'border--solid border-color--black')" class="sg-code"></div></code>
      </pre>
    </style-wrapper>

    <!-- Uniform border sizes -->
    <style-wrapper header="Uniform border sizes" description="Define the width of the border where the width required is the same on all sides">
      <div slot="exampleSlot" class="sg-flex sg-flex--wrap u-flex">
        <border-example v-for="bsize in borderSize" :key=bsize.name :title=bsize.name :styling="[bsize.style,'border--solid border-color--black']"></border-example>
      </div>
      <pre v-highlightjs slot="codeSlot" class="sg-sectionborder sg-code__section">
        <code class="html"><div v-html="returnFormattedCodeString(borderSize, 'border--solid border-color--black')" class="sg-code"></div></code>
      </pre>
      </style-wrapper>

      <!-- Unequal border sizes -->
      <style-wrapper header="Unequal border sizes" description="Define the width of the border on individual sides">
        <div slot="exampleSlot" class="sg-flex sg-flex--wrap u-flex">
          <border-example v-for="bsizeueq in borderSizeUnequal" :key=bsizeueq.name :title=bsizeueq.name :styling="[bsizeueq.style,'border--solid border-color--black']"></border-example>
        </div>
        <pre v-highlightjs slot="codeSlot" class="sg-sectionborder sg-code__section">
          <code class="html"><div v-html="returnFormattedCodeString(borderSizeUnequal, 'border--solid border-color--black')" class="sg-code"></div></code>
        </pre>
      </style-wrapper>

      <!-- Border colour -->
      <style-wrapper header="Border colour" description="Define the colour of the border">
        <div slot="exampleSlot" class="sg-flex sg-flex--wrap u-flex">
          <border-example v-for="bcolour in borderColour" :key=bcolour.name :title=bcolour.name :styling="[bcolour.style,'border--solid border-width--medium']"></border-example>
        </div>
        <pre v-highlightjs slot="codeSlot" class="sg-sectionborder sg-code__section">
          <code class="html"><div v-html="returnFormattedCodeString(borderColour, 'border--solid border-width--medium')" class="sg-code"></div></code>
        </pre>
      </style-wrapper>

      <!-- Border radius -->
      <style-wrapper header="Border radius" description="Define the border radius of the border">
        <div slot="exampleSlot" class="sg-flex sg-flex--wrap u-flex">
          <border-example v-for="bradius in borderRadius" :key=bradius.name :title=bradius.name :styling="[bradius.style,'border--solid border-width--thin border-color--black']"></border-example>
        </div>
        <pre v-highlightjs slot="codeSlot" class="sg-sectionborder sg-code__section">
          <code class="html"><div v-html="returnFormattedCodeString(borderRadius, 'border-solid border-width--thin border-color--black')" class="sg-code"></div></code>
        </pre>
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
          {name: 'Bottom Thick', style: 'borderbottom-width--thick'},
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
    },
    methods: {
      returnFormattedCodeString: function (styleList, additionalClasses) {
        let templateString = ``;

        if (styleList) {
          styleList.forEach(function (value) {
            templateString += `&lt;div class="${value.style} ${additionalClasses}"&gt;${value.name}&lt;/div&gt;\n`;
          });
        }

        return templateString;
      }
    }
  };
</script>

<style lang="scss">
  @import 'static/sass/borders.scss';
</style>

<style scoped lang="scss">
</style>
