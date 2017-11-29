<template>
  <div id="borders" class="spa-page">

    <heading title="Borders"></heading>
    <!-- Border styles -->
    <style-wrapper header="Border styles" description="Define the style of the border">
      <div slot="exampleSlot" class="sg-flex sg-flex--wrap u-flex">
          <border-example v-for="bstyle in borderStyle" :key=bstyle.content :title=bstyle.content :styling="[bstyle.style,'border-width--medium border-color--black']"></border-example>
      </div>
      <div slot="codeSlot">
        <code-snippet>
          <div slot="codeSnippetSlot" v-html="returnFormattedCodeString(borderStyle, 'border--solid border-color--black')" class="sg-margin-bottom--none"></div>
        </code-snippet>
      </div>
    </style-wrapper>

    <!-- Uniform border sizes -->
    <style-wrapper header="Uniform border sizes" description="Define the width of the border where the width required is the same on all sides">
      <div slot="exampleSlot" class="sg-flex sg-flex--wrap u-flex">
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
      <div slot="exampleSlot" class="sg-flex sg-flex--wrap u-flex">
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
      <div slot="exampleSlot" class="sg-flex sg-flex--wrap u-flex">
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
      <div slot="exampleSlot" class="sg-flex sg-flex--wrap u-flex">
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
  import StyleWrapper from '@/components/stylewrapper';
  import BorderExample from '@/components/borderexample';
  import Heading from '@/components/heading';
  import CodeSnippet from '@/components/codesnippet';
  import returnFormattedCodeString from '@/components/mixins/codestring';

  export default {
    components: { StyleWrapper, BorderExample, Heading, CodeSnippet },
    mixins: [returnFormattedCodeString],
    data: function () {
      return {
        borderStyle: [
          {content: 'Solid', style: 'border--solid', element: 'div'},
          {content: 'Dashed', style: 'border--dashed', element: 'div'},
          {content: 'Dotted', style: 'border--dotted', element: 'div'}
        ],
        borderSize: [
          {content: 'Thin', style: 'border-width--thin', element: 'div'},
          {content: 'Medium', style: 'border-width--medium', element: 'div'},
          {content: 'Thick', style: 'border-width--thick', element: 'div'}
        ],
        borderSizeUnequal: [
          {content: 'Top Thin', style: 'bordertop-width--thin', element: 'div'},
          {content: 'Top Medium', style: 'bordertop-width--medium', element: 'div'},
          {content: 'Top Thick', style: 'bordertop-width--thick', element: 'div'},
          {content: 'Bottom Thin', style: 'borderbottom-width--thin', element: 'div'},
          {content: 'Bottom Medium', style: 'borderbottom-width--medium', element: 'div'},
          {content: 'Bottom Thick', style: 'borderbottom-width--thick', element: 'div'},
          {content: 'Left Thin', style: 'borderleft-width--thin', element: 'div'},
          {content: 'Left Medium', style: 'borderleft-width--medium', element: 'div'},
          {content: 'Left Thick', style: 'borderleft-width--thick', element: 'div'},
          {content: 'Right Thin', style: 'borderright-width--thin', element: 'div'},
          {content: 'Right Medium', style: 'borderright-width--medium', element: 'div'},
          {content: 'Right Thick', style: 'borderright-width--thick', element: 'div'}
        ],
        borderColour: [
          {content: 'Black', style: 'border-color--black', element: 'div'},
          {content: 'Grey', style: 'border-color--grey', element: 'div'}
        ],
        borderRadius: [
          {content: 'Small', style: 'border-radius--small', element: 'div'},
          {content: 'Medium', style: 'border-radius--medium', element: 'div'},
          {content: 'Large', style: 'border-radius--large', element: 'div'},
          {content: 'Circle', style: 'border-radius--circle', element: 'div'}
        ]
      };
    }
  };
</script>

<style lang="scss">
</style>

<style scoped lang="scss">
</style>
