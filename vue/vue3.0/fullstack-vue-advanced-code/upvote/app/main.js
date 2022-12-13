const World ={
    template: "<span>world</span>"
}

const App = {
    data() {
        return {}
    },
    components : {
        World: World
    }
}

Vue.createApp(App).mount("#app")