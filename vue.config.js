const proxy = require("./src/proxy/index")

module.exports = {
    // 代理设置
    devServer: {
        // 端口号
        port: 3000,
        // host: '0.0.0.0',
        // 代理
        proxy,
    },
}
