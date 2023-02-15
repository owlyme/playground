// 客户端请求示例
const zlib = require('zlib');
const https = require('https');
const fs = require('fs');
const { pipeline } = require('stream');

module.exports = (url, filePath) => {
    const request = https.get(url);
    request.on('response', (response) => {
        const output = fs.createWriteStream(filePath);

        const onError = (err) => {
            if (err) {
                console.error('An error occurred:', err);
                process.exitCode = 1;
            }
        };

        switch (response.headers['content-encoding']) {
            case 'br':
                pipeline(response, zlib.createBrotliDecompress(), output, onError);
                break;
            // 或者，只需使用 zlib.createUnzip() 来处理以下两种情况：
            case 'gzip':
                pipeline(response, zlib.createGunzip(), output, onError);
                break;
            case 'deflate':
                pipeline(response, zlib.createInflate(), output, onError);
                break;
            default:
                pipeline(response, output, onError);
                break;
        }
    });
}