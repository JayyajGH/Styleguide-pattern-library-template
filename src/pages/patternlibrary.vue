<template>
  <div id="forms" class="spa-page">

    <heading title="Pattern Library" :isMainHeading=true></heading>

    <p>This pattern library describes the available collection of user interfae elements.</p>
    <p>This allows us: </p>
    <ul>
      <li>To achieve a consistent look and feel across the site</li>
      <li>Provide a common vocabularly for each user</li>
      <li>Provide guidance on the correct use of each element</li>
      <li>Provide a single point of reference to see the available patterns</li>
    </ul>

  </div>
</template>

<script>
  import Heading from '@/components/heading';

  export default {
    components: { Heading }
  };
</script>

<style>
</style>
