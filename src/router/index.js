import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home'
import Brand from '@/pages/brand'
import Logo from '@/pages/logo'
import Typography from '@/pages/typography'
import Language from '@/pages/language'
import Icons from '@/pages/icons'
import Utility from '@/pages/utility'
import Links from '@/pages/links'
import Lists from '@/pages/lists'
import Buttons from '@/pages/buttons'
import PatternLibrary from '@/pages/patternlibrary'
import Layout from '@/pages/layout'
import Colours from '@/pages/colours'
import Borders from '@/pages/borders'
import Panels from '@/pages/panels'
import Navigation from '@/pages/navigation'
import Forms from '@/pages/forms'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/brand', component: Brand },
    { path: '/logo', component: Logo },
    { path: '/typography', component: Typography },
    { path: '/language', component: Language },
    { path: '/icons', component: Icons },
    { path: '/utility', component: Utility },
    { path: '/links', component: Links },
    { path: '/lists', component: Lists },
    { path: '/buttons', component: Buttons },
    { path: '/patternlibrary', component: PatternLibrary },
    { path: '/layout', component: Layout },
    { path: '/colours', component: Colours },
    { path: '/borders', component: Borders },
    { path: '/panels', component: Panels },
    { path: '/navigation', component: Navigation },
    { path: '/forms', component: Forms }
  ]
})
