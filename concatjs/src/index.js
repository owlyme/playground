const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");

const createCwd = (p) => path.join(process.cwd(), p)

const getOriginFile = async (fileUrl, callback) => {
    path.parse(fileUrl)
    let _http = http;
    if (fileUrl.startsWith('https://')) {
        _http = https
    }
    return new Promise((resolve, reject) => {
        _http.get(fileUrl, (res) => {
            console.log(res.headers)
            // console.log('statusCode:', res.statusCode);
            // console.log('headers:', res.headers);
            let chunk = null
            res.on('data', (d) => {
                // console.log(d)
                // process.stdout.write(d);
                // chunk += d;
                callback(d)
            });
            res.on('end', (d) => {
                resolve(chunk)
            });
        }).on('error', (e) => {
            // console.error(e);
            reject(e)
        });
    })
}

const writeFileStream = (filePath) => {
    // 文件是否存在
    if(!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath,  '', { encoding: 'utf-8' })
    }
    
    const file = fs.createWriteStream(filePath,  { encoding: 'utf-8' });

    return file
}

const resFiles = async (arr, filename) => {
   const stream = writeFileStream(createCwd(filename));
    for (let i = 0; i < arr.length ; i++) {
        await getOriginFile(arr[i], (chunk) => {
            stream.write(chunk);
        })
    } 
    stream.end();
}

// let url = [
//     "https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js",
//     "https://cdn.jsdelivr.net/npm/vuex@3.5.1/dist/vuex.min.js",
//     "https://cdn.jsdelivr.net/npm/vue-router@3.4.9/dist/vue-router.min.js",
//     // "https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js",
//     // "https://cdn.jsdelivr.net/npm/vant@2.12.47/lib/vant.min.js",
// ]

// resFiles(url, 'vue@2.6.14-vuex@3.5.1-vue-router@3.4.9.min.js')

resFiles.getOriginFile = getOriginFile
resFiles.writeFileStream = writeFileStream

module.exports = resFiles

