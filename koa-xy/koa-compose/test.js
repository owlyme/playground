const fn1 = async (next) => {
    console.log(1)
   return await next() + 1
    console.log(1.1)
} 
const fn2 =  async (next) => {
    console.log(2)
return await  next() + 1
    console.log(2.1)
} 
const fn3 = async (next) => {
    console.log(3)
    return await new Promise(res => {
        setTimeout(() => {
            res() 
            next()
        }, 3000);
    }) 

    console.log(3.1)
} 
// const fn4 = async (next) => {
//     console.log(4)
//     await new Promise(res => {
//         setTimeout(() => {
//             res() 
//         }, 3000);
//     }) 

//     console.log(4.1)
// } 

const compose = (fnarr=[]) => {

    return  function () {
        let index = -1
        async function dispatch(i) {
            index = i
            const fn = fnarr[index]
            console.log(fnarr)
            if (!fn) return Promise.resolve()

            return Promise.resolve(fn(() => dispatch(i+1)))
        }
    
        return dispatch(0)
    }
}

console.log(compose([
    fn1,
    fn2,
    fn3,
])())

