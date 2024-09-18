import Button from './src/button.vue'

Button.install = (app: any) => {
  app.component(Button.name, Button)
}

export const SpButton = Button

export default SpButton
