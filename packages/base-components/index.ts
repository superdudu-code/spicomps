import Button from './button'
export * from './button'

const Spicomps = {
  install(app: any) {
    app.component('SpButton', Button)
  },
}
export default Spicomps
