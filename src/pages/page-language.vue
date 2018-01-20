<template>
  <div id="language" class="spa-page">
    <stroked-heading title="Language"></stroked-heading>

    <p>Refer to this guide when crafting language for "company".</p>

    <section>
      <header>
        <h2 class="header2">Brand</h2>
      </header>
      <p>Our mission is to..  We do this by...</p>
    </section>

    <section>
      <header>
        <h2 class="header2">Personality</h2>
      </header>
      <p>Friendly, helpful, and down-to-earth. We're like....</p>
    </section>

    <section>
      <header>
        <h2 class="header2">Values</h2>
      </header>
      <p>We are...</p>
    </section>

    <section>
      <header>
        <h2 class="header2">Voice</h2>
      </header>
      <p>We speak and write in a way that's friendly and approachable...</p>
    </section>

    <section>
      <header>
        <h2 class="header2">Dos and don'ts</h2>
      </header>
      <p>Give some examples</p>
    </section>

    <p>See this guide...  https://blog.markgrowth.com/how-to-create-a-copy-style-guide-in-90-minutes-af1046c60aab</p>
  </div>
</template>

<script>
  import StrokedHeading from '@/components/stroked-heading/stroked-heading';

  export default {
    name: 'PageLanguage',
    components: { StrokedHeading }
  };
</script>

<style scoped>
</style>
