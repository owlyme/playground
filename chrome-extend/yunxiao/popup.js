document.addEventListener("DOMContentLoaded", function () {
    alert(document.getElementById("closeBtn"))

    console.log('在这里添加你的代码，例如：', document.getElementById("closeBtn"))
    // // 在这里添加你的代码，例如：
    document.getElementById("closeBtn").addEventListener("click", function () {
        console.log("closeBtn")
    });
});


