export const errorRoutes = [
    {
        path: '/404',
        name: '404页面',
        meta: {
            roles: ['*'],
            hidden: true
        },
        component: () => import('@/views/error/404.vue'),
    },

]

