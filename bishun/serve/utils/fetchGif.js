const path = require('path');
const https= require('http');
const fs = require('fs');
const createDir = require('./createDir');
const commonUtils = require('./common');

const hanziPath = path.join(process.cwd(), `/public/hanzi`);
const pagePublicGifs = path.join(process.cwd(), `/page/public/gifs`);

createDir(pagePublicGifs)

const batchFetchGif = async () => {
    fs.readdir(hanziPath, (err, res) => {
        if (err) return;
        // res.forEach((fileName, index) => {
        //     const ext = path.extname(fileName)
        //     if (ext !== '.json') return ;
        //     const basename = path.basename(fileName, ext)
        //     const wordInfo = JSON.parse(fs.readFileSync(path.join(hanziPath, fileName), "utf-8"));
        //     if (!wordInfo.img) return;

        //     const imgExt = path.extname(wordInfo.img)
        //     downloadGifFile(`http://hanyu-word-gif.cdn.bcebos.com${wordInfo.img}`, 
        //     encodeURIComponent(basename).replace(/%/g, '-') + imgExt )
        // }, [])

        const fn = (fileName, next) => {
            const ext = path.extname(fileName)
            if (ext !== '.json') return  next();
            const basename = path.basename(fileName, ext)
            const wordInfo = JSON.parse(fs.readFileSync(path.join(hanziPath, fileName), "utf-8"));
            if (!wordInfo.img) return next();

            const imgExt = path.extname(wordInfo.img)
            downloadGifFile(`http://hanyu-word-gif.cdn.bcebos.com${wordInfo.img}`, 
            commonUtils.hanziToSaveBase(basename) + imgExt ,
            next
            )
        }

        const start = (index) => {
            const fileName = res[index];
            if (!fileName) return ;
            fn(fileName, () => {
                console.log(fileName)
                start(index+1)
            })
        }
         
        start(0)

    })
}

const downloadGifFile = (fileUrl, fileName, cb) => {
    https.get(fileUrl, function (res) {
        res.on('error', function () {
            cb && cb();
         })
        const writeStream = fs.createWriteStream(path.join(pagePublicGifs, fileName))
        res.on('data', function (chunk, encoding) {
            writeStream.write(chunk)
        })
        res.on("end", function () {
            // console.log('end')
            writeStream.end()
            cb && cb();
        })
    })
}

// downloadGifFile(`http://hanyu-word-gif.cdn.bcebos.com/b4a079f82427711e5addbc8e0eb15ce01.gif`, 'e0a1.gif')

batchFetchGif()

module.exports = batchFetchGif