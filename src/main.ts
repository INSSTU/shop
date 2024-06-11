import "@/assets/styles/index.scss"

import App from './App.vue'
const app = createApp(App)

app.use(router)  //只有npm run dev后TS才能更新自动导入！！！

app.mount('#app')
