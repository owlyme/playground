const path = require('path');
// 导入 fs 模块
const fs = require('fs');
const child_process = require('child_process');

// 指定要监听的文件路径
const fileToWatch = path.join(process.cwd(), 'src');

const restart = () => {
  console.log('准备重启中...');
  const kill = (pid) => {
    console.log('杀死进程：', pid);
    child_process.exec('kill ' + pid);
  };

  const startTask = () => {
    console.log('启动新进程');
    const script = 'node ./index.js';
    const pid = child_process.spawn(script).pid;
    setTimeout(kill, 500, pid);
  };

  startTask();
};

const watcher = fs.watch(fileToWatch, restart);




// // 使用 fs.watch() 方法监听文件变化
// const watcher = fs.watch(fileToWatch, (eventType, filename) => {
//     console.log(`事件类型：${eventType}`);

    
//     if (filename) {
//         console.log(`文件名：${filename}`);
//     } else {
//         console.log('文件名未提供');
//     }
// });

// 监听事件结束时关闭 watcher
watcher.on('close', () => {
    console.log('监听器已关闭');
});

// 监听事件异常时关闭 watcher
watcher.on('error', (error) => {
    console.error('监听器发生错误：', error);
    watcher.close();
});

// 按下 Ctrl+C 关闭监听器
process.on('SIGINT', () => {
    watcher.close();
    console.log('监听器已手动关闭');
    process.exit();
});
