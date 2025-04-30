import { createContext, useContext } from 'react'
import { SIZES } from '../utils/constants'
// import type { TypeAttributes } from '../@types/common'
import type {
  Direction,
  Mode,
  ControlSize,
  LayoutType,
  Specialty,
} from '@/@types/theme'

export type Config = {
  locale: string
  themeSchema: string
  mode: Mode
  panelExpand: boolean
  controlSize: ControlSize
  layout: {
    type: LayoutType
    sideNavCollapse: boolean
    previousType?: LayoutType | ''
  }
  direction: Direction
  specialty: Specialty
  ui?: {
    card?: {
      cardBordered?: boolean
    }
    button?: {
      disableClickFeedback?: boolean
    }
  }
}

export const defaultConfig: Config = {
  locale: 'en',
  themeSchema: '',                
  mode: 'light',
  panelExpand: false,             
  controlSize: SIZES.MD,
  layout: {                       
    type: 'collapsibleSide',
    sideNavCollapse: false,
  },
  direction: 'ltr',
  specialty: 'default',           
  ui: {},
} as const

export const ConfigContext = createContext<Config>(defaultConfig)
const ConfigProvider = ConfigContext.Provider
export const ConfigConsumer = ConfigContext.Consumer

export function useConfig() {
  return useContext(ConfigContext)
}

export default ConfigProvider
