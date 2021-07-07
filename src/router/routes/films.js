<<<<<<< HEAD
// 电影路由模块
export default [
    {
        path: "/films",
        component: () => import(/*webpackChunkName: "films"*/ "@/views/films"),
        redirect: "/films/nowPlaying",
        children: [
            {
                path: "nowPlaying",
                component: () =>
                    import(
                        /*webpackChunkName: "nowPlaying"*/ "@/views/films/ui/nowPlaying"
                    ),
            },
            {
                path: "comingSoon",
                component: () =>
                    import(
                        /*webpackChunkName: "comingSoon"*/ "@/views/films/ui/comingSoon"
                    ),
            },
        ],
    },
    // 正在热映详情页
    {
        path: "/details/:id",
        component: () =>
            import(
                /*webpackChunkName: "details"*/ "@/views/films/ui/details/now.vue"
            ),
    },
    // 即将上映详情页
    {
        path: "/detail/:id",
        component: () =>
            import(
                /*webpackChunkName: "detail"*/ "@/views/films/ui/details/soon.vue"
            ),
    },
    // 剧照页
    {
        path: "/photo",
        component: () =>
            import(/*webpackChunkName: "photo"*/ "@/views/films/ui/photo"),
    },
    // 回退即将上映 --- 路由重定向
    {
        path: "/film",
        redirect: "/films/comingSoon",
    },
    // 点击跳转城市页面
    {
        path: "/city",
        component: () =>
            import(/*webpackChunkName: "city"*/ "@/views/films/ui/city"),
=======
// 首页路由模块
export default [
    {
        path: "/films",
        component: () => import(/*webpackChunkName: "films"*/ "@/views/films/index.vue"),
>>>>>>> db11c0b9bb861b9f48ca87dcf07460772e5a73ce
    },
]
