// 分类路由模块
export default [
    {
        path: "/",
        redirect: "/films/nowPlaying",
        component: () => import(/*webpackChunkName: "films"*/ "@/views/login/index.vue"),
    },
]
