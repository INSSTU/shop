import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnpluginSvgComponent from 'unplugin-svg-component/vite'

// 导入自动导包的插件( 注意:加 vite )
import AutoImport from "unplugin-auto-import/vite"
// 导入自动导vue组件的插件( 注意:加 vite )
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnpluginSvgComponent({
      iconDir:["./src/assets/svg"],
      dts:true,
      dtsDir:"./src/types",
      prefix: 'icon',
    }),
    vue(),
    AutoImport({
      // imports用来指定需要自动导入的包(第三方的)
      imports:['vue', 'vue-router', 'pinia'],

      // 自动生成类型描述文件，让TS对这些导入有更好的支持
      dts:"./src/types/auto-imports.d.ts",

      // 指定一个目录，目录的模块会被自动导入（自己的本地模块）
      dirs: ['./src/**/*'],

      // 是否支持在vue模板中使用模块自动导入功能（dirs）
      vueTemplate: true,

      /* imports:[
        {
          vue: [[[ref], 'hello'], computed],
        },
        'vue-router',
        'pinia',
      ], */
    }),
    Components({
      dirs: ['./src/components', './src/layout', './src/views'],  //默认的自动导入，只在components里。其他文件需要手动添加。
      dts: "./src/types/components.d.ts", //用来区分组件与标签
    }), //上面不加 vite 这里会报错
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
