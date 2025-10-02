import { ANIMATION, SCREEN, SKELETON } from '@/app.constants'
import type { SkeletonShimmerProps } from '@/types/skeleton.types'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect, useRef } from 'react'
import { Animated, StyleSheet } from 'react-native'

export const SkeletonShimmer: React.FC<SkeletonShimmerProps> = ({
  duration = ANIMATION.SHIMMER_DURATION,
  colors = ['transparent', 'rgba(255,255,255,0.7)', 'transparent'],
  width = SKELETON.SHIMMER_WIDTH,
}) => {
  const shimmerAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.loop(
      Animated.timing(shimmerAnim, {
        toValue: 1,
        duration,
        useNativeDriver: true,
      })
    ).start()
  }, [duration])

  const translateX = shimmerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-SCREEN.WIDTH, SCREEN.WIDTH],
  })

  return (
    <Animated.View
      style={[StyleSheet.absoluteFillObject, { transform: [{ translateX }] }]}
    >
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
