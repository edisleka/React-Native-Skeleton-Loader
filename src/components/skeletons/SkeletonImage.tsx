import { RADIUS } from '@/app.constants'
import type { SkeletonImageProps } from '@/types/skeleton.types'
import React from 'react'
import { View, type DimensionValue } from 'react-native'
import { SkeletonShimmer } from './SkeletonShimmer'

export const SkeletonImage: React.FC<SkeletonImageProps> = ({
  width = '100%',
  aspectRatio = 1.5,
  borderRadius = RADIUS.lg,
  shimmerDuration,
}) => {
  return (
    <View
      className='mx-6 bg-[#ccc] overflow-hidden'
      style={{
        width: width as DimensionValue,
        aspectRatio,
        borderRadius,
      }}
    >
      <SkeletonShimmer duration={shimmerDuration} />
    </View>
  )
}
