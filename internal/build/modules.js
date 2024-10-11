/**
 * 生成不同模块（cjs、mjs）的 全量打包文件
 */
import { resolve } from 'path'

import { rollup } from 'rollup'
import vue from '@vitejs/plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
import glob from 'fast-glob'
import { SpicompsPlusAlias } from './plugins/alias'

import { epOutput, epRoot, pkgRoot, projRoot } from './utils/paths'

const excludeFiles = (files) => {
  const excludes = ['node_modules', 'test', 'mock', 'gulpfile', 'dist']
  return files.filter((path) => {
    const position = path.startsWith(projRoot) ? projRoot.length : 0
    return !excludes.some((exclude) => path.includes(exclude, position))
  })
}

// 模块化打包任务函数
export const buildModules = async () => {
  const input = excludeFiles(
    await glob('**/*.{js,ts,vue}', {
      cwd: pkgRoot, // /packages
      absolute: true, // 返回绝对路径
      onlyFiles: true, // 只返回文件的路径
    })
  )
  const bundle = await rollup({
    input, // 配置入口文件
    plugins: [
      // 配置插件
      SpicompsPlusAlias(),
      vue(),
      nodeResolve({
        extensions: ['.ts'],
      }),
      esbuild(),
    ],
    // 排除不进行打包的 npm 包，例如 Vue，以便减少包的体积
    external: [
      'vue',
      '@vueuse/core',
      '@floating-ui/dom',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/vue-fontawesome',
    ],
  })

  // 配置输出文件格式
  bundle.write({
    format: 'esm', // 配置输出格式
    dir: resolve(epOutput, 'es'), // 配置输出目录
    preserveModules: true, // 该选项将使用原始模块名作为文件名，为所有模块创建单独的 chunk
    preserveModulesRoot: epRoot, // 将spicomps 目录作为根目录
    sourcemap: true,
    entryFileNames: `[name].mjs`, // [name]：入口文件的文件名（不包含扩展名），也就是生产 .mjs 结尾的文件
  })
  bundle.write({
    format: 'cjs', // 配置输出格式
    dir: resolve(epOutput, 'lib'), // 配置输出目录
    preserveModules: true, // 该选项将使用原始模块名作为文件名，为所有模块创建单独的 chunk
    preserveModulesRoot: epRoot, // 将spicomps 目录作为根目录
    sourcemap: true,
    exports: 'named',
    entryFileNames: `[name].cjs`, // [name]：入口文件的文件名（不包含扩展名），也就是生产 .cjs 结尾的文件
  })
}
