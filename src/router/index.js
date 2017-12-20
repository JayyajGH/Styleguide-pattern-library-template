import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/home';
import Brand from '@/pages/brand';
import Logo from '@/pages/page-logo';
import Typography from '@/pages/page-typography';
import Language from '@/pages/page-language';
import Icons from '@/pages/page-icons';
import Utility from '@/pages/page-utility';
import Links from '@/pages/page-links';
import Lists from '@/pages/page-lists';
import Buttons from '@/pages/page-buttons';
import PatternLibrary from '@/pages/patternlibrary';
import Layout from '@/pages/page-layout';
import Colours from '@/pages/page-colours';
import Borders from '@/pages/page-borders';
import Panels from '@/pages/page-panels';
import Navigation from '@/pages/page-navigation';
import Forms from '@/pages/page-forms';

Vue.use(Router);

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
});
