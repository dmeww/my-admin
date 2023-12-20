import DefaultLayout from "@/layout/DefaultLayout.vue";

export const userRoutes = [
    {
        path: '/user',
        name: 'userDefault',
        component: DefaultLayout,
        meta: {
            title: '控制台',
            roles: ['user']
        },
        children: [
            {
                path: '',
                name: 'userDashBoard',
                meta: {
                    title: '首页',
                    roles: ['user']
                },
                component: () => import('@/views/user/dashboard/index.vue')
            },
        ]
    },
    {
        path: '/page',
        name: 'userMeeting',
        component: DefaultLayout,
        meta: {
            title: '页面',
            roles: ['user']
        },
        children: [
            {
                path: 'page1',
                name: 'userPage1',
                meta: {
                    title: '页面1',
                    roles: ['user']
                },
                component: () => import('@/views/user/page1/index.vue')
            },
            {
                path: 'page2',
                name: 'userPage2',
                meta: {
                    title: '页面2',
                    roles: ['user']
                },
                component: () => import('@/views/user/page2/index.vue')
            },
        ]
    },
    {
        path: '/',
        redirect: '/user',
        meta: {
            roles: ['user'],
            hidden: true
        }
    },
]
