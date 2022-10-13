const fs = require("fs")
const path = require("path")
const rootPath = process.cwd();

module.exports = (filename, stream) => {
    fs.writeFileSync(path.join(rootPath, './output', filename), stream)
}