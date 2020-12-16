import Vue from 'vue';
import Router from 'vue-router';
import Login from '../view/login';
import Main from '../view/main';
import Windows from '../view/windows';
import Page from '../view/page';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/main',
            name: 'Main',
            component: Main
        },
        {
            path: '/windows',
            name: 'Windows',
            component: Windows
        },
        {
            path: '/page',
            name: 'Page',
            component: Page
        }
    ]
});
