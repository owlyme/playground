const fs = require('fs');
const svg2img = require('svg2img');
const path = require('path');
const createDir = require('./createDir');
const commonUtils = require('./common');

const hanziPath = path.join(process.cwd(), `/public/hanzi`)
const pngsDir = path.join(process.cwd(), `/page/public/pngs`)
createDir(pngsDir);


function resortPath(pathes = [], redIndex = 0) {
    const _pathes = [...pathes]
    const redPath = _pathes.splice(redIndex, 1);
    const blackPath = _pathes.splice(0, redIndex);

    return [
        ..._pathes.map(path => ({
            path,
            color: "rgb(184, 184, 184)"
        })),
        ...blackPath.map(path => ({
            path,
            color: "rgb(31, 31, 31)"
        })),
        ...redPath.map(path => ({
            path,
            color: "rgb(255, 17, 17)"
        }))
    ]
}

function createPathString(pathes = [], offsetY = 0) {
    const pathTemp = (path, color) => `<path d="${path}" style="fill: ${color}"></path>`;

    return pathes.map((_, redIndex) => resortPath(pathes, redIndex))
        .map((newPathes, index) => {
            return `<g transform="translate(3, ${70 + offsetY * index}) scale(0.07, -0.07)">${newPathes.map(({ path, color }) => pathTemp(path, color)).join('') // 一个字的所有笔画
                }</g>`
        })
}

function createSvgString(pathes = []) {
    const len = pathes.length
    const width = 83;
    const height = len * width

    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    ${createPathString(pathes, width)}</svg>`
}



// createSvgString(pathes).forEach((svgString, index) => {
//     svg2img(svgString, {
//         'quality': 100,
//         resvg: {
//             fitTo: {
//                 mode: 'width', // or height
//                 value: 120
//             },
//         }
//     }, function (error, buffer) {
//         const dir = path.join(pngsDir, commonUtils.hanziToSaveBase("啊"))
//         createDir(dir)
//         fs.writeFileSync(path.join(dir, `${index}.png`), buffer);
//     });
// })



const creaetPng = (hanzi, pathes) => svg2img(createSvgString(pathes), {
    'quality': 100,
    resvg: {
        fitTo: {
            mode: 'width', // or height
            value: 120
        },
    }
}, function (error, buffer) {
    fs.writeFileSync(path.join(pngsDir, `${commonUtils.hanziToSaveBase(hanzi)}.png`), buffer);
});



const readdir =  () => {
    const files = fs.readdirSync(hanziPath);
    return files.reduce((acc, fileName) => {
        const ext = path.extname(fileName)
        const hanzi = path.basename(fileName, ext)
        if (ext === '.json') {
            const wordInfo = JSON.parse(fs.readFileSync(path.join(hanziPath, fileName), "utf-8"));
            acc[hanzi] = wordInfo.path
        }
        return acc
    }, {});
}

console.log('start')

Object.entries(readdir()).forEach(([key, value]) => {
    creaetPng(key, value)
})






