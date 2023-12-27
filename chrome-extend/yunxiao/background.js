chrome.runtime.onInstalled.addListener(function () {
    console.log("插件已被安装");
});


chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");

    }
);


// chrome.alarms.create("UserReplyTimer", { periodInMinutes: 0.1 });

// chrome.alarms.onAlarm.addListener(() => {
//   chrome.action.setIcon({
//     path: getRandomIconPath(),
//   });
// });


// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     console.log('tabs', tabs)
//     chrome.tabs.sendMessage(tabs[0].id, { greeting: "hello" }, function (response) {
//         console.log('tabs', tabs)
//         console.log(response);
//     });
// });

