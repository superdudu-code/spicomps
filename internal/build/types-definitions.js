/**
 * 生成 xxx.d.ts 类型声明文件
 */

import process from 'process'
import path from 'path'
import { readFile } from 'fs/promises'
import { Project } from 'ts-morph'
import glob from 'fast-glob'
import * as vueCompiler from 'vue/compiler-sfc'

import { buildOutput, epRoot, pkgRoot, projRoot } from './utils/paths'
const TSCONFIG_PATH = path.resolve(projRoot, 'tsconfig.web.json')
const outDir = path.resolve(buildOutput, 'types')

const excludeFiles = (files) => {
  const excludes = ['node_modules', 'test', 'mock', 'gulpfile', 'dist']
  return files.filter((path) => {
    const position = path.startsWith(projRoot) ? projRoot.length : 0
    return !excludes.some((exclude) => path.includes(exclude, position))
  })
}

export const generateTypesDefinitions = async () => {
  const project = new Project({
    compilerOptions: {
      emitDeclarationOnly: true, // 是否只输出类型文件 .d.ts
      outDir, // 输出目录
      baseUrl: projRoot, // 用于解析非相对模块名称的目录
      preserveSymlinks: true, // 它对应了 Node.js 中 --preserve-symlinks 选项的行为，Node.js 有这样一个选项：–preserve-symlinks，可以设置成按照软链所在的位置查找依赖
      skipLibCheck: true, // 跳过.d.ts类型声明文件的类型检查。这样可以加快编译速度
      noImplicitAny: false, // 是否允许隐式声明 any 类型了
    },
    tsConfigFilePath: TSCONFIG_PATH, // 手动指定 tsconfig.json 文件作为 ts-morph 项目的 TypeScript 配置
    skipAddingFilesFromTsConfig: true, // 取消从 tsconfig.json 文件中添加 TypeScript 源文件
  })
  // 手动添加 TypeScript 源文件
  await addSourceFiles(project)
  // 进行类型检查
  typeCheck(project)
  // 进行代码生成
  project.emit()
}

async function addSourceFiles(project) {
  // 读取的文件类型 .js .jsx .ts .tsx .vue
  const globSourceFile = '**/*.{js?(x),ts?(x),vue}'
  // excludeFiles 函数上文有介绍，也就是过滤一些不需要的文件
  const filePaths = excludeFiles(
    await glob([globSourceFile, '!spicomps/**/*'], {
      cwd: pkgRoot, // 读取 packages 目录下除了 spicomps 目录的文件
      absolute: true, // 读取绝对路径
      onlyFiles: true, // 只读取文件
    })
  )
  const epPaths = excludeFiles(
    await glob(globSourceFile, {
      cwd: epRoot, // 读取 ./packages/spicomps 目录下的文件
      onlyFiles: true, // 只读取文件
    })
  )
  await Promise.all([
    // eslint-disable-next-line array-callback-return
    ...filePaths.map(async (file) => {
      if (file.endsWith('.vue')) {
        // 处理 .vue 文件
        // 读取 .vue 文件内容
        const content = await readFile(file, 'utf-8')
        // 初步解析出 template、script、scriptSetup、style 模块
        const sfc = vueCompiler.parse(content)
        const { script, scriptSetup } = sfc.descriptor
        if (script || scriptSetup) {
          // ? 可选链操作符
          let content = script?.content ?? ''
          if (scriptSetup) {
            // 如果存在 scriptSetup 则需要通过 compileScript 方法编译
            const compiled = vueCompiler.compileScript(sfc.descriptor, {
              id: 'xxx',
            })
            content += compiled.content
          }
          // 创建 TypeScript 源文件
          const lang = scriptSetup.lang || script.lang || 'js'
          // process.cwd()：获取当前进程工作目录
          // path.relative() 方法根据当前工作目录返回从 from 到 to 的相对路径
          project.createSourceFile(
            `${path.relative(process.cwd(), file)}.${lang}`,
            content
          )
        }
      } else {
        // 如果不是 .vue 文件则 addSourceFileAtPath 添加文件路径的方式添加 ts-morph 项目的 TypeScript 源文件
        project.addSourceFileAtPath(file)
      }
    }),
    ...epPaths.map(async (file) => {
      // 读取 ./packages/spicomps 目录下的文件，并手动通过 createSourceFile 方法添加 ts-morph 项目的 TypeScript 源文件
      const content = await readFile(path.resolve(epRoot, file), 'utf-8')
      project.createSourceFile(path.resolve(pkgRoot, file), content)
    }),
  ])
}
// 进行类型检查
function typeCheck(project) {
  const diagnostics = project.getPreEmitDiagnostics()
  if (diagnostics.length > 0) {
    console.error(project.formatDiagnosticsWithColorAndContext(diagnostics))
    const err = new Error('Failed to generate dts.')
    console.error(err)
    throw err
  }
}
