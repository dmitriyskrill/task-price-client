import { RouteLocationNormalized } from 'vue-router'

declare module 'vue' {
  interface ComponentCustomProperties {
    $route: RouteLocationNormalized
  }
}