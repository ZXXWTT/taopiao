export default {
    // 正在热映
    getNowData: "/api/v1/getNowPlayingFilmList?pageSize=10&",
    // 即将上映
    getSoonData: "/api/v1/getComingSoonFilmList?pageSize=10&",
    // 电影详情
    getFilmInfo: "/api/v1/getFilmInfo?filmId=",
    // 城市列表
    getCity: "/api/v1/getCitiesInfo",
    // 模糊查询
    fuzzyCity: "/api/v1/getCitiesInfo",
}
