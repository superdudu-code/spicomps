import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

/*  /internal/build/utils/paths.js  */
export const __filenameNew = fileURLToPath(import.meta.url)
/*  /internal/build/utils  */
export const __dirnameNew = dirname(__filenameNew)
/*  /  */
export const projRoot = resolve(__dirnameNew, '..', '..', '..')

/*  /packages  */
export const pkgRoot = resolve(projRoot, 'packages')
/*  /packages/spicomps  */
export const epRoot = resolve(pkgRoot, 'spicomps')
/*  /packages/spicomps/package.json  */
export const epPackage = resolve(epRoot, 'package.json')

/** `/dist` */
export const buildOutput = resolve(projRoot, 'dist')
/** `/dist/spicomps` */
export const epOutput = resolve(buildOutput, 'spicomps')
