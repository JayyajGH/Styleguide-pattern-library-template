<template>
  <main id="app" class="wrapper">

    <nav class="sidebar">
      <a href="/" class="logo">
        <img src="/static/logo.png" class="sg-logo"/>
      </a>

      <ul>
        <li class="sg-menu-section">
            <a href="" class="sg-menu-anchor sg-menu-anchor-parent">Brand</a>
            <ul>
                <li class="sg-menu-item"><router-link to="/logo" class="sg-menu-anchor">Logo</router-link></li>
                <li class="sg-menu-item"><router-link to="/colours" class="sg-menu-anchor">Colours</router-link></li>
                <li class="sg-menu-item"><router-link to="/typography" class="sg-menu-anchor">Typography</router-link></li>
                <li class="sg-menu-item"><router-link to="/language" class="sg-menu-anchor">Language</router-link></li>
                <li class="sg-menu-item"><router-link to="/icons" class="sg-menu-anchor">Icons</router-link></li>
                <li class="sg-menu-item"><router-link to="/utility" class="sg-menu-anchor">Utility Classes</router-link></li>
                <li class="sg-menu-item"><router-link to="/borders" class="sg-menu-anchor">Borders</router-link></li>
                <li class="sg-menu-item"><router-link to="/links" class="sg-menu-anchor">Links</router-link></li>
            </ul>
          </li>
          <li class="sg-menu-section">
            <a href="" class="sg-menu-anchor sg-menu-anchor-parent">Pattern Library</a>
            <ul>
                <li class="sg-menu-item"><router-link to="/layout" class="sg-menu-anchor">Layout</router-link></li>
                <li class="sg-menu-item"><router-link to="/buttons" class="sg-menu-anchor">Buttons</router-link></li>
                <li class="sg-menu-item"><a href="" class="sg-menu-anchor">Header</a></li>
                <li class="sg-menu-item"><router-link to="/panels" class="sg-menu-anchor">Panels</router-link></li>
                <li class="sg-menu-item"><router-link to="/navigation" class="sg-menu-anchor">Navigation</router-link></li>
                <li class="sg-menu-item"><router-link to="/forms" class="sg-menu-anchor">Forms</router-link></li>
            </ul>
          </li>
          <li class="sg-menu-section">
            <a href="" class="sg-menu-anchor sg-menu-anchor-parent">Examples</a>
            <ul>
              <li class="sg-menu-item"><a href="#/page1" class="sg-menu-anchor">Page 1</a></li>
              <li class="sg-menu-item"><a href="#/page2" class="sg-menu-anchor">Page 2</a></li>
            </ul>
          </li>
      </ul>
    </nav>

    <router-view class="main"></router-view>
  </main>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped lang="scss">
  @import 'static/sass/app.scss';
</style>
