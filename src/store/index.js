import Vue from "vue"
import Vuex from "vuex"

let moduleFn = require.context("./modules", false, /\.js$/)
let modules = moduleFn.keys().reduce((p, c) => {
    let mod = moduleFn(c).default
    // 统一的补一个namespaced:true
    mod = { ...mod, namespaced: true }
    // 正则中的元组，0全匹配的成功的字符，数小括号，从左到右
    let modName = c.match(/\.\/(\w+)\.js$/)[1]
    p[modName] = mod
    return p
}, {})
import getters from "./getters"
Vue.use(Vuex)

export default new Vuex.Store({
    getters,
    modules,
})
