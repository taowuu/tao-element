import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'
import { toLine } from './utils'
import taoUI from './components'

const app = createApp(App)

for(let i in Icons) {
  // console.log((Icons as any)[i])
  // console.log(`el-icon-${toLine(i)}`)
  // 全局注册图标
  app.component(`el-icon-${toLine(i)}`, (Icons as any)[i])
}

app.use(router)
app.use(ElementPlus)
app.use(taoUI)
app.mount('#app')
