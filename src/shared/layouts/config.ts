import { MainLayout } from './MainLayout'
import { AuthLayout } from './AuthLayout'

export const layouts = {
  main: MainLayout,
  auth: AuthLayout,
} as const

export type LayoutType = keyof typeof layouts 