const path = require('path');
const fs = require('fs');

const hanziLib = path.join(process.cwd(), `/public/hanzi/hanziLib.js`);
const hanziPath = path.join(process.cwd(), `/public/hanzi`)
const pagePublicScript = path.join(process.cwd(), `/page/public/hanziLib.js`)

const creatHanziScript = async (wd) => {
    fs.readdir(hanziPath, (err, res) => {
        if (err) return;
        const data = res.reduce((acc, fileName) => {
            const ext = path.extname(fileName)
            if (ext === '.js') return acc;
            const hanzi = path.basename(fileName, ext)

            const wordInfo = JSON.parse(fs.readFileSync(path.join(hanziPath, fileName), "utf-8"));

            acc[hanzi] = {
                "cn": wordInfo.cn,
                "pinyin": wordInfo.pinyin,
                "path": wordInfo.path
            }
            return acc;
        }, {})

        fs.writeFileSync(hanziLib, `var hanziLib=${JSON.stringify(data)}`);
        fs.copyFileSync(hanziLib, pagePublicScript);
    })
}
creatHanziScript()
module.exports = creatHanziScript