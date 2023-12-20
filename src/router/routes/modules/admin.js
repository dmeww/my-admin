import DefaultLayout from "@/layout/DefaultLayout.vue";

export const adminRoutes = [
    {
        path: '/admin',
        name: 'adminDefault',
        component: DefaultLayout,
        meta: {
            title: '控制台',
            roles:['admin']
        },
        children: [
            {
                path: '',
                name: 'adminDashBoard',
                meta: {
                    title: '首页',
                    roles:['admin']
                },
                component: () => import('@/views/admin/dashboard/index.vue')
            },
        ]
    },
    {
        path: '/page',
        name: 'adminMeeting',
        component: DefaultLayout,
        meta: {
            title: '页面',
            roles:['admin']
        },
        children: [
            {
                path: 'page1',
                name: 'userPage1',
                meta: {
                    title: '页面1',
                    roles:['admin']
                },
                component: () => import('@/views/admin/page1/index.vue')
            },
            {
                path: 'page2',
                name: 'userPage2',
                meta: {
                    title: '页面2',
                    roles:['admin']
                },
                component: () => import('@/views/admin/page2/index.vue')
            },
        ]
    },
    {
        path: '/',
        redirect: '/admin',
        meta: {
            roles: ['admin'],
            hidden: true
        }
    },
]
