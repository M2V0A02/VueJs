import { createApp } from 'vue'
import App from './App'
import myButton from "@/components/UI/MyButton";
import components from "@/components/UI/index";

const app = createApp(App)
for (let key in components){
    app.component(components[key].name, components[key])
}

app.mount('#app')
