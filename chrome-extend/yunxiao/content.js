// https://devops.aliyun.com/

const storekey = "xyyunxiao"
setInterval(function () {
    console.log('interval')
}, 10000)

let timer = null;

const reload = () => {
   localStorage[storekey] = timer = setInterval(function () {
        window.location.reload()
    }, 10000);
}

if (localStorage[storekey]) {
    reload()
}


chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log("from background");
        console.log(request, sender, sendResponse);
    }
);


document.querySelector('body').onmouseleave = () => {
    console.log('leave')
    reload()

    chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {
        // console.log(response.farewell);
        console.log("content: ");
        console.log(response);
    });
}

document.querySelector('body').onmouseenter = () => {
    console.log('onmouseenter')
    clearInterval(timer)
    localStorage.removeItem(storekey)
}

