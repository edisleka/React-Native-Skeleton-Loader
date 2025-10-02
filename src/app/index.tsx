import { ACCENT_COLORS, RADIUS, SKELETON, SPACING } from '@/app.constants'
import {
  SkeletonCard,
  SkeletonImage,
  SkeletonListItem,
  SkeletonProfile,
  SkeletonText,
} from '@/components/skeletons'
import { Ionicons } from '@expo/vector-icons'
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
        className='rounded-3xl'
        style={{
          paddingHorizontal: SPACING.lg,
          paddingVertical: SPACING.xl,
          marginHorizontal: SPACING.lg,
          marginBottom: SPACING.lg,
          backgroundColor: 'rgba(59, 130, 246, 0.05)',
          borderLeftWidth: 4,
          borderLeftColor: ACCENT_COLORS.primary,
        }}
      >
        <View
          className='flex-row items-center'
          style={{ marginBottom: SPACING.sm }}
        >
          <Ionicons
            name='sparkles'
            size={32}
            color={ACCENT_COLORS.primary}
            style={{ marginRight: SPACING.sm }}
          />
          <Text
            className='text-3xl font-bold'
            style={{ color: ACCENT_COLORS.primary }}
          >
            Skeleton Loaders
          </Text>
        </View>
        <Text className='text-base text-slate-500'>
          Beautiful loading placeholders for React Native
        </Text>
      </View>

      {/* Profile Card Section */}
      <View style={{ marginBottom: SPACING.xl }}>
        <View
          className='flex-row items-center'
          style={{ paddingHorizontal: SPACING.lg, marginBottom: SPACING.md }}
        >
          <Ionicons
            name='person-circle'
            size={24}
            color={ACCENT_COLORS.secondary}
            style={{ marginRight: SPACING.sm }}
          />
          <Text
            className='text-lg font-semibold'
            style={{ color: ACCENT_COLORS.secondary }}
          >
            Profile Card
          </Text>
        </View>
        <SkeletonProfile avatarSize={120} showBio={true} />
      </View>

      {/* Card Variants Section */}
      <View style={{ marginBottom: SPACING.xl }}>
        <View
          className='flex-row items-center'
          style={{ paddingHorizontal: SPACING.lg, marginBottom: SPACING.md }}
        >
          <Ionicons
            name='grid'
            size={24}
            color={ACCENT_COLORS.success}
            style={{ marginRight: SPACING.sm }}
          />
          <Text
            className='text-lg font-semibold'
            style={{ color: ACCENT_COLORS.success }}
          >
            Card Variants
          </Text>
        </View>
        <View style={{ gap: SPACING.md }}>
          <SkeletonCard showAvatar={true} linesCount={2} />
          <SkeletonCard showAvatar={true} linesCount={3} />
          <SkeletonCard showAvatar={false} linesCount={2} />
        </View>
      </View>

      {/* List Items Section */}
      <View style={{ marginBottom: SPACING.xl }}>
        <View
          className='flex-row items-center'
          style={{ paddingHorizontal: SPACING.lg, marginBottom: SPACING.md }}
        >
          <Ionicons
            name='list'
            size={24}
            color={ACCENT_COLORS.warning}
            style={{ marginRight: SPACING.sm }}
          />
          <Text
            className='text-lg font-semibold'
            style={{ color: ACCENT_COLORS.warning }}
          >
            List Items
          </Text>
        </View>
        <View>
          <SkeletonListItem showAvatar={true} avatarSize={50} linesCount={2} />
          <SkeletonListItem showAvatar={true} avatarSize={50} linesCount={2} />
          <SkeletonListItem showAvatar={true} avatarSize={50} linesCount={2} />
          <SkeletonListItem showAvatar={false} linesCount={2} />
        </View>
      </View>

      {/* Image Section */}
      <View style={{ marginBottom: SPACING.xl }}>
        <View
          className='flex-row items-center '
          style={{ paddingHorizontal: SPACING.lg, marginBottom: SPACING.md }}
        >
          <Ionicons
            name='image'
            size={24}
            color={ACCENT_COLORS.danger}
            style={{ marginRight: SPACING.sm }}
          />
          <Text
            className='text-lg font-semibold'
            style={{ color: ACCENT_COLORS.danger }}
          >
            Image Placeholders
          </Text>
        </View>
        <View style={{ gap: SPACING.md }}>
          <SkeletonImage width='90%' aspectRatio={2} borderRadius={RADIUS.xl} />
          <View
            className='flex-row'
            style={{ marginHorizontal: SPACING.lg, gap: SPACING.md }}
          >
            <SkeletonImage
              width={80}
              aspectRatio={1}
              borderRadius={RADIUS.lg}
            />
            <SkeletonImage
              width={80}
              aspectRatio={1}
              borderRadius={RADIUS.lg}
            />
            <SkeletonImage
              width={80}
              aspectRatio={1}
              borderRadius={RADIUS.lg}
            />
          </View>
        </View>
      </View>

      {/* Text Section */}
      <View style={{ marginBottom: SPACING.xl }}>
        <View
          className='flex-row items-center'
          style={{ paddingHorizontal: SPACING.lg, marginBottom: SPACING.md }}
        >
          <Ionicons
            name='text'
            size={24}
            color={ACCENT_COLORS.info}
            style={{ marginRight: SPACING.sm }}
          />
          <Text
            className='text-lg font-semibold'
            style={{ color: ACCENT_COLORS.info }}
          >
            Text Placeholders
          </Text>
        </View>
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
        <View
          className='flex-row items-center'
          style={{ paddingHorizontal: SPACING.lg, marginBottom: SPACING.md }}
        >
          <Ionicons
            name='layers'
            size={24}
            color={ACCENT_COLORS.primary}
            style={{ marginRight: SPACING.sm }}
          />
          <Text
            className='text-lg font-semibold'
            style={{ color: ACCENT_COLORS.primary }}
          >
            Custom Composition
          </Text>
        </View>
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
              className='rounded-full bg-[#d1d1d1]'
              style={{ width: 60, height: 60 }}
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
