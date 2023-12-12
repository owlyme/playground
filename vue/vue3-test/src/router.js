import {createRouter,createWebHashHistory} from "vue-router";
import PageA from "./pages/PageA.vue";
import PageB from "./pages/PageB.vue";
import ModelP from "./pages/ModelP.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/pageA',
            component: PageA,
            meta: {
                title: '页面A'
            }
        },
        {
            path: '/pageB',
            component: PageB,
            meta: {
                title: '页面B'
            }
        },
        {
            path: '/modelP',
            component: ModelP,
            meta: {
                title: "ModelP"
            }
        }
    ]
})

const onSuccess= (...arg) => {
    console.log('路由初始化成功',...arg)
}

const onError= (...arg) => {
    console.log('路由初始化失败',...arg)
}

router.isReady().then((onSuccess)).catch(onError)

export default router