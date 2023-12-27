const fs = require('fs');
const path = require('path');

module.exports = (pngsDir) => {
    if (!fs.existsSync(pngsDir)) {
        fs.mkdirSync(pngsDir, { recursive: true })
    }
}