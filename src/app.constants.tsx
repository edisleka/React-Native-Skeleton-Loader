import { Dimensions } from 'react-native'

// Screen dimensions
export const SCREEN = {
  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,
}

// Spacing constants
export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
}

// Border radius
export const RADIUS = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 24,
  full: 9999,
}

// Skeleton specific sizes
export const SKELETON = {
  CARD_HEIGHT: 140,
  AVATAR_SMALL: 40,
  AVATAR_MEDIUM: 70,
  AVATAR_LARGE: 100,
  LINE_HEIGHT_SM: 10,
  LINE_HEIGHT_MD: 14,
  LINE_HEIGHT_LG: 18,
  SHIMMER_WIDTH: 80,
}

// Animation durations
export const ANIMATION = {
  SHIMMER_DURATION: 1500,
  FAST: 300,
  MEDIUM: 500,
  SLOW: 1000,
}

// Skeleton colors - Modern, subtle palette
export const SKELETON_COLORS = {
  // Base container background
  container: '#F3F4F6', // Soft gray-blue
  // Element backgrounds
  element: '#E5E7EB', // Light gray
  elementDark: '#D1D5DB', // Medium gray for contrast
  // Shimmer gradient colors
  shimmer: ['transparent', 'rgba(255,255,255,0.8)', 'transparent'] as const,
  // Alternative shimmer for darker elements
  shimmerSubtle: ['transparent', 'rgba(255,255,255,0.5)', 'transparent'] as const,
}
