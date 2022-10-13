import { createApp } from 'vue'
import App from './App.vue'
import isInIcestark from '@ice/stark-app/lib/isInIcestark';
// import setLibraryName from '@ice/stark-app/lib/setLibraryName';

// createApp(App).mount('#app')
// setLibraryName('microApp')
let vue = null

export function mount({ container }) {
    vue = createApp(App);
    vue.mount(container);
  }
  
export function unmount() {
vue.unmount();
}

if (!isInIcestark()) {
createApp(App).mount('#app');
}