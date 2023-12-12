# H5视频播放插件
==============================================

请认真阅读本文档，以便提高开发以及发布效率，减少出现BUG。

部署要求：
安装包直接复制http服务器根目录

http-flv播放器主要js文件包含：
flv.min.js
flv.min.js.map
libffmpeg.js
libffmpeg.wasm
decode-thread.js


### Instance methods and properties
播放器创建：
ulujs.createPlayer(mediaSource,config)


播放器回调错误：
uluPlayer.on_message(function(e){})


播放
@div 元素
uluPlayer.play(#div)


关闭
uluPlayer.stop()


销毁
uluPlayer.destroy()


如有问题，请及时沟通！
pgshou@ulucu.com