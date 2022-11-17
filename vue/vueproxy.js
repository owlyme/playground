const Observer = function (data) {
    // 循环修改为每个属性添加get set
    // for (let key in data) {
       return defineReactive(data);
    // }
}

const defineReactive = function (obj1) {
    // 局部变量dep，用于get set内部调用
    const dep = new Dep();
 
    const handler = {
        get: function(obj, prop) {
            dep.depend();
            return obj[prop];
        },
        set: function(obj, prop, value) {
            if (obj[prop] === value) return;
            obj[prop] = value
            dep.notify();
            return true
        }
    };

   return new Proxy(obj1, handler);
}

const observe = function (data) {
    return defineReactive(data);
}

const Vue = function (options) {
    const self = this;
    // 将data赋值给this._data，源码这部分用的Proxy所以我们用最简单的方式临时实现
    if (options && typeof options.data === 'function') {
        this._data = options.data.apply(this);
    }
    // 挂载函数
    this.mount = function () {
        new Watcher(self, self.render);
    }
    // 渲染函数
    this.render = function () {
        console.log('render', self._data);
        const app = document.querySelector("#app");
        with (self) {
            app.innerHTML = `${_data.text}`
        }
    }
    // 监听this._data
    this._data = observe(this._data);
}

const Watcher = function (vm, render) {
    const self = this;
    this.vm = vm;
    // 将当前Dep.target指向自己
    Dep.target = this;
    // 向Dep方法添加当前Wathcer
    this.addDep = function (dep) {
        dep.addSub(self);
    }
    // 更新方法，用于触发vm._render
    this.update = function () {
        console.log('in watcher update');
        render();
    }
    // 这里会首次调用vm._render，从而触发text的get
    // 从而将当前的Wathcer与Dep关联起来
    this.value = render();
    // 这里清空了Dep.target，为了防止notify触发时，不停的绑定Watcher与Dep，
    // 造成代码死循环
    Dep.target = null;
}

const Dep = function () {
    const self = this;
    // 收集目标
    this.target = null;
    // 存储收集器中需要通知的Watcher
    this.subs = [];
    // 当有目标时，绑定Dep与Wathcer的关系
    this.depend = function () {
        if (Dep.target) {
            // 这里其实可以直接写self.addSub(Dep.target)，
            // 没有这么写因为想还原源码的过程。
            Dep.target.addDep(self);
        }
    }
    // 为当前收集器添加Watcher
    this.addSub = function (watcher) {
        self.subs.push(watcher);
    }
    // 通知收集器中所的所有Wathcer，调用其update方法
    this.notify = function () {
        for (let i = 0; i < self.subs.length; i += 1) {
            self.subs[i].update();
        }
    }
}

const data = {
    text: 'hello world',
}

const vue1 = new Vue({
    data() {
        return data
    }
})


vue1.mount();

// vue._data.text = '123'; // in watcher update /n in get
