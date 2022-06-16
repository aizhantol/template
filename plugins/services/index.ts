/* eslint-disable import/no-mutable-exports */
import { Context, Plugin } from '@nuxt/types'
import Deserialize from 'services/Deserialize'
import ErrorHandler from 'services/ErrorHandler'
import { IErrorHandler } from 'services/ErrorHandler/ErrorHandler.interface'

type servicesT = {
  errors: IErrorHandler
  deserialize: Deserialize
}

let $servicesAccessor: servicesT

declare module '@nuxt/types' {
  interface Context {
    $services: servicesT
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $services: servicesT
  }
}

const plugin: Plugin = (ctx: Context, inject) => {
  const services = {
    errors: new ErrorHandler(ctx.error, ctx.store),
    deserialize: new Deserialize(),
  }
  $servicesAccessor = services

  inject('services', services)
}

export default plugin
export { $servicesAccessor }
