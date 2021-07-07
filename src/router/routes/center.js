// 分类路由模块
export default [
    {
        path: "/center",
        component: () => import(/*webpackChunkName: "center"*/ "@/views/center/index.vue"),
    },
]
