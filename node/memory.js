

console.log(process.memoryUsage())

let arr = [];
const takeLargeSize = () => {

    for(let i = 0; i < 99999999; i++) {
        arr.push(i)
    }

    // return  () => {
    //     return {
    //         a: arr,
    //         clear: () => {arr = null}
    //     }
    // }
};

takeLargeSize()
console.log(process.memoryUsage())
// let a = lagreSize
// console.log(process.memoryUsage())
// a = null
// lagreSize = null
arr = null
setTimeout(() => {
    console.log(3, process.memoryUsage())
}, 3000)

