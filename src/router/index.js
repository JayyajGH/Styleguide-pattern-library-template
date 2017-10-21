import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'
import Brand from '@/components/brand'
import Logo from '@/components/logo'
import Typography from '@/components/typography'
import Language from '@/components/language'
import Icons from '@/components/icons'
import Utility from '@/components/utility'
import Links from '@/components/links'
import Buttons from '@/components/buttons'
import PatternLibrary from '@/components/patternlibrary'
import Layout from '@/components/layout'
import Colours from '@/components/colours'
import Borders from '@/components/borders'
import Panels from '@/components/panels'
import Navigation from '@/components/navigation'
import Forms from '@/components/forms'

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
