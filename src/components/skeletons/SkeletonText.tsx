import { RADIUS, SKELETON, SKELETON_COLORS } from '@/app.constants'
import type { SkeletonTextProps } from '@/types/skeleton.types'
import React from 'react'
import { View, type DimensionValue } from 'react-native'
import { SkeletonShimmer } from './SkeletonShimmer'

export const SkeletonText: React.FC<SkeletonTextProps> = ({
  width = '100%',
  lineHeight = SKELETON.LINE_HEIGHT_MD,
  borderRadius = RADIUS.sm,
  shimmerDuration,
}) => {
  return (
    <View
      className='overflow-hidden'
      style={{
        backgroundColor: SKELETON_COLORS.element,
        width: width as DimensionValue,
        height: lineHeight,
        borderRadius,
      }}
    >
      <SkeletonShimmer duration={shimmerDuration} width={60} />
    </View>
  )
}
