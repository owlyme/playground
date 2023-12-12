let __trackfn = null

const reactive = (fn) => {
    __trackfn = fn 
    fn()
    __trackfn = null
}

function createReactiveObj(obj) {
   
    const object1 = {};
    for (let key in obj) {
        let value = obj[key];
        const deps = [];
        Object.defineProperty(object1, key, {
            enumerable: true,
            get: function () {
                deps.push(__trackfn)
                return value
            },
            set: function (val) {
                value = val
                deps.forEach(fn => fn())
            },
        });
    }
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