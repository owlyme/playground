Array.prototype.syncForEach = async function(fn) {
    const todolist = this;
    let index = 0;

    while (index < todolist.length) {
        await fn(todolist[index], index);
        index ++;
    }
};

const sleep = (delay) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(22);
        }, delay)
    })
};

[
    (index) => sleep(1000),
    (index) =>{
        return 'sync'+index;
    },
    (index) => sleep(1000)
].syncForEach(async (element, index) => {
   const res = await element(index)
   console.log(res)
})