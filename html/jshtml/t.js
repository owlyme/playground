var toCode = function (str) {
    var key = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";//定义密钥
    var len = key.length;
    var a = key.split("");//把秘钥字符串转为数组
    var s = "", b, b1, b2, b3;
    for (var i = 0; i < str.length; i++) {
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
var fromCode = function (str) {
    var key = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var len = key.length;
    var b, b1, b2, b3, d = 0, s;//定义临时变量
    s = new Array(Math.floor(str.length / 3));//计算密钥加密字符串可能包含的字符数，并定义数组
    b = s.length;//获取数组的长度
    for (var i = 0; i < b; i++) {
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

}

const enCode = toCode('<script> alert(1) </script>')

const unCode = fromCode(enCode)
console.log(enCode, unCode)