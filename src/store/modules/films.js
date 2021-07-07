<<<<<<< HEAD
import { getFilmInfo } from "@/api/films"

export default {
    state: {
        filmInfo: {},
        toCity: "",
    },
    mutations: {
        getDetail(state, data) {
            state.filmInfo = data.data.film
        },
        // 监听从哪来
        toCity(state, data) {
            state.toCity = data
        },
    },

    // 异步
    actions: {
        async getDetail({ commit }, page) {
            let ret = await getFilmInfo(page)
            commit("getDetail", ret)
        },
    },
=======


export default {
    state: {},
    mutations: {},

    // 异步
    actions: {},
>>>>>>> db11c0b9bb861b9f48ca87dcf07460772e5a73ce
}
