import { createApp } from 'vue'
import App from './App'
import myButton from "@/components/UI/MyButton";
import components from "@/components/UI/index";

console.log(components)

const app = createApp(App)
//app.component(components.MyButton.name, components.MyButton)
for (let key in components){
    app.component(components[key].name, components[key])
}

//app.component('my-button', myButton)

app.mount('#app')
