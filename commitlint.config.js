/**
 * commitlint 在加载 TypeScript 配置时使用了 `ts-node`，但其速度较慢。
 * 为此，我们选择用 `esbuild` 替代，以提升加载性能。

 * 通过引入 `@esbuild-kit/cjs-loader` 模块，使得可以直接利用 esbuild 加载
 * TypeScript 配置文件（`commitlint.config.ts`），从而绕过 ts-node。
 * 这种方式利用了 esbuild 快速构建与转换的优势，显著提升了项目设置及配置加载的速度。
 */

// 引入 esbuild 基于 CJS 的加载器，以支持直接加载 TypeScript 配置文件
require('@esbuild-kit/cjs-loader')

// 导出 `./commitlint.config.ts` 文件中的默认配置
module.exports = require('./commitlint.config.ts').default
