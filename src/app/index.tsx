import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect, useRef } from 'react'
import { Animated, Dimensions, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const SCREEN_WIDTH = Dimensions.get('window').width

export default function SkeletonLoader() {
  const { top } = useSafeAreaInsets()
  const shimmerAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.loop(
      Animated.timing(shimmerAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      })
    ).start()
  }, [])

  const translateX = shimmerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-SCREEN_WIDTH, SCREEN_WIDTH],
  })

  return (
    <View
      style={{ marginTop: top }}
      className='mx-5 rounded-xl overflow-hidden bg-[#ccc] flex-row items-center px-4 h-[140px]'
    >
      <View className='w-[70px] h-[70px] rounded-full bg-[#d1d1d1]' />
      <View className='ml-4 flex-1 justify-center'>
        <View className='h-[14px] bg-[#d1d1d1] rounded mb-[18px] w-full' />
        <View className='h-[14px] bg-[#d1d1d1] rounded w-[60%]' />
      </View>
      <Animated.View
        style={[StyleSheet.absoluteFillObject, { transform: [{ translateX }] }]}
      >
        <LinearGradient
          colors={['transparent', 'rgba(255,255,255,0.7)', 'transparent']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.shimmer}
        />
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  shimmer: {
    width: 80,
    height: '100%',
  },
})
