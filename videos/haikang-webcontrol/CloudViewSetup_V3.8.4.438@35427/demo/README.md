# webcontrol 与 OCX 控件

webcontrol 是一个网页「嵌」客户端窗口的方案，基本原理是根据浏览器基于不同通讯协议（WebSocket、Image HTTP、ActiveX），与客户端约定一套通讯接口，控制客户端窗口覆盖在浏览器窗口的位置，实现「嵌入」。详细文档见 demo\js\webcontrol-1.1.5\README.md

OCX 控件是实现视频播放功能的插件，依托于 webcontrol 和浏览器结合在一起，另外有详细接口文档说明：云眸视频控件接口文档 V3.8.2.docx

## 如何实现自动播放

demo 中为了展示每个功能的步骤，需要点击按钮实现下一步，如果实际场景是自动播放的话，可能找不到每个功能调用的时机，这里说明一下如何实现自动播放

- 初始化 webcontrol

```bash
function WebControlInit(id, cbConnectSuccess, cbConnectError, cbConnectClose) {
  return new WebControl({
    szPluginContainer: id,
    iServicePortStart: 14510, // 对应 LocalServiceConfig.xml 中的ServicePortStart值
    iServicePortEnd: 14510, // 对应 LocalServiceConfig.xml 中的ServicePortEnd值
    cbConnectSuccess: cbConnectSuccess,
    cbConnectError: cbConnectError,
    cbConnectClose: cbConnectClose,
  });
}
```

- 创建 webcontrol 服务：在上一步定义的 cbConnectSuccess 方法中执行

```bash
oWebControl.JS_StartService('window', {dllPath:'./chain/cloudTransform.dll',}).then(function () {
  //创建成功
});
```

- 创建 webcontrol 窗口：在上一步 then 方法中执行

```bash
oWebControl.JS_CreateWnd('playWnd', 900, 500).then(function () {
  //创建成功
});
```

- 初始化 OCX 控件，在上一步 then 方法中执行

```bash
oWebControl.JS_RequestInterface({
  funcName: 'Init',
  arguments: encodeURI(JSON.stringify(argumentsPram)),
})
.then(function (oData) {
  // OCX控件初始化是异步的，这里收到结果不代表初始化成功，初始化成功的回调要监听控件返回的FireInitResult事件
});
```

- 调用 OCX 控件的预览/回放来播放视频：监听事件 cbIntegrationCallBack 中监听到 FireInitResult 返回成功后再执行

```bash
oWebControl.JS_RequestInterface({
  funcName: 'StartPreview',
  arguments: encodeURI(JSON.stringify(argumentsPram)),
})
.then(function (oData) {
  // 预览成功
});
```
