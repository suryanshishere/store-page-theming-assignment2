import React, { useEffect } from 'react'
import ConfigProvider from '@/components/ui/ConfigProvider'
import { useThemeStore } from '@/store/themeStore'
import useDarkMode from '@/utils/hooks/useDarkMode'
import useTheme from '@/utils/hooks/useTheme'
import useLocale from '@/utils/hooks/useLocale'
import useDirection from '@/utils/hooks/useDirection'
import type { CommonProps } from '@/@types/common'

const Theme = (props: CommonProps) => {
  // keep your existing hooks
  useTheme()
  useDarkMode()
  useDirection()

  // locale from hook
  const { locale } = useLocale()

  // pull all theme values from Zustand store
  const {
    themeSchema,
    mode,
    panelExpand,
    controlSize,
    layout,
    direction,
    specialty,
  } = useThemeStore()

  // Apply CSS class on <html> for the selected specialty theme
  useEffect(() => {
    document.documentElement.className = `theme-${specialty} mode-${mode}`
  }, [specialty])

  return (
    <ConfigProvider
      value={{
        locale,
        themeSchema,
        mode,
        panelExpand,
        controlSize,
        layout,
        direction,
        specialty,
      }}
    >
      {props.children}
    </ConfigProvider>
  )
}

export default Theme
