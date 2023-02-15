const getFile = require("./index")
const path = require("path")
const fs = require('fs')

const toCode = function (str) {
    const key = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";//定义密钥
    const len = key.length;
    const a = key.split("");//把秘钥字符串转为数组
    let s = "", b, b1, b2, b3;
    for (let i = 0; i < str.length; i++) {
        b = str.charCodeAt(i);
        b1 = b % len;
        b = (b - b1) / len;
        b2 = b % len;
        b = (b - b2) / len;
        b3 = b % len;
        s += a[b3] + a[b2] + a[b1];//根据这些余数值映射到密钥对应下标值得字符
    }
    return s;
}


const fromCode = `function fromCode (str) {
    const key = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const len = key.length;
    let b, b1, b2, b3, d = 0, s;//定义临时变量
    s = new Array(Math.floor(str.length / 3));//计算密钥加密字符串可能包含的字符数，并定义数组
    b = s.length;//获取数组的长度
    for (let i = 0; i < b; i++) {
        //遍历加密字符串
        b1 = key.indexOf(str.charAt(d));//截取周期内第一个字符，并计算它在密钥中的下标值
        d++;
        b2 = key.indexOf(str.charAt(d));//截取周期内第二个字符，并计算它在密钥中的下标值
        d++;
        b3 = key.indexOf(str.charAt(d));//截取周期内第三个字符，并计算它在密钥中的下标值
        d++;
        s[i] = b1 * len * len + b2 * len + b3 //利用上面下标值反算被加密字符的Unicode的码

    }
    b = eval("String.fromCharCode(" + s.join(',') + ")");//调用String.fromCharCode()算出对应的字符串
    return b;
};
`
const getAndExcuScriptstr =`function getAndExcuScript (domParser) {
    const head = document.querySelector("head")
    const body = document.querySelector("body")
    
    async function parser(parentNode, htmlParent) {
        // parentNode.querySelectorAll("script").forEach(script => {
        //     const newEle = document.createElement("script");
           
        //     if (script.src) {
        //         newEle.onload = () => {
        //             console.log(htmlParent)
        //         }
        //         newEle.src = script.src
        //     } else {
        //         newEle.innerText = script.innerText
        //     }
        //     htmlParent.appendChild(newEle)
        //     script.remove()
        // }); 

        var nodeList = parentNode.querySelectorAll("script");
        for (var i = 0; i < nodeList.length; i++) {
            await new Promise(resolve => {
                var script = nodeList[i]
                const newEle = document.createElement("script");
                
                if (script.src) {
                    newEle.onload = () => {
                        resolve()
                    }
                    newEle.src = script.src
                } else {
                    newEle.innerText = script.innerText
                    resolve()
                }
                htmlParent.appendChild(newEle)
                script.remove()
            })
        }
    }

    parser(domParser.head, head)
    parser(domParser.body, body)

    // document.querySelector('body').appendChild(domParser.head)
    // document.querySelector('body').appendChild(domParser.body)
};
getAndExcuScript(parser);
`


const s = fs.readFileSync(
    path.join(process.cwd(), 'html/jshtml/index1.html'), "utf-8" 
)

const umi = fs.readFileSync(
    path.join(process.cwd(), 'html/jshtml/ding_store/dist/umi.c5af36d7.js'), "utf-8" 
)

// fs.writeFileSync(
//     path.join(process.cwd(), 'html/jshtml/code.js'), 
//     fromCode + `document.write(fromCode('${toCode(s)}'));`
// )

fs.writeFileSync(
    path.join(process.cwd(), 'html/jshtml/code.js'), 
    fromCode + `var parser = domparser.parseFromString(fromCode('${toCode(s)}'), 'text/html');` + getAndExcuScriptstr + umi
)


