import { ANIMATION, SCREEN, SKELETON } from '@/app.constants'
import type { SkeletonShimmerProps } from '@/types/skeleton.types'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated'

export const SkeletonShimmer: React.FC<SkeletonShimmerProps> = ({
  duration = ANIMATION.SHIMMER_DURATION,
  colors = ['transparent', 'rgba(255,255,255,0.8)', 'transparent'],
  width = SKELETON.SHIMMER_WIDTH,
}) => {
  const translateX = useSharedValue(-SCREEN.WIDTH)

  useEffect(() => {
    translateX.value = withRepeat(
      withTiming(SCREEN.WIDTH, {
        duration,
        easing: Easing.linear,
      }),
      -1,
      false
    )
  }, [duration])

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    }
  })

  return (
    <Animated.View style={[StyleSheet.absoluteFillObject, animatedStyle]}>
      <LinearGradient
        colors={colors as [string, string, ...string[]]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.shimmer, { width }]}
      />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  shimmer: {
    height: '100%',
  },
})
