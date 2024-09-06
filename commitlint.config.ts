import { execSync } from 'child_process'
import fg from 'fast-glob'

/**
 * 获取指定路径下的所有目录。
 * @param packagePath - 包路径。
 * @returns 返回一个包含所有目录的数组。
 */
const getPackages = (packagePath) =>
  fg.sync('*', { cwd: packagePath, onlyDirectories: true })

const scopes = [
  ...getPackages('packages'),
  ...getPackages('internal'),
  'docs',
  'play',
  'project',
  'core',
  'style',
  'ci',
  'dev',
  'deploy',
  'other',
  'typography',
  'color',
  'border',
  'var',
  'ssr',
]

// 执行 git status 命令，获取当前 Git 项目状态。
const gitStatus = execSync('git status --porcelain || true')
  .toString()
  .trim()
  .split('\n')

// 从 git 状态中解析当前变更的 package 名称。
const scopeComplete = gitStatus
  .find((r) => ~r.indexOf('M  packages'))
  ?.replace(/\//g, '%%')
  ?.match(/packages%%((\w|-)*)/)?.[1]

// 从 git 状态中解析当前变更的组件名。
const subjectComplete = gitStatus
  .find((r) => ~r.indexOf('M  packages/components'))
  ?.replace(/\//g, '%%')
  ?.match(/packages%%components%%((\w|-)*)/)?.[1]

// 配置 commitlint 的规则和提示信息。
export default {
  rules: {
    // 确保提交信息的 scope 属性遵循预定义的枚举值。
    'scope-enum': [2, 'always', scopes],
    // 确保提交信息的正文以空行开始。
    'body-leading-blank': [1, 'always'],
    // 确保提交信息的脚注以空行开始。
    'footer-leading-blank': [1, 'always'],
    // 确保提交信息的标题长度不超过72个字符。
    'header-max-length': [2, 'always', 72],
    // 确保提交信息的 scope 使用小写。
    'scope-case': [2, 'always', 'lower-case'],
    // 确保提交信息的标题符合指定的大小写规则。
    'subject-case': [
      1,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    // 确保提交信息的标题不为空。
    'subject-empty': [2, 'never'],
    // 确保提交信息的标题不以句点结尾。
    'subject-full-stop': [2, 'never', '.'],
    // 确保提交信息的类型使用小写。
    'type-case': [2, 'always', 'lower-case'],
    // 确保提交信息的类型不为空。
    'type-empty': [2, 'never'],
    // 确保提交信息的类型遵循预定义的枚举值。
    'type-enum': [
      2,
      'always',
      [
        'build', // 主要目的是修改项目构建系统（例如glup，webpack，rollup的配置等）的提交
        'chore', // 构建过程或辅助工具的变化
        'ci', // 修改项目的持续集成流程（Kenkins、Travis等）的提交
        'docs', // 文档提交（documents）
        'feat', // 新增功能（feature）
        'fix', // 修复 bug
        'perf', // 性能、体验相关的提交
        'refactor', // 代码重构
        'revert', // 回滚某个更早的提交
        'style', // 不影响程序逻辑的代码修改、主要是样式方面的优化、修改
        'test', // 测试相关的开发
      ],
    ],
  },
  // 提供交互式命令行界面的配置项。
  prompt: {
    defaultScope: scopeComplete,
    customScopesAlign: !scopeComplete ? 'top' : 'bottom',
    defaultSubject: subjectComplete && `[${subjectComplete}] `,
    allowCustomIssuePrefixs: false,
    allowEmptyIssuePrefixs: false,
  },
}
