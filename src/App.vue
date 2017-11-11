<template>
  <main id="app" class="wrapper u-full-width">

    <header class="header">
      <a href="/" class="">
        <img src="/static/images/logo.png" class="sg-logo--small sg-paddingbottom--medium"/>
      </a>
      <!--<button class="menu__open js-trigger">Menu</button>-->
      <div class="hamburger__container border-radius--small sg-margin-bottom--none js-trigger">
        <span>MENU</span>
        <div class="bar bar1"></div>
        <div class="bar bar2"></div>
        <div class="bar bar3"></div>
      </div>
    </header>

    <nav class="sidebar sg-padding--large">
      <div class="sg-logo__container sg-margin-bottom--none u-align--center">
        <a href="/">
          <img src="/static/images/logo.png" class="sg-logo sg-paddingbottom--medium"/>
        </a>
      </div>

      <ul class="sg-menu">
        <li class="list list--none sg-paddingleft--small">
            <router-link to="/brand" class="sg-menu-anchor sg-menu-anchor-parent u-text-decoration--none u-inline-block sg-padding--small sg-margin-bottom--medium u-full-width">Brand</router-link>
            <ul>
                <li class="list list--none sg-paddingleft--large sg-paddingbottom--medium"><router-link to="/logo" class="sg-menu-anchor u-text-decoration--none">Logo</router-link></li>
                <li class="list list--none sg-paddingleft--large sg-paddingbottom--medium"><router-link to="/colours" class="sg-menu-anchor u-text-decoration--none">Colours</router-link></li>
                <li class="list list--none sg-paddingleft--large sg-paddingbottom--medium"><router-link to="/typography" class="sg-menu-anchor u-text-decoration--none">Typography</router-link></li>
                <li class="list list--none sg-paddingleft--large sg-paddingbottom--medium"><router-link to="/language" class="sg-menu-anchor u-text-decoration--none">Language</router-link></li>
                <li class="list list--none sg-paddingleft--large sg-paddingbottom--medium"><router-link to="/icons" class="sg-menu-anchor u-text-decoration--none">Icons</router-link></li>
                <li class="list list--none sg-paddingleft--large sg-paddingbottom--medium"><router-link to="/utility" class="sg-menu-anchor u-text-decoration--none">Utility Classes</router-link></li>
                <li class="list list--none sg-paddingleft--large sg-paddingbottom--medium"><router-link to="/borders" class="sg-menu-anchor u-text-decoration--none">Borders</router-link></li>
                <li class="list list--none sg-paddingleft--large sg-paddingbottom--medium"><router-link to="/links" class="sg-menu-anchor u-text-decoration--none">Links</router-link></li>
                <li class="list list--none sg-paddingleft--large sg-paddingbottom--medium"><router-link to="/lists" class="sg-menu-anchor u-text-decoration--none">Lists</router-link></li>
            </ul>
          </li>
          <li class="list list--none sg-paddingleft--small">
            <router-link to="/patternlibrary" class="sg-menu-anchor sg-menu-anchor-parent u-text-decoration--none u-inline-block sg-padding--small sg-margin-bottom--medium u-full-width">Pattern Library</router-link>
            <ul>
                <li class="list list--none sg-paddingleft--large sg-paddingbottom--medium"><router-link to="/layout" class="sg-menu-anchor u-text-decoration--none">Layout</router-link></li>
                <li class="list list--none sg-paddingleft--large sg-paddingbottom--medium"><router-link to="/buttons" class="sg-menu-anchor u-text-decoration--none">Buttons</router-link></li>
                <li class="list list--none sg-paddingleft--large sg-paddingbottom--medium"><a href="" class="sg-menu-anchor u-text-decoration--none">Header</a></li>
                <li class="list list--none sg-paddingleft--large sg-paddingbottom--medium"><router-link to="/panels" class="sg-menu-anchor u-text-decoration--none">Panels</router-link></li>
                <li class="list list--none sg-paddingleft--large sg-paddingbottom--medium"><router-link to="/navigation" class="sg-menu-anchor u-text-decoration--none">Navigation</router-link></li>
                <li class="list list--none sg-paddingleft--large sg-paddingbottom--medium"><router-link to="/forms" class="sg-menu-anchor u-text-decoration--none">Forms</router-link></li>
            </ul>
          </li>
          <li class="list list--none sg-paddingleft--small">
            <a href="" class="sg-menu-anchor sg-menu-anchor-parent u-text-decoration--none u-inline-block sg-padding--small sg-margin-bottom--medium u-full-width">Examples</a>
            <ul>
              <li class="list list--none sg-paddingleft--large sg-paddingbottom--medium"><a href="#/page1" class="sg-menu-anchor u-text-decoration--none">Page 1</a></li>
              <li class="list list--none sg-paddingleft--large sg-paddingbottom--medium"><a href="#/page2" class="sg-menu-anchor u-text-decoration--none">Page 2</a></li>
            </ul>
          </li>
      </ul>
    </nav>

    <router-view class="main"></router-view>
  </main>
</template>

<script>
  export default {
    name: 'app',
    mounted: function () {
      $('.js-trigger').click(function () {
        $(this).toggleClass('change');
        $('.sidebar').toggleClass('is-active');
        $('.main').toggleClass('is-overflowhidden');
      });
    }
  };
</script>

<style lang="scss">
  @import 'static/sass/styleguide.scss';
</style>

<style scoped lang="scss">
  @import 'static/sass/app.scss';
  @import 'static/sass/hamburger.scss';
</style>
