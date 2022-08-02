import { createApp } from 'vue'
import App from './App'
import components from "@/components/UI/index";
import router from "@/router/router";
import directives from '@/directives/index';
import store from '@/store/index';
const app = createApp(App)

for (let key in components) {
    app.component(components[key].name, components[key])
}

for (let key in directives) {
    app.directive(directives[key].name, directives[key])
}


app.use(store).use(router).mount('#app')
