/**
 * 复制文件，用于复制 package/spicomps/package.json 到 dist/spicomps/package.json
 */

import { copyFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import { dirname, join, resolve } from 'path'

const __filenameNew = fileURLToPath(import.meta.url)
const __dirnameNew = dirname(__filenameNew)
const projRoot = resolve(__dirnameNew, '..', '..')

const pkgRoot = resolve(projRoot, 'packages')
const epRoot = resolve(pkgRoot, 'spicomps')
const epPackage = resolve(epRoot, 'package.json')

/** `/dist` */
const buildOutput = resolve(projRoot, 'dist')
/** `/dist/spicomps` */
const epOutput = resolve(buildOutput, 'spicomps')

// 复制
export const copyFiles = () =>
  copyFile(epPackage, join(epOutput, 'package.json'))
