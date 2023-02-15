const fs = require("fs");
const path = require("path")
const getFile = require("./index")
const getAssets = require("./getAssets")

const createDir = (dir) => {
    if (dir) {
        fs.mkdirSync(dir, { recursive: true })
    }
}

// createDir("//at.alicdn.com/t/font_903536_1juyuuhoetz.js")

const genFilePath = (patharg) => {
    const [_, dir, fileName] = patharg.match(/(.*)\/(.*)/)

    return {
        dir: dir,
        fileName
    }
}


const start = (patharg) => {
    const { fileName } = genFilePath(patharg)

    const dir = path.join(process.cwd(), "DINGTALK")
    createDir(dir)
    
    getAssets(patharg, path.join(dir, fileName))
}

const fileUrls = [
    "https://g.alicdn.com/de/prismplayer/2.9.11/skins/default/aliplayer-min.css",
    "https://oss.coolcollege.cn/swiper_3.4.2.css",
    // "./loading.css",
    'https://sdn.coolcollege.cn/cool-training-pc-module/ding_store/1.230208.144353/styles.1c3aa401.css',
    'https://at.alicdn.com/t/font_1107055_2heupf6gl9x.js',
    "https://at.alicdn.com/t/font_969756_o5g4me64jn9.js",

    'https://at.alicdn.com/t/font_903536_1juyuuhoetz.js',
    "https://oss.coolcollege.cn/coolcollege/js/aliyun-oss-sdk-5.2.0.min.js",
    "https://oss.coolcollege.cn/coolcollege/js/aliyun-upload-sdk-1.4.0.min.js",
    "https://oss.coolcollege.cn/qrcode.min.js",
    "https://oss.coolcollege.cn/swiper_3.4.2.js",
    "https://rescdn.qqmail.com/node/ww/wwopenmng/js/sso/wwLogin-1.0.0.js",

    "https://sdn.coolcollege.cn/assets/kuxueyuan/prod-common-js/react.production.min.js",
    "https://sdn.coolcollege.cn/assets/kuxueyuan/prod-common-js/react-dom.production.min.js",
    "https://sdn.coolcollege.cn/assets/kuxueyuan/prod-common-js/moment/moment.min.js",
    "https://sdn.coolcollege.cn/assets/kuxueyuan/prod-common-js/moment/locale/zh-cn.js",
    "https://sdn.coolcollege.cn/assets/kuxueyuan/prod-common-js/moment/locale/zh-hk.js",
    "https://sdn.coolcollege.cn/assets/kuxueyuan/prod-common-js/moment/locale/es.js",
    "https://sdn.coolcollege.cn/assets/kuxueyuan/prod-common-js/antv/plots@1.3.5.min.js",
    "https://sdn.coolcollege.cn/cool-training-pc-module/ding_store/1.230208.144353/styles.12cf0713.js",
    "https://sdn.coolcollege.cn/cool-training-pc-module/ding_store/1.230208.144353/umi.c5af36d7.js"
]

fileUrls.forEach(start)



function genNewUrl() {
    const urls = fileUrls.map((url) => {
        const { fileName } = genFilePath(url)
        return `https://dev-opencdn.dingtalk.net/digital_store_pc/coolstore-pc-study/0.0.5/` + fileName
    }).join('\n')

    const dir = path.join(process.cwd(), "DINGTALK", '__newurls' )
    fs.writeFileSync(dir, urls)
}

genNewUrl()