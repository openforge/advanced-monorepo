import { Category, NewTerm, PastTerm } from '@company-name/features/glossary-category-module-vue';
import { Home } from '@company-name/features/glossary-home-module-vue';
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/category',
        name: 'Category',
        component: Category,
    },
    {
        path: '/new-term',
        name: 'NewTerm',
        component: NewTerm,
    },
    {
        path: '/past-term',
        name: 'PastTerm',
        component: PastTerm,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
