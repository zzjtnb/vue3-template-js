import {fileURLToPath, URL} from 'url';

import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

import Inspect from 'vite-plugin-inspect';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    vue(),
    Inspect(),
    AutoImport({
      // /* options */
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        'pinia',
        {
          '@vueuse/core': ['useEventListener', 'tryOnUnmounted', 'useTimeoutFn', 'useDraggable', 'useResizeObserver', 'useWindowSize'],
        },
      ],
      // // 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
      // // dts: 'types/auto-import.d.ts',
      dts: false,
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      //用于搜索组件的目录的相对路径。
      dirs: ['src/components/auto', 'src/assets/svg'],
      //组件的有效文件扩展名
      extensions: ['vue', 'svg', 'js'],
      //搜索子目录
      deep: true,
      //指令的自动导入
      //默认值:Vue 3 的`true`,Vue 2 的`false`
      directives: true,
      //生成`components.d.ts` 全局声明文件
      // dts: 'types/components.d.ts',
      dts: false,
      //允许子目录作为组件的命名空间前缀
      directoryAsNamespace: false,
      // 忽略命名空间前缀的子目录路径
      // 当`directoryAsNamespace: true` 时有效
      globalNamespaces: [],
      //用于转换目标的过滤器
      include: [/\.vue$/, /\.vue\?vue/, /\.svg$/],
      // 忽略的文件
      // exclude: ['src/components/exclude'],
      // 自定义组件的解析器
      resolvers: [ElementPlusResolver()],
    }),
  ],
  build: {
    sourcemap: false,
    brotliSize: false,
    // 消除打包大小超过500kb警告
    chunkSizeWarningLimit: 2000,
    // terserOptions: {
    //   compress: {
    //     //生产环境时移除console
    //     drop_console: true,
    //     drop_debugger: true,
    //   },
    // },
  },
});
