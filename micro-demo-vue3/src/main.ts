import './assets/main.css'

import { createApp, type App } from 'vue'
import _App from './App.vue'
import router from './router'
import { renderWithQiankun, qiankunWindow, type QiankunProps } from 'vite-plugin-qiankun/dist/helper'
import actions from './qiankun/action'
let app: App<Element>
const render = (props?: QiankunProps) => {
  // if (!props) return
  // const { container } = props
  actions.setActions(props as any);
  app = createApp(_App)
  app.use(router).mount(props ? (props.container?.querySelector('#app') ?? '#app') : '#app')
}

const initQianKun = () => {
  renderWithQiankun({
    mount(props) {
      render(props)
    },
    bootstrap() { },
    unmount() {
      app.unmount()
    },
    update: function (): void | Promise<void> {
      throw new Error('Function not implemented.')
    }
  })
}

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render()
