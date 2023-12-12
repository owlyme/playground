let __trackfn = null

const reactive = (fn) => {
    __trackfn = fn 
    fn()
    __trackfn = null
}

function createReactiveObj(obj) {
    const deps = []
    const object1 = new Proxy(obj, {
        get(target, prop, receiver) {
            deps.push(__trackfn)

            return Reflect.get(target, prop, receiver)
        },
        set(target, prop, value, receiver) {
      
            Reflect.set(target, prop, value, receiver)
            deps.forEach(fn => fn())
        }
    })
   
    return object1;
}

const reactObj = createReactiveObj({
    name: 'zhangsan',
    age: 18
})

const getName = () => {
    console.log(reactObj.name);
}

reactive(getName)

setTimeout(() => {reactObj.name = 'lisi'}, 2000)


// console.log(reactObj.name  + reactObj.age);