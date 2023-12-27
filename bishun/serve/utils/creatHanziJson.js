const path = require('path');
const fs = require('fs');
const createDir = require('./createDir');

const hanziPath = path.join(process.cwd(), `/public/hanzi`)
const pagePublicData = path.join(process.cwd(), `/page/public/data`)

createDir(pagePublicData)

const creatHanziJson = async (wd) => {
    fs.readdir(hanziPath, (err, res) => {
        if (err) return;
        const data = res.reduce((acc, fileName) => {
            const ext = path.extname(fileName)
            if (ext === '.json') {
                const wordInfo = JSON.parse(fs.readFileSync(path.join(hanziPath, fileName), "utf-8"));
                // acc.push({
                //     "cn": wordInfo.cn,
                //     "pinyin": wordInfo.pinyin,
                //     "path": wordInfo.path.length 
                // })
                acc[wordInfo.cn] = {
                    "pinyin": wordInfo.pinyin,
                    "path": wordInfo.path.length 
                }
            }
            return acc
        }, {})

        fs.writeFileSync(path.join(pagePublicData, `hanziData.json`), `${JSON.stringify(data, null, 2)}`);

    })
}
creatHanziJson()
module.exports = creatHanziJson