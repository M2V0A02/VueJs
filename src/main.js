import { createApp } from 'vue'
import App from './App'
import components from "@/components/UI/index";
import router from "@/router/router";

const app = createApp(App)
for (let key in components){
    app.component(components[key].name, components[key])
}

app.use(router).mount('#app')
