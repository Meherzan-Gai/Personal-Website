import {createRouter, createWebHashHistory} from 'vue-router';
import HomeView from './components/HomeView.vue';
import AboutView from './components/AboutView.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/:index?', component: PageViewer },
        { path: '/create', component: CreatePage }
    ]
});

export default router;