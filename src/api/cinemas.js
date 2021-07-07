import http from "../utils/Http"
import config from "@/config/api/cinemas"
import sessStorage from "@/utils/sessStorafe"

export const getCities = async () => {
    let cityList = []
    if (!sessStorage.get("cities")) {
        // 得到数据并解构 -- 解构看右边，右边是什么类型，左边就是什么类型
        // 如果是数据，则变量名随意，如果是对象，必须和右边的key一样的
        let city = await http.get(config.getCity)
        cityList = city.cts
        sessStorage.set("cities", city.cts)
    } else {
        cityList = sessStorage.get("cities")
    }

    let cities = {}
    for (let i = 65; i <= 90; i++) {
        cities[String.fromCharCode(i)] = []
    }
    for (let indexKey in cities) {
        let tmp = cityList.filter((item) => new RegExp("^" + indexKey, "i").test(item.py))
        if (tmp.length > 0) {
            cities[indexKey] = tmp
        } else {
            delete cities[indexKey]
        }
    }

    return cities
}

export const getBrand = (id) => {
    return http.get(config.getBrand + id)
}
export const getCinema = (id = 1, page = 20) => {
    return http.get(config.getCinema + "cityId=" + id + "&offset=" + page)
}
export const getArea = (cityId = 1, sid = 673, aid = -1) => {
    return http.get(config.getArea + "&cityId=" + cityId + "&districtId=" + sid + "&areaId=" + aid)
}
export const getSubway = (cityId = 1, lid = -1, sid = -1) => {
    return http.get(config.getSubway + "&cityId=" + cityId + "&lineId=" + lid + "&stationId=" + sid)
}
export const getBrandText = (cityId = 1, bid = -1) => {
    return http.get(config.getBrandText + "&cityId=" + cityId + "&brandId=" + bid)
}
export const getFeature = (cityId = 1, sId = -1, hId = -1) => { 
    return http.get(
        config.getFeature + "&cityId=" + cityId + "&serviceId" + sId + "&hallType" + hId
    )
}
