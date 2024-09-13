import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import Icon from './src/icon.vue'

library.add(faSpinner)

Icon.install = (app: any) => {
  app.component(Icon.name, Icon)
}

export const SpIcon = Icon

export default SpIcon
