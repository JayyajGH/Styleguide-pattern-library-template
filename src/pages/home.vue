<template>
  <div id="home" class="spa-page">

    <heading title="Company Styleguide" :isMainHeading=true></heading>
    <p>This design system contains the standard set of web components and patterns that are used on the company website.</p>

    <p>As well as individual components it also contains descriptions and examples of how these components should be used and how they fit together.
      Ideally this should help to develop a consistent experience for users of the site as well as providing a central location where developers,
      content editors and designers can access an up to date library of UI components, brand guidelines, brand assets and code snippets.</p>

    <p>This design system also contains the slightly less tangible parts of the brand - tone of voice, principles and values etc.</p>
  </div>
</template>

<script>
  import Heading from '@/components/heading';

  export default {
    components: { Heading }
  };
</script>

<style scoped lang="scss">
</style>
