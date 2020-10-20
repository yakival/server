import VueRouter from 'vue-router'

import ExampleComponent from './components/ExampleComponent';

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: ExampleComponent,
        },
    ],
});