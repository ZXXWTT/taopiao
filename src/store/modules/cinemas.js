import { getBrand, getCinema, getArea, getSubway, getBrandText, getFeature } from "@/api/cinemas"
export default {
    state: {
        reCity: [],
        getBrand: {},
        getCinema: "",
    },
    mutations: {
        reCity(state, data) {
            let index = state.reCity.findIndex((item) => item.nm === data.nm)
            if (index === -1) {
                if (state.reCity.length < 3) {
                    state.reCity.unshift(data)
                } else {
                    state.reCity.pop()
                    state.reCity.unshift(data)
                }
            } else {
                state.reCity.splice(index, 1)
                state.reCity.unshift(data)
            }
        },
        getBrand(state, data) {
            state.getBrand = data
        },
        getCinema(state, data) {
            state.getCinema = data
        },
    },

    // 异步
    actions: {
        async getBrand({ commit }, id) {
            let data = await getBrand(id)
            commit("getBrand", data)
        },
        //进入页面获取数据
        async getCinema({ commit }, id, page) {
            let data = await getCinema(id, page)
            commit("getCinema", data)
        },
        //跟据商业区获取数据
        async getAreas({ commit }, data) {
            let ret = await getArea(data.cityId, data.sid, data.aid)
            commit(" getCinema", ret)
        },
        //跟据地铁线路获取数据
        async getSubway({ commit }, data) {
            let ret = await getSubway(data.cityId, data.lid, data.sid)
            commit("getCinema", ret)
        },
        //跟据品牌获取数据
        async getBrandText({ commit }, data) {
            let ret = await getBrandText(data.cityId, data.bid)
            commit("getCinema", ret)
        },
        //跟据服务获取数据
        async getFeature({ commit }, data) {
            let ret = await getFeature(data.cityId, data.sId, data.hId)
            commit("getCinema", ret)
        },
    },
}
