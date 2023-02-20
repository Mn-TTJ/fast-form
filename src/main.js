import { createApp } from 'vue'
import App from './App.vue'
import ui from 'mn-ttj-ui'
import 'mn-ttj-ui/dist/mn-ttj-ui.css'

const app = createApp(App)
app.config.errorHandler = (err, vm, info) => {
    console.log(err, vm, info)
    localStorage.clear()
}
app.use(ui).mount('#app')
