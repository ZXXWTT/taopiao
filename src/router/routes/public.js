// 分类路由模块
export default [
    {
        path: "/",
        component: () => import(/*webpackChunkName: "films"*/ "@/views/login/index.vue"),
    },
]
