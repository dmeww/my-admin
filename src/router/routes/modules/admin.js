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
        path: '/pageA',
        name: 'adminMeetingA',
        component: DefaultLayout,
        meta: {
            title: '页面A',
            roles:['admin']
        },
        children: [
            {
                path: '',
                name: 'userPageA1',
                meta: {
                    title: '页面A1',
                    roles:['admin']
                },
                component: () => import('@/views/admin/page1/index.vue')
            },
            {
                path: 'page2',
                name: 'userPageA2',
                meta: {
                    title: '页面A2',
                    roles:['admin']
                },
                component: () => import('@/views/admin/page2/index.vue')
            },
        ]
    },
    {
        path: '/pageN',
        name: 'adminMeetingN',
        component: DefaultLayout,
        meta: {
            title: '页面N',
            roles:['admin']
        },
        children: [
            {
                path: '',
                name: 'userPageN1',
                meta: {
                    title: '页面N1',
                    roles:['admin']
                },
                component: () => import('@/views/admin/page1/index.vue')
            },
            {
                path: 'page2',
                name: 'userPageN2',
                meta: {
                    title: '页面N2',
                    roles:['admin']
                },
                component: () => import('@/views/admin/page2/index.vue')
            },
        ]
    },
    {
        path: '/pageM',
        name: 'adminMeetingM',
        component: DefaultLayout,
        meta: {
            title: '页面M',
            roles:['admin']
        },
        children: [
            {
                path: '',
                name: 'userPageM1',
                meta: {
                    title: '页面M1',
                    roles:['admin']
                },
                component: () => import('@/views/admin/page1/index.vue')
            },
            {
                path: 'page2',
                name: 'userPageM2',
                meta: {
                    title: '页面M2',
                    roles:['admin']
                },
                component: () => import('@/views/admin/page2/index.vue')
            },
        ]
    },
    {
        path: '/pageX',
        name: 'adminMeetingX',
        component: DefaultLayout,
        meta: {
            title: '页面X',
            roles:['admin']
        },
        children: [
            {
                path: '',
                name: 'userPageX1',
                meta: {
                    title: '页面X1',
                    roles:['admin']
                },
                component: () => import('@/views/admin/page1/index.vue')
            },
            {
                path: 'page2',
                name: 'userPageX2',
                meta: {
                    title: '页面X2',
                    roles:['admin']
                },
                component: () => import('@/views/admin/page2/index.vue')
            },
        ]
    },
    {
        path: '/',
        redirect: '/admin',
        name:'redirect',
        meta: {
            roles: ['admin'],
            hidden: true
        }
    },
]
