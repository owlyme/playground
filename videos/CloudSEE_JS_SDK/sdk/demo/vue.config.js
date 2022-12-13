const path = require("path");
const resolve = dir => {
    return path.join(__dirname, dir)
}


module.exports = {
    publicPath: './',
    assetsDir: 'static',
    configureWebpack: {},
    chainWebpack: config => {
        config.resolve.alias.set('@', resolve('src')).set('_c', resolve('src/components')).set('@@', resolve('public'))
    },
    devServer: {
        proxy: {
            '/v1': {
                target: 'https://192.168.118.253:9090/v1', //开发
                // target: 'https://121.36.81.241:6060/v1', //转测
                // target: 'https://114.115.200.147:6060/v1', //众测
                // target: 'https://124.71.177.136:6060/v1', //生产
                changeOrigin: true,
                pathRewrite: {
                    '^/v1': ''
                }
            }
        }
    },
    productionSourceMap: false,

}