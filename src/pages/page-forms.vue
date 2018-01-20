<template>
  <div id="forms" class="spa-page">
    <stroked-heading title="Forms"></stroked-heading>

    <section>
      <header>
        <h2 class="header2">Form fields</h2>
      </header>

      <form>
        <fieldset>
          <legend>Name</legend>
          Forename:
          <input type="text" name="forename"><br>
          Surname:
          <input type="text" name="surname"><br>
        </fieldset>

        <fieldset>
          <legend>Gender</legend>
          <input type="radio" name="gender" value="male" checked>Male
          <input type="radio" name="gender" value="female">Female
          <input type="radio" name="gender" value="other">Other
        </fieldset>

        <fieldset>
          <legend>Transport</legend>
          <input type="checkbox" name="vehicle1" value="Bike"> I have a bike
          <input type="checkbox" name="vehicle2" value="Car"> I have a car
        </fieldset>

        <fieldset>
          <legend>Model</legend>
          <select name="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
        </fieldset>
      </form>
    </section>

  </div>
</template>

<script>
  import StrokedHeading from '@/components/stroked-heading/stroked-heading';

  export default {
    name: 'PageForms',
    components: { StrokedHeading }
  };
</script>

<style>
</style>
