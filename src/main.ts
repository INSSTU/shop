import "@/assets/styles/index.scss"
import App from './App.vue'
import SvgIcon from '~virtual/svg-component'

const app = createApp(App)

// 将svgicon设置为全局组件
app.component(SvgIcon.name, SvgIcon)

app.use(router)  //只有npm run dev后TS才能更新自动导入！！！

app.mount('#app')


