function debounce (fn) {
    let timer = null
   return  (...arg) => {
        return new Promise((resolve, reject) => {
            if (timer) {
                clearTimeout(timer)
                // reject('has next run again')wwee4
            }
            timer = setTimeout(() =>{
                resolve(fn(...arg))
            }, 3000)
        })  
   }
}

const dblog = debounce((a,b,c) => {
    console.log('12313');
   return a + b + c ;
}) 

// dblog(1,2,3)
dblog(1,2,3).then((res) =>{console.log(res)});
dblog(1,2,3).then((res) =>{console.log(res)});

