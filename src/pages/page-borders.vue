<template>
  <div id="borders" class="spa-page">

    <heading title="Borders"></heading>
    <!-- Border styles -->
    <style-wrapper :header=borderStyle.title :description=borderStyle.description>
      <div slot="exampleSlot" class="sg-flex--main-axis-spacearound sg-flex--cross-axis-center sg-flex-border sg-flex--wrap u-flex">
          <border-example v-for="bstyle in borderStyle.elements" :key=bstyle.content :title=bstyle.content :styling="[bstyle.style,borderStyle.commonClasses]"></border-example>
      </div>
      <div slot="codeSlot">
        <code-snippet>
          <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(borderStyle.elements, borderStyle.commonClasses)" class="sg-margin-bottom--none"></div>
        </code-snippet>
      </div>
    </style-wrapper>

    <!-- Uniform border sizes -->
    <style-wrapper :header=borderSize.title :description=borderSize.description>
      <div slot="exampleSlot" class="sg-flex--main-axis-spacearound sg-flex--cross-axis-center sg-flex-border sg-flex--wrap u-flex">
        <border-example v-for="bsize in borderSize.elements" :key=bsize.content :title=bsize.content :styling="[bsize.style, borderSize.commonClasses]"></border-example>
      </div>
      <div slot="codeSlot">
        <code-snippet>
          <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(borderSize.elements, borderSize.commonClasses)" class="sg-margin-bottom--none"></div>
        </code-snippet>
      </div>
    </style-wrapper>

    <!-- Unequal border sizes -->
    <style-wrapper :header=borderSizeUnequal.title :description=borderSizeUnequal.description>
      <div slot="exampleSlot" class="sg-flex--main-axis-spacearound sg-flex--cross-axis-center sg-flex-border sg-flex--wrap u-flex">
        <border-example v-for="bsizeueq in borderSizeUnequal.elements" :key=bsizeueq.content :title=bsizeueq.content :styling="[bsizeueq.style, borderSizeUnequal.commonClasses]"></border-example>
      </div>
      <div slot="codeSlot">
        <code-snippet>
          <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(borderSizeUnequal.elements, borderSizeUnequal.commonClasses)" class="sg-margin-bottom--none"></div>
        </code-snippet>
      </div>
    </style-wrapper>

    <!-- Border colour -->
    <style-wrapper :header=borderColour.title :description=borderColour.description>
      <div slot="exampleSlot" class="sg-flex--main-axis-spacearound sg-flex--cross-axis-center sg-flex-border sg-flex--wrap u-flex">
        <border-example v-for="bcolour in borderColour.elements" :key=bcolour.content :title=bcolour.content :styling="[bcolour.style, borderColour.commonClasses]"></border-example>
      </div>
      <div slot="codeSlot">
        <code-snippet>
          <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(borderColour.elements, borderColour.commonClasses)" class="sg-margin-bottom--none"></div>
        </code-snippet>
      </div>
    </style-wrapper>

    <!-- Border radius -->
    <style-wrapper :header=borderRadius.title :description=borderRadius.description>
      <div slot="exampleSlot" class="sg-flex--main-axis-spacearound sg-flex--cross-axis-center sg-flex-border sg-flex--wrap u-flex">
        <border-example v-for="bradius in borderRadius.elements" :key=bradius.content :title=bradius.content :styling="[bradius.style, borderRadius.commonClasses]"></border-example>
      </div>
      <div slot="codeSlot">
        <code-snippet>
          <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(borderRadius.elements, borderRadius.commonClasses)" class="sg-margin-bottom--none"></div>
        </code-snippet>
      </div>
    </style-wrapper>
  </div>
</template>

<script>
  import StyleWrapper from '@/components/style-wrapper/style-wrapper';
  import BorderExample from '@/components/borderexample';
  import Heading from '@/components/heading';
  import CodeSnippet from '@/components/codesnippet';
  import returnFormattedCodeString from '@/components/mixins/codestring';
  import ElementExample from '@/components/classes/elementexample';

  export default {
    components: { StyleWrapper, BorderExample, Heading, CodeSnippet },
    mixins: [returnFormattedCodeString],
    data: function () {
      return {
        borderStyle: {
          title: 'Border styles',
          description: 'Define the style of the border',
          commonClasses: 'border-width--medium border-color--black',
          elements: [
            new ElementExample('Solid', 'border--solid', 'div'),
            new ElementExample('Dashed', 'border--dashed', 'div'),
            new ElementExample('Dotted', 'border--dotted', 'div')
          ]
        },
        borderSize: {
          title: 'Uniform border sizes',
          description: 'Define the width of the border where the width required is the same on all sides',
          commonClasses: 'border--solid border-color--black',
          elements: [
            new ElementExample('Thin', 'border-width--thin', 'div'),
            new ElementExample('Medium', 'border-width--medium', 'div'),
            new ElementExample('Thick', 'border-width--thick', 'div')
          ]
        },
        borderSizeUnequal: {
          title: 'Unequal border sizes',
          description: 'Define the width of the border on individual sides',
          commonClasses: 'border--solid border-color--black',
          elements: [
            new ElementExample('Top Thin', 'bordertop-width--thin', 'div'),
            new ElementExample('Top Medium', 'bordertop-width--medium', 'div'),
            new ElementExample('Top Thick', 'bordertop-width--thick', 'div'),
            new ElementExample('Bottom Thin', 'borderbottom-width--thin', 'div'),
            new ElementExample('Bottom Medium', 'borderbottom-width--medium', 'div'),
            new ElementExample('Bottom Thick', 'borderbottom-width--thick', 'div'),
            new ElementExample('Left Thin', 'borderleft-width--thin', 'div'),
            new ElementExample('Left Medium', 'borderleft-width--medium', 'div'),
            new ElementExample('Left Thick', 'borderleft-width--thick', 'div'),
            new ElementExample('Right Thin', 'borderright-width--thin', 'div'),
            new ElementExample('Right Medium', 'borderright-width--medium', 'div'),
            new ElementExample('Right Thick', 'borderright-width--thick', 'div')
          ]
        },
        borderColour: {
          title: 'Border colour',
          description: 'Define the colour of the border',
          commonClasses: 'border--solid border-width--medium',
          elements: [
            new ElementExample('Black', 'border-color--black', 'div'),
            new ElementExample('Grey', 'border-color--grey', 'div')
          ]
        },
        borderRadius: {
          title: 'Border radius',
          description: 'Define the border radius of the border',
          commonClasses: 'border-solid border-width--thin border-color--black',
          elements: [
            new ElementExample('Small', 'border-radius--small', 'div'),
            new ElementExample('Medium', 'border-radius--medium', 'div'),
            new ElementExample('Large', 'border-radius--large', 'div'),
            new ElementExample('Circle', 'border-radius--circle', 'div')
          ]
        }
      };
    }
  };
</script>

<style scoped lang="scss">
  @import 'static/sass/abstracts/_abstracts.scss';

  .sg-flex--wrap {
    flex-wrap: wrap;
  }

  .sg-flex-border {
    flex-direction: column;

    @include respond-to('medium and above') {
      flex-direction: row;
    }
  }
</style>
