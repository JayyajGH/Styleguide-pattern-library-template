<template>
  <div id="borders" class="spa-page">

    <heading title="Borders"></heading>
    <!-- Border styles -->
    <style-wrapper header="Border styles" description="Define the style of the border">
      <div slot="exampleSlot" class="sg-flex--main-axis-spacearound sg-flex--cross-axis-center sg-flex-border u-flex">
          <border-example v-for="bstyle in borderStyle" :key=bstyle.content :title=bstyle.content :styling="[bstyle.style,'border-width--medium border-color--black']"></border-example>
      </div>
      <div slot="codeSlot">
        <code-snippet>
          <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(borderStyle, 'border-width--medium border-color--black')" class="sg-margin-bottom--none"></div>
        </code-snippet>
      </div>
    </style-wrapper>

    <!-- Uniform border sizes -->
    <style-wrapper header="Uniform border sizes" description="Define the width of the border where the width required is the same on all sides">
      <div slot="exampleSlot" class="sg-flex--main-axis-spacearound sg-flex--cross-axis-center sg-flex-border u-flex">
        <border-example v-for="bsize in borderSize" :key=bsize.content :title=bsize.content :styling="[bsize.style,'border--solid border-color--black']"></border-example>
      </div>
      <div slot="codeSlot">
        <code-snippet>
          <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(borderSize, 'border--solid border-color--black')" class="sg-margin-bottom--none"></div>
        </code-snippet>
      </div>
    </style-wrapper>

    <!-- Unequal border sizes -->
    <style-wrapper header="Unequal border sizes" description="Define the width of the border on individual sides">
      <div slot="exampleSlot" class="sg-flex--main-axis-spacearound sg-flex--cross-axis-center sg-flex-border sg-flex--wrap u-flex">
        <border-example v-for="bsizeueq in borderSizeUnequal" :key=bsizeueq.content :title=bsizeueq.content :styling="[bsizeueq.style,'border--solid border-color--black']"></border-example>
      </div>
      <div slot="codeSlot">
        <code-snippet>
          <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(borderSizeUnequal, 'border--solid border-color--black')" class="sg-margin-bottom--none"></div>
        </code-snippet>
      </div>
    </style-wrapper>

    <!-- Border colour -->
    <style-wrapper header="Border colour" description="Define the colour of the border">
      <div slot="exampleSlot" class="sg-flex--main-axis-spacearound sg-flex--cross-axis-center sg-flex-border u-flex">
        <border-example v-for="bcolour in borderColour" :key=bcolour.content :title=bcolour.content :styling="[bcolour.style,'border--solid border-width--medium']"></border-example>
      </div>
      <div slot="codeSlot">
        <code-snippet>
          <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(borderColour, 'border--solid border-width--medium')" class="sg-margin-bottom--none"></div>
        </code-snippet>
      </div>
    </style-wrapper>

    <!-- Border radius -->
    <style-wrapper header="Border radius" description="Define the border radius of the border">
      <div slot="exampleSlot" class="sg-flex--main-axis-spacearound sg-flex--cross-axis-center sg-flex-border u-flex">
        <border-example v-for="bradius in borderRadius" :key=bradius.content :title=bradius.content :styling="[bradius.style,'border--solid border-width--thin border-color--black']"></border-example>
      </div>
      <div slot="codeSlot">
        <code-snippet>
          <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(borderRadius, 'border-solid border-width--thin border-color--black')" class="sg-margin-bottom--none"></div>
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
        borderStyle: [
          new ElementExample('Solid', 'border--solid', 'div'),
          new ElementExample('Dashed', 'border--dashed', 'div'),
          new ElementExample('Dotted', 'border--dotted', 'div')
        ],
        borderSize: [
          new ElementExample('Thin', 'border-width--thin', 'div'),
          new ElementExample('Medium', 'border-width--medium', 'div'),
          new ElementExample('Thick', 'border-width--thick', 'div')
        ],
        borderSizeUnequal: [
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
        ],
        borderColour: [
          new ElementExample('Black', 'border-color--black', 'div'),
          new ElementExample('Grey', 'border-color--grey', 'div')
        ],
        borderRadius: [
          new ElementExample('Small', 'border-radius--small', 'div'),
          new ElementExample('Medium', 'border-radius--medium', 'div'),
          new ElementExample('Large', 'border-radius--large', 'div'),
          new ElementExample('Circle', 'border-radius--circle', 'div')
        ]
      };
    }
  };
</script>

<style lang="scss">
</style>

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
