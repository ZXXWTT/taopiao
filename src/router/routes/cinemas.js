// 分类路由模块
export default [
    {
        path: "/cinemas/:id?",
        component: () => import(/*webpackChunkName: "cinemas"*/ "@/views/cinemas/index.vue"),
        children: [
            {
                path: "district",
                component: () =>
                    import(/*webpackChunkName: "district"*/ "@/views/cinemas/ui/district.vue"),
            },
            {
                path: "subway",
                component: () =>
                    import(/*webpackChunkName: "subway"*/ "@/views/cinemas/ui/subway.vue"),
            },
        ],
    },

    {
        path: "/city",
        component: () => import(/*webpackChunkName: "cinemas"*/ "@/views/cinemas/city/index.vue"),
    },
    {
        path: "/shows/:id",
        component: () => import(/*webpackChunkName: "shows"*/ "@/views/cinemas/details"),
    },
]
