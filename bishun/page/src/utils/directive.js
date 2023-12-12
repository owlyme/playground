export default function (app) {
    app.directive('baidugifsrc', (el, binding) => {
        el.src = "/gifs/" + encodeURIComponent(binding.value).replace(/%/g, '-')+".gif"
    })
    app.directive('baidupagehref', (el, binding) => {
        // 这会在 `mounted` 和 `updated` 时都调用
        el.href = `https://hanyu.baidu.com/s?wd=${binding.value}&ptype=zici`
    })
}
