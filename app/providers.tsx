'use client'

import { useEffect } from 'react'
import { useThemeStore } from './store/useThemeStore'

export default function Providers({ children }: { children: React.ReactNode }) {
  const initTheme = useThemeStore((s) => s.initTheme)

  useEffect(() => {
    initTheme()
  }, [initTheme])

  return children
}
