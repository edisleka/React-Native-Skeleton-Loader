# Skeleton Loader Components

Beautiful, customizable skeleton loaders for React Native applications built with Expo, NativeWind, and TypeScript.

## Features

- 🎨 Multiple pre-built skeleton components
- ⚡ Smooth 60fps shimmer animations (react-native-reanimated)
- 🎯 Fully typed with TypeScript
- 🎨 Customizable with NativeWind classes
- 📱 Responsive and performant (aspect ratio based)
- 🔧 Easy to compose custom layouts
- ⚙️ Padding/margin based sizing (no fixed heights)

## Components

### SkeletonCard

A card-style skeleton with optional avatar and multiple text lines.

```tsx
<SkeletonCard showAvatar={true} linesCount={2} shimmerDuration={1500} />
```

### SkeletonListItem

Perfect for list views with avatar and text lines.

```tsx
<SkeletonListItem showAvatar={true} avatarSize={50} linesCount={2} />
```

### SkeletonProfile

Complete profile card skeleton with avatar, bio, and stats.

```tsx
<SkeletonProfile avatarSize={120} showBio={true} />
```

### SkeletonImage

Image placeholder with customizable dimensions.

```tsx
<SkeletonImage width='100%' aspectRatio={1.5} borderRadius={16} />
```

### SkeletonText

Simple text line placeholder.

```tsx
<SkeletonText width='80%' lineHeight={14} />
```

## Custom Compositions

You can easily compose these components to create custom loading states:

```tsx
<View className='p-4 bg-gray-100 rounded-2xl'>
  <View className='flex-row items-center mb-4'>
    <View className='w-[60px] h-[60px] rounded-full bg-[#d1d1d1]' />
    <View className='ml-3 flex-1'>
      <SkeletonText width='70%' lineHeight={14} />
      <View className='mt-2'>
        <SkeletonText width='50%' lineHeight={12} />
      </View>
    </View>
  </View>
  <SkeletonImage width='100%' aspectRatio={1.8} borderRadius={12} />
</View>
```

## Props

### SkeletonCardProps

- `showAvatar?: boolean` - Show/hide avatar circle
- `avatarSize?: number` - Size of the avatar
- `linesCount?: number` - Number of text lines (default: 2)
- `shimmerDuration?: number` - Animation duration in ms

Note: Card height is determined by padding and content, not a fixed height prop.

### SkeletonListItemProps

- `showAvatar?: boolean` - Show/hide avatar circle
- `avatarSize?: number` - Size of the avatar (default: 50)
- `linesCount?: number` - Number of text lines (default: 2)
- `shimmerDuration?: number` - Animation duration in ms

### SkeletonProfileProps

- `avatarSize?: number` - Size of the avatar (default: 100)
- `showBio?: boolean` - Show/hide bio section
- `shimmerDuration?: number` - Animation duration in ms

### SkeletonImageProps

- `width?: number | string` - Image width (default: '100%')
- `aspectRatio?: number` - Image aspect ratio (width/height, default: 1.5)
- `borderRadius?: number` - Border radius (default: 12)
- `shimmerDuration?: number` - Animation duration in ms

### SkeletonTextProps

- `width?: number | string` - Text width (default: '100%')
- `lineHeight?: number` - Text line height (default: 14)
- `borderRadius?: number` - Border radius (default: 4)
- `shimmerDuration?: number` - Animation duration in ms

## Constants

All sizing, spacing, and color constants are defined in `src/app.constants.tsx` for consistency:

```tsx
export const SKELETON = {
  CARD_HEIGHT: 140,
  AVATAR_SMALL: 40,
  AVATAR_MEDIUM: 70,
  AVATAR_LARGE: 100,
  LINE_HEIGHT_SM: 10,
  LINE_HEIGHT_MD: 14,
  LINE_HEIGHT_LG: 18,
  SHIMMER_WIDTH: 80,
}

export const SKELETON_COLORS = {
  container: '#F3F4F6', // Base container background
  element: '#E5E7EB', // Element backgrounds
  elementDark: '#D1D5DB', // Darker elements for contrast
  shimmer: ['transparent', 'rgba(255,255,255,0.8)', 'transparent'],
}

export const ACCENT_COLORS = {
  primary: '#3B82F6', // Blue
  secondary: '#8B5CF6', // Purple
  success: '#10B981', // Green
  warning: '#F59E0B', // Orange
  danger: '#EF4444', // Red
  info: '#06B6D4', // Cyan
}
```

## Theme Customization

You can customize the skeleton theme using the `SkeletonThemeProvider`:

```tsx
<SkeletonThemeProvider
  theme={{
    baseColor: '#E0E0E0',
    highlightColor: '#F0F0F0',
    shimmerColors: ['transparent', 'rgba(255,255,255,0.7)', 'transparent'],
    duration: 1500,
  }}
>
  <YourApp />
</SkeletonThemeProvider>
```

## Best Practices

1. Match skeleton layout to your actual content for better UX
2. Use consistent animation duration across your app (default: 1500ms)
3. Consider dark mode support by adjusting colors
4. Compose simple skeletons for complex layouts
5. Keep animations subtle and smooth
6. Use aspect ratios for images instead of fixed heights
7. Let content determine size with padding/margin

## Examples

Check out `src/app/index.tsx` for a complete showcase of all available skeleton components and their variations.
