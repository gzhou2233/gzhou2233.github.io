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
      // 给文章中所有图片加点击放大
      mediumZoom('.vp-doc img', { background: 'rgba(0,0,0,0.8)' })
    }
    
    onMounted(() => {
      initZoom()
      // 页面切换时重新绑定
      watch(() => route.path, () => nextTick(() => initZoom()))
    })
  }
}
