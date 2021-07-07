import http from "../utils/Http"
import config from "../config/api/films"
/**
 * 轮播图
 * @returns Promise
 */
export const getData = () => {
    return http.get(config.getData)
}
