import http from "../utils/Http"
import config from "../config"
/**
 * 轮播图
 * @returns Promise
 */
export const getData = () => {
    return http.get(config.getData)
}
