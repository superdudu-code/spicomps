/**
 * 复制文件，用于复制 package/spicomps/package.json 到 dist/spicomps/package.json
 */

import { copyFile, mkdir } from 'fs/promises'
import { join, resolve } from 'path'

import { epOutput, epPackage, projRoot } from './utils/paths'

// 复制
export const copyFiles = async () => {
  await Promise.all([
    copyFile(epPackage, join(epOutput, 'package.json')),
    copyFile(resolve(projRoot, 'README.md'), join(epOutput, 'README.md')),
    copyFile(
      resolve(projRoot, 'typings', 'global.d.ts'),
      resolve(epOutput, 'global.d.ts')
    ),
  ])
}

// 复制全样式
export const copyFullStyle = async () => {
  await mkdir(resolve(epOutput, 'dist'), { recursive: true })
  await copyFile(
    resolve(epOutput, 'theme-chalk/index.css'),
    resolve(epOutput, 'dist/index.css')
  )
}
