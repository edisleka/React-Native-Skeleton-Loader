import { SKELETON, SKELETON_COLORS, SPACING } from '@/app.constants'
import type { SkeletonProfileProps } from '@/types/skeleton.types'
import React from 'react'
import { View } from 'react-native'
import { SkeletonShimmer } from './SkeletonShimmer'

export const SkeletonProfile: React.FC<SkeletonProfileProps> = ({
  avatarSize = 100,
  showBio = true,
  shimmerDuration,
}) => {
  return (
    <View
      className='mx-6 rounded-2xl overflow-hidden'
      style={{
        backgroundColor: SKELETON_COLORS.container,
        padding: SPACING.lg,
      }}
    >
      <View className='relative items-center'>
        <View
          className='rounded-full'
          style={{
            backgroundColor: SKELETON_COLORS.element,
            width: avatarSize,
            height: avatarSize,
            marginBottom: SPACING.md,
          }}
        />
        <View
          className='w-[60%] rounded'
          style={{
            backgroundColor: SKELETON_COLORS.element,
            height: SKELETON.LINE_HEIGHT_LG,
            marginBottom: SPACING.sm,
          }}
        />
        <View
          className='w-[40%] rounded'
          style={{
            backgroundColor: SKELETON_COLORS.elementDark,
            height: SKELETON.LINE_HEIGHT_MD,
            marginBottom: SPACING.md,
          }}
        />
        {showBio && (
          <View className='w-full' style={{ gap: SPACING.sm }}>
            <View
              className='w-full rounded'
              style={{
                backgroundColor: SKELETON_COLORS.elementDark,
                height: SKELETON.LINE_HEIGHT_SM,
              }}
            />
            <View
              className='w-[90%] rounded self-center'
              style={{
                backgroundColor: SKELETON_COLORS.elementDark,
                height: SKELETON.LINE_HEIGHT_SM,
              }}
            />
            <View
              className='w-[70%] rounded self-center'
              style={{
                backgroundColor: SKELETON_COLORS.elementDark,
                height: SKELETON.LINE_HEIGHT_SM,
              }}
            />
          </View>
        )}
        <View
          className='flex-row w-full justify-around'
          style={{ marginTop: SPACING.lg }}
        >
          <View className='items-center'>
            <View
              className='rounded'
              style={{
                backgroundColor: SKELETON_COLORS.element,
                width: 50,
                paddingVertical: SPACING.xs,
                marginBottom: SPACING.sm,
              }}
            />
            <View
              className='rounded'
              style={{
                backgroundColor: SKELETON_COLORS.elementDark,
                width: 60,
                height: SKELETON.LINE_HEIGHT_SM,
              }}
            />
          </View>
          <View className='items-center'>
            <View
              className='rounded'
              style={{
                backgroundColor: SKELETON_COLORS.element,
                width: 50,
                paddingVertical: SPACING.xs,
                marginBottom: SPACING.sm,
              }}
            />
            <View
              className='rounded'
              style={{
                backgroundColor: SKELETON_COLORS.elementDark,
                width: 60,
                height: SKELETON.LINE_HEIGHT_SM,
              }}
            />
          </View>
          <View className='items-center'>
            <View
              className='rounded'
              style={{
                backgroundColor: SKELETON_COLORS.element,
                width: 50,
                paddingVertical: SPACING.xs,
                marginBottom: SPACING.sm,
              }}
            />
            <View
              className='rounded'
              style={{
                backgroundColor: SKELETON_COLORS.elementDark,
                width: 60,
                height: SKELETON.LINE_HEIGHT_SM,
              }}
            />
          </View>
        </View>
        <SkeletonShimmer duration={shimmerDuration} />
      </View>
    </View>
  )
}
