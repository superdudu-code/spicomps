/**
 * 用于将声明文件复制到 dist/spicomps/es 与 dist/spicomps/lib
 */
import path, { resolve } from 'path'
import { fileURLToPath } from 'url'
import { copy, pathExists } from 'fs-extra'

const __filenameNew = fileURLToPath(import.meta.url)
const __dirnameNew = path.dirname(__filenameNew)

const projRoot = resolve(__dirnameNew, '..', '..')
/** `/dist` */
const buildOutput = resolve(projRoot, 'dist')
const epOutput = resolve(buildOutput, 'spicomps')

export const copyTypesDefinitions = async () => {
  const src = path.resolve(buildOutput, 'types')
  // 检查源目录是否存在
  const srcExists = await pathExists(src)
  if (!srcExists) {
    console.error(`源目录 ${src} 不存在`)
    return
  }
  // 递归复制文件但不覆盖已存在的文件, recursive 为 true 表示递归复制
  const copyOptions = { recursive: true, overwrite: false }

  // 将 ./dist/types/packages 的内容复制到 ./dist/spicomps/es 目录下,
  copy(src, resolve(epOutput, 'es'), copyOptions)
  // 将 ./dist/types/packages 的内容复制到 ./dist/spicomps/lib 目录下
  copy(src, resolve(epOutput, 'lib'), copyOptions)
}
