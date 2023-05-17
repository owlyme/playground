function throll(fn, delay = 1000) {
    let pretime = Date.now();
    return (...arg) => {
        const currtime = Date.now();
        const lefttime = currtime - pretime;
        if (lefttime >= delay) {
            pretime = currtime;
            fn(...arg);
        }
    }
}

const th = throll(() => {
    console.log('123 ')
})

th();
th();
th();

const execToDo =  async (todolist=[], sp = 100) => {
    const sleep = (delay) => {
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve();
            }, delay)
        })
    }
        
    let index = 0;
    while (todolist[index]) {
        await sleep(sp);
        todolist[index]();
        index ++;
    }
}

execToDo([
    () => console.log(1),
    () => console.log(2),
    () => console.log(3),
    () => console.log(4),
    () => console.log(5)
], 1000)