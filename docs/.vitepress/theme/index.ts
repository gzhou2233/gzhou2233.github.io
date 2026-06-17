import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import mediumZoom from 'medium-zoom'
import { useRoute } from 'vitepress'
import './style.css'

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()
    
    const initZoom = () => {
      mediumZoom('.vp-doc img', {
        background: 'rgba(0,0,0,0.85)',
        margin: 24
      })
    }
    
    onMounted(() => {
      initZoom()
      // 页面切换时重新绑定
      watch(() => route.path, () => nextTick(() => initZoom()))
    })
  }
}
