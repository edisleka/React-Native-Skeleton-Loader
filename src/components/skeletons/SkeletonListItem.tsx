import { SKELETON, SPACING } from '@/app.constants'
import type { SkeletonListItemProps } from '@/types/skeleton.types'
import React from 'react'
import { View } from 'react-native'
import { SkeletonShimmer } from './SkeletonShimmer'

export const SkeletonListItem: React.FC<SkeletonListItemProps> = ({
  showAvatar = true,
  avatarSize = 50,
  linesCount = 2,
  shimmerDuration,
}) => {
  return (
    <View
      className='mx-6 flex-row items-center border-b border-gray-200'
      style={{ paddingVertical: SPACING.md }}
    >
      <View className='relative overflow-hidden flex-row items-center flex-1'>
        {showAvatar && (
          <View
            className='rounded-full bg-[#d1d1d1]'
            style={{ width: avatarSize, height: avatarSize }}
          />
        )}
        <View
          className='flex-1 justify-center'
          style={{ marginLeft: showAvatar ? SPACING.md : 0 }}
        >
          {Array.from({ length: linesCount }).map((_, index) => (
            <View
              key={index}
              className='bg-[#d1d1d1] rounded'
              style={{
                height: SKELETON.LINE_HEIGHT_SM,
                marginBottom: index < linesCount - 1 ? SPACING.sm : 0,
                width: index === 0 ? '80%' : '50%',
              }}
            />
          ))}
        </View>
        <SkeletonShimmer duration={shimmerDuration} />
      </View>
    </View>
  )
}
