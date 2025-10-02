import React, { createContext, ReactNode, useContext } from 'react'

export interface SkeletonTheme {
  baseColor: string
  highlightColor: string
  shimmerColors: string[]
  duration: number
}

const defaultTheme: SkeletonTheme = {
  baseColor: '#E0E0E0',
  highlightColor: '#F0F0F0',
  shimmerColors: ['transparent', 'rgba(255,255,255,0.7)', 'transparent'],
  duration: 1500,
}

const SkeletonThemeContext = createContext<SkeletonTheme>(defaultTheme)

export const useSkeletonTheme = () => {
  return useContext(SkeletonThemeContext)
}

interface SkeletonThemeProviderProps {
  children: ReactNode
  theme?: Partial<SkeletonTheme>
}

export const SkeletonThemeProvider: React.FC<SkeletonThemeProviderProps> = ({
  children,
  theme,
}) => {
  const mergedTheme = { ...defaultTheme, ...theme }

  return (
    <SkeletonThemeContext.Provider value={mergedTheme}>
      {children}
    </SkeletonThemeContext.Provider>
  )
}
