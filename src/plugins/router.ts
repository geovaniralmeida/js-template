

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import dynamicImportErrorHandler from './dynamicImportErrorHandler';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'app.home',
            component: () => import('../pages/index.vue')
        },
    ],
});


dynamicImportErrorHandler(router);


export default router
