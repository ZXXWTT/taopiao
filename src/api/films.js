import http from "../utils/Http"
import config from "../config/api/films"
import sessionStorage from "@/utils/sessionStorage"
/**
 * 轮播图
 * @returns Promise
 */

// 正在热映
export const getNowData = (page = 1, cityId = 110100) => {
    return http.get(config.getNowData + "pageNum=" + page + "&cityId=" + cityId)
}
// 即将上映
export const getSoonData = (page = 1, cityId = 110100) => {
    return http.get(
        config.getSoonData + "pageNum=" + page + "&cityId=" + cityId
    )
}
// 电影详情
export const getFilmInfo = (id) => {
    return http.get(config.getFilmInfo + id)
}
// 城市列表
export const getCity = async () => {
    // 定义数组接收城市
    let cityList = []
    // 判断session中是否存储有city
    if (!sessionStorage.get("city")) {
        // 若session中没有 --- 获取城市 --- 解构赋值 --- {data:{cities}}
        // 结构为 {status:0,data:{cities:[ {}, {}, ...],msg:"ok"}}
        let {
            data: { cities },
        } = await http.get(config.getCity)
        // 将得到的数组赋值给城市数组 --- 城市数组的每一项是对象
        cityList = cities
        // 存储在session中
        sessionStorage.set("city", cities)
    } else {
        // // 若session中有 --- 直接在session中获取城市 --- 减少请求次数，节约网络资源和带宽
        cityList = sessionStorage.get("city")
    }
    // indexListData = { 索引 : [ 城市 ] }
    let indexListData = {}
    // ASCII码转字母 --- 作为城市索引 --- 也是indexListData的键名
    for (let i = 65; i <= 90; i++) {
        // 给indexListData赋键值 --- 空数组 --- 接收城市
        indexListData[String.fromCharCode(i)] = []
    }
    // 循环遍历对象indexListData
    for (let indexKey in indexListData) {
        // 在城市数组中查询 --- 得到的也是一个数组
        let tmp = cityList.filter((item) =>
            // 正则表达式 --- 以对象indexListData的键名indexKey开头 --- 忽略大小写 --- 按拼音查询 --- 得到的也是一个数组
            new RegExp("^" + indexKey, "i").test(item.pinyin)
        )
        // 如果存在以索引indexKey开头的城市 --- 则以数组的形式返回，并以键值的形式赋值给对应的键名来存储
        if (tmp.length > 0) {
            indexListData[indexKey] = tmp
        } else {
            // 如果不存在以索引indexKey开头的城市 --- 则删除该键名
            delete indexListData[indexKey]
        }
    }
    return indexListData
}

// 模糊查询
export const fuzzyCity = () => {
    return http.get(config.fuzzyCity)
}
