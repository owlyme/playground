// import './assets/main.css'
import 'vant/lib/index.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index"
import directive from './utils/directive';


const app = createApp(App);
app.use(router);
directive(app);

app.mount('#app')

