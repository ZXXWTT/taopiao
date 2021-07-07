import axios from "axios"
class Http {
    constructor(options = {}) {
        // 默认值的配置
        options.baseURL = options.baseURL || process.env.VUE_APP_HOST
        options.timeout = options.timeout || 5000
        this.options = options
    }

    getInstance(opts = {}) {
        // 多个配置的合并操作
        let params = { ...this.options, ...opts }
        let instance = axios.create(params)
        this.responseInterceptor(instance)
        return instance
    }

    // 响应拦截器
    responseInterceptor(instance) {
        instance.interceptors.response.use(
            function(response) {
                // 简化了每次axios得到的数据中会有一个data字段
                return response.data
            },
            function(error) {
                return Promise.reject(error)
            }
        )
    }

    get(url, opts = {}) {
        return this.getInstance(opts).get(url)
    }

    post(url, data = {}, opts = {}) {
        return this.getInstance(opts).post(url, data)
    }
}

export default new Http()
