https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md

https://astexplorer.net/#/Z1exs6BWMq

Most compilers break down into three primary stages: Parsing, Transformation, Code Generation

@babel/core @babel/cli

presets

https://mp.weixin.qq.com/s/Nf4nnbhUDhf8V2sTkm85Xw

# babel
1. 源码到源码的转换
2. 转换分三步 
    1. 解析（parse） code -> ast
    2. 转换（transform）ast -> ast
    3. 生成（generate）ast -> code

# babel plugin
1. 插件的类
```typeScript
    export interface PluginObj<S = PluginPass> {
        name?: string | undefined
        manipulateOptions?(opts: any, parserOptions:any): void 
        pre?(this, file: BabelFile) => void
        visitor: Visitor<S>
        post?(this, file: BabelFile) => void
        inherits?: any
    }
```
2. 插件的基本形式
```javaScript
export default function (api, options, dirname) {
    return {
        visitor: {
            StringLiteral(path, state) {},
        }
    }
}
```

### 取消注释
comments: false,

### 插入脚本
