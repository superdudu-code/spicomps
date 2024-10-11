/**
 * 用于全量打包的执行文件
 */
import { resolve } from 'path'

import { rollup } from 'rollup'
import vue from '@vitejs/plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'

import { epOutput, epRoot } from './utils/paths'

/**
 * 全量打包入口函数
 */
export const buildFullEntry = async () => {
  const bundle = await rollup({
    input: resolve(epRoot, 'index.ts'), // 配置入口文件
    plugins: [
      // 配置插件
      vue(),
      nodeResolve({
        extensions: ['.ts'],
      }),
      esbuild(),
    ],
    // 排除不进行打包的 npm 包，例如 Vue，以便减少包的体积
    external: ['vue'],
  })
  // 配置输出文件格式
  bundle.write({
    format: 'umd',
    file: resolve(epOutput, 'dist', 'index.full.js'),
    name: 'Spicomps',
    globals: {
      vue: 'Vue',
    },
  })
}
