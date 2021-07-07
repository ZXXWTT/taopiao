// 首页路由模块
export default [
    {
        path: "/films",
        component: () => import(/*webpackChunkName: "films"*/ "@/views/films/index.vue"),
    },
]
