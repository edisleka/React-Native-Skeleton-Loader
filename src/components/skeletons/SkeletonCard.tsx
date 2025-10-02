import { SKELETON, SKELETON_COLORS, SPACING } from '@/app.constants'
import type { SkeletonCardProps } from '@/types/skeleton.types'
import React from 'react'
import { View } from 'react-native'
import { SkeletonShimmer } from './SkeletonShimmer'

export const SkeletonCard: React.FC<SkeletonCardProps> = ({
  showAvatar = true,
  linesCount = 2,
  shimmerDuration,
}) => {
  return (
    <View
      className='mx-6 rounded-xl overflow-hidden flex-row items-center'
      style={{
        backgroundColor: SKELETON_COLORS.container,
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.lg,
      }}
    >
      {showAvatar && (
        <View
          className='rounded-full'
          style={{
            backgroundColor: SKELETON_COLORS.element,
            width: SKELETON.AVATAR_MEDIUM,
            height: SKELETON.AVATAR_MEDIUM,
          }}
        />
      )}
      <View
        className='flex-1 justify-center'
        style={{ marginLeft: showAvatar ? SPACING.md : 0 }}
      >
        {Array.from({ length: linesCount }).map((_, index) => (
          <View
            key={index}
            className='rounded'
            style={{
              backgroundColor: SKELETON_COLORS.element,
              height: SKELETON.LINE_HEIGHT_MD,
              marginBottom: index < linesCount - 1 ? SPACING.md : 0,
              width: index === linesCount - 1 ? '60%' : '100%',
            }}
          />
        ))}
      </View>
      <SkeletonShimmer duration={shimmerDuration} />
    </View>
  )
}
