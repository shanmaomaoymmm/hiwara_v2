import { createApp } from "vue"
// import "./assets/styles.css"
import "./assets/main.scss"
import App from "./App.vue"
import router from "./js/router"
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App)
const vuetify = createVuetify({
  components,
  directives,
})

app.use(vuetify)
app.use(router)
app.mount("#app")