import { RADIUS, SKELETON, SPACING } from '@/app.constants'
import {
  SkeletonCard,
  SkeletonImage,
  SkeletonListItem,
  SkeletonProfile,
  SkeletonText,
} from '@/components/skeletons'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function SkeletonShowcase() {
  const { top, bottom } = useSafeAreaInsets()

  return (
    <ScrollView
      className='flex-1 bg-white'
      style={{ paddingTop: top }}
      contentContainerStyle={{ paddingBottom: bottom + SPACING.lg }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View
        style={{ paddingHorizontal: SPACING.lg, paddingVertical: SPACING.xl }}
      >
        <Text
          className='text-3xl font-bold text-gray-900'
          style={{ marginBottom: SPACING.sm }}
        >
          Skeleton Loaders
        </Text>
        <Text className='text-base text-gray-600'>
          Beautiful loading placeholders for React Native
        </Text>
      </View>

      {/* Profile Card Section */}
      <View style={{ marginBottom: SPACING.xl }}>
        <Text
          className='text-lg font-semibold text-gray-800'
          style={{ paddingHorizontal: SPACING.lg, marginBottom: SPACING.md }}
        >
          Profile Card
        </Text>
        <SkeletonProfile avatarSize={120} showBio={true} />
      </View>

      {/* Card Variants Section */}
      <View style={{ marginBottom: SPACING.xl }}>
        <Text
          className='text-lg font-semibold text-gray-800'
          style={{ paddingHorizontal: SPACING.lg, marginBottom: SPACING.md }}
        >
          Card Variants
        </Text>
        <View style={{ gap: SPACING.md }}>
          <SkeletonCard showAvatar={true} linesCount={2} />
          <SkeletonCard showAvatar={true} linesCount={3} />
          <SkeletonCard showAvatar={false} linesCount={2} />
        </View>
      </View>

      {/* List Items Section */}
      <View style={{ marginBottom: SPACING.xl }}>
        <Text
          className='text-lg font-semibold text-gray-800'
          style={{ paddingHorizontal: SPACING.lg, marginBottom: SPACING.md }}
        >
          List Items
        </Text>
        <View>
          <SkeletonListItem showAvatar={true} avatarSize={50} linesCount={2} />
          <SkeletonListItem showAvatar={true} avatarSize={50} linesCount={2} />
          <SkeletonListItem showAvatar={true} avatarSize={50} linesCount={2} />
          <SkeletonListItem showAvatar={false} linesCount={2} />
        </View>
      </View>

      {/* Image Section */}
      <View style={{ marginBottom: SPACING.xl }}>
        <Text
          className='text-lg font-semibold text-gray-800'
          style={{ paddingHorizontal: SPACING.lg, marginBottom: SPACING.md }}
        >
          Image Placeholders
        </Text>
        <View style={{ gap: SPACING.md }}>
          <SkeletonImage width='90%' aspectRatio={2} borderRadius={RADIUS.xl} />
          <View
            className='flex-row'
            style={{ marginHorizontal: SPACING.lg, gap: SPACING.md }}
          >
            <SkeletonImage
              width={100}
              aspectRatio={1}
              borderRadius={RADIUS.lg}
            />
            <SkeletonImage
              width={100}
              aspectRatio={1}
              borderRadius={RADIUS.lg}
            />
            <SkeletonImage
              width={100}
              aspectRatio={1}
              borderRadius={RADIUS.lg}
            />
          </View>
        </View>
      </View>

      {/* Text Section */}
      <View style={{ marginBottom: SPACING.xl }}>
        <Text
          className='text-lg font-semibold text-gray-800'
          style={{ paddingHorizontal: SPACING.lg, marginBottom: SPACING.md }}
        >
          Text Placeholders
        </Text>
        <View style={{ marginHorizontal: SPACING.lg, gap: SPACING.md }}>
          <SkeletonText width='100%' lineHeight={SKELETON.LINE_HEIGHT_LG} />
          <SkeletonText width='90%' lineHeight={SKELETON.LINE_HEIGHT_LG} />
          <SkeletonText width='70%' lineHeight={SKELETON.LINE_HEIGHT_LG} />
          <View style={{ marginTop: SPACING.md, gap: SPACING.sm }}>
            <SkeletonText width='40%' lineHeight={SKELETON.LINE_HEIGHT_SM} />
            <SkeletonText width='60%' lineHeight={SKELETON.LINE_HEIGHT_SM} />
            <SkeletonText width='50%' lineHeight={SKELETON.LINE_HEIGHT_SM} />
          </View>
        </View>
      </View>

      {/* Custom Composition Section */}
      <View style={{ marginBottom: SPACING.xl }}>
        <Text
          className='text-lg font-semibold text-gray-800'
          style={{ paddingHorizontal: SPACING.lg, marginBottom: SPACING.md }}
        >
          Custom Composition
        </Text>
        <View
          className='bg-gray-100'
          style={{
            marginHorizontal: SPACING.lg,
            padding: SPACING.md,
            borderRadius: RADIUS.xxl,
          }}
        >
          <View
            className='flex-row items-center'
            style={{ marginBottom: SPACING.md }}
          >
            <View
              className='rounded-full'
              style={{ width: 60, height: 60, backgroundColor: '#E5E7EB' }}
            />
            <View className='flex-1' style={{ marginLeft: SPACING.md }}>
              <SkeletonText width='70%' lineHeight={SKELETON.LINE_HEIGHT_MD} />
              <View style={{ marginTop: SPACING.sm }}>
                <SkeletonText
                  width='50%'
                  lineHeight={SKELETON.LINE_HEIGHT_SM}
                />
              </View>
            </View>
          </View>
          <SkeletonImage
            width='100%'
            aspectRatio={1.8}
            borderRadius={RADIUS.lg}
          />
          <View style={{ marginTop: SPACING.md, gap: SPACING.sm }}>
            <SkeletonText width='100%' lineHeight={SKELETON.LINE_HEIGHT_SM} />
            <SkeletonText width='95%' lineHeight={SKELETON.LINE_HEIGHT_SM} />
            <SkeletonText width='80%' lineHeight={SKELETON.LINE_HEIGHT_SM} />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
