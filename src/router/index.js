import Vue from "vue"
import VueRouter from "vue-router"

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err)
}

// webpack中提供一个自动读取文件目录和文件
let moduleFn = require.context("./routes", false, /\.js$/)
// key方法返回此目录中文件列表，数组
let routes = moduleFn.keys().reduce((p, c) => {
    let m = moduleFn(c).default
    if (m) {
        if (Array.isArray(m)) {
            p = p.concat(m)
        } else {
            p.push(m)
        }
    }
    return p
}, [])

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
})

export default router
