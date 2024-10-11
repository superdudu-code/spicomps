import { parallel, series } from 'gulp'
import { buildFullEntry } from './full-bundle.js'
import { buildModules } from './modules.js'
import { generateTypesDefinitions } from './types-definitions.js'
import { copyTypesDefinitions } from './copyTypesDefinitions.js'
import { copyFiles, copyFullStyle } from './copyFiles.js'
import { run } from './utils/process'

// 这里的代码，是为了解决 vue 3.3.x以后，构建报错 __name 的问题，
// 可以看这个 https://github.com/vuejs/core/issues/8303
const __defProp = Object.defineProperty
const __name = (target, value) =>
  __defProp(target, 'name', { value, configurable: true })
// eslint-disable-next-line no-undef
globalThis.__name = __name

export default series(
  () => run('pnpm run clean'),
  parallel(
    buildModules,
    buildFullEntry,
    generateTypesDefinitions,
    series(() => run('pnpm run -C packages/theme-chalk build'), copyFullStyle)
  ),
  parallel(copyTypesDefinitions, copyFiles)
)
