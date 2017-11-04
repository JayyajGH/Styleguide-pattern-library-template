<template>
  <main id="app" class="wrapper">

    <nav class="sidebar sg-padding--large">
      <div class="sg-logo__container sg-margin-bottom--none u-align--center">
        <a href="/">
          <img src="/static/logo.png" class="sg-logo sg-paddingbottom--medium"/>
        </a>
      </div>

      <ul class="sg-menu">
        <li class="sg-menu-section sg-paddingleft--small">
            <router-link to="/brand" class="sg-menu-anchor sg-menu-anchor-parent u-inline-block">Brand</router-link>
            <ul>
                <li class="sg-menu-item sg-paddingleft--large"><router-link to="/logo" class="sg-menu-anchor">Logo</router-link></li>
                <li class="sg-menu-item sg-paddingleft--large"><router-link to="/colours" class="sg-menu-anchor">Colours</router-link></li>
                <li class="sg-menu-item sg-paddingleft--large"><router-link to="/typography" class="sg-menu-anchor">Typography</router-link></li>
                <li class="sg-menu-item sg-paddingleft--large"><router-link to="/language" class="sg-menu-anchor">Language</router-link></li>
                <li class="sg-menu-item sg-paddingleft--large"><router-link to="/icons" class="sg-menu-anchor">Icons</router-link></li>
                <li class="sg-menu-item sg-paddingleft--large"><router-link to="/utility" class="sg-menu-anchor">Utility Classes</router-link></li>
                <li class="sg-menu-item sg-paddingleft--large"><router-link to="/borders" class="sg-menu-anchor">Borders</router-link></li>
                <li class="sg-menu-item sg-paddingleft--large"><router-link to="/links" class="sg-menu-anchor">Links</router-link></li>
                <li class="sg-menu-item sg-paddingleft--large"><router-link to="/lists" class="sg-menu-anchor">Lists</router-link></li>
            </ul>
          </li>
          <li class="sg-menu-section sg-paddingleft--small">
            <router-link to="/patternlibrary" class="sg-menu-anchor sg-menu-anchor-parent u-inline-block">Pattern Library</router-link>
            <ul>
                <li class="sg-menu-item sg-paddingleft--large"><router-link to="/layout" class="sg-menu-anchor">Layout</router-link></li>
                <li class="sg-menu-item sg-paddingleft--large"><router-link to="/buttons" class="sg-menu-anchor">Buttons</router-link></li>
                <li class="sg-menu-item sg-paddingleft--large"><a href="" class="sg-menu-anchor">Header</a></li>
                <li class="sg-menu-item sg-paddingleft--large"><router-link to="/panels" class="sg-menu-anchor">Panels</router-link></li>
                <li class="sg-menu-item sg-paddingleft--large"><router-link to="/navigation" class="sg-menu-anchor">Navigation</router-link></li>
                <li class="sg-menu-item sg-paddingleft--large"><router-link to="/forms" class="sg-menu-anchor">Forms</router-link></li>
            </ul>
          </li>
          <li class="sg-menu-section sg-paddingleft--small">
            <a href="" class="sg-menu-anchor sg-menu-anchor-parent u-inline-block">Examples</a>
            <ul>
              <li class="sg-menu-item sg-paddingleft--large"><a href="#/page1" class="sg-menu-anchor">Page 1</a></li>
              <li class="sg-menu-item sg-paddingleft--large"><a href="#/page2" class="sg-menu-anchor">Page 2</a></li>
            </ul>
          </li>
      </ul>
    </nav>

    <div class="header">
      <a href="/" class="">
        <img src="/static/logo.png" class="sg-logo--small sg-paddingbottom--medium"/>
      </a>
      <!--<button class="menu__open js-trigger">Menu</button>-->
      <div class="hamburger__container border-radius--small sg-margin-bottom--none js-trigger">
        <span>MENU</span>
        <div class="bar bar1"></div>
        <div class="bar bar2"></div>
        <div class="bar bar3"></div>
      </div>
    </div>
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

<style scoped lang="scss">
  @import 'static/sass/app.scss';
  @import 'static/sass/hamburger.scss';
</style>
