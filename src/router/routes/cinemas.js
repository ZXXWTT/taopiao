// 分类路由模块
export default [
    {
        path: "/cinemas",
        component: () => import(/*webpackChunkName: "cinemas"*/ "@/views/cinemas/index.vue"),
    },
]
