const fs = require("fs")
const babel = require("@babel/core");

const filename = "./src/debugger.js";
const source = fs.readFileSync(filename, "utf8");



const res = babel.transformSync(source, {
  // presets: ["minify"],
  // babelrc: fals
  configFile: false,
  inputSourceMap: true,
  comments: false,
  plugins: [
    './plugin/cleandebugger'
  ],
});

// console.log(res.code)

fs.writeFileSync("./dist/index.js", res.code, "utf-8")
