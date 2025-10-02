# React Native Skeleton Loader 🎨

A beautiful, customizable skeleton loader library for React Native applications built with Expo, NativeWind, and TypeScript.

## ✨ Features

- 🎨 **Multiple Pre-built Components** - Card, List, Profile, Image, and Text skeletons
- ⚡ **Smooth 60fps Animations** - Powered by `react-native-reanimated` for UI thread performance
- 🎯 **Fully Typed** - Complete TypeScript support
- 💅 **Styled with NativeWind** - Tailwind CSS for React Native
- 📱 **Responsive & Performant** - Optimized for all screen sizes with aspect ratios
- 🔧 **Easy to Compose** - Build custom loading states easily
- ⚙️ **Configurable** - Constants-based design with padding/margin approach
- 🎨 **Theme Support** - Customizable colors and animation speeds

## 📦 Installation

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## 🚀 Quick Start

The app includes a complete showcase of all skeleton components. Simply run the app to see them in action!

## 📖 Usage

Import and use any skeleton component in your app:

```tsx
import {
  SkeletonCard,
  SkeletonListItem,
  SkeletonProfile,
} from '@/components/skeletons'

function MyComponent() {
  return (
    <View>
      <SkeletonCard showAvatar={true} linesCount={2} />
      <SkeletonListItem showAvatar={true} avatarSize={50} linesCount={2} />
      <SkeletonProfile avatarSize={120} showBio={true} />
    </View>
  )
}
```

## 🧩 Available Components

- **SkeletonCard** - Card-style skeleton with optional avatar and text lines
- **SkeletonListItem** - Perfect for list views with avatar and text
- **SkeletonProfile** - Complete profile card with avatar, bio, and stats
- **SkeletonImage** - Image placeholder with customizable dimensions
- **SkeletonText** - Simple text line placeholder
- **SkeletonShimmer** - Reusable shimmer effect component

See the [Components Documentation](./src/components/README.md) for detailed props and examples.

## 📁 Project Structure

```text
src/
├── app/
│   ├── _layout.tsx       # Root layout with navigation
│   └── index.tsx         # Showcase page with all skeleton components
├── components/
│   └── skeletons/        # All skeleton components
│       ├── SkeletonCard.tsx
│       ├── SkeletonListItem.tsx
│       ├── SkeletonProfile.tsx
│       ├── SkeletonImage.tsx
│       ├── SkeletonText.tsx
│       ├── SkeletonShimmer.tsx
│       └── index.ts
├── context/
│   └── SkeletonThemeContext.tsx  # Theme configuration
├── types/
│   └── skeleton.types.ts         # TypeScript type definitions
├── app.constants.tsx             # Sizing, spacing, and animation constants
└── global.css                    # Global Tailwind styles
```

## ⚙️ Configuration

All constants are centralized in `src/app.constants.tsx` for easy customization:

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

export const ANIMATION = {
  SHIMMER_DURATION: 1500,
  FAST: 300,
  MEDIUM: 500,
  SLOW: 1000,
}

// Modern, subtle color palette
export const SKELETON_COLORS = {
  container: '#F3F4F6', // Base container background
  element: '#E5E7EB', // Element backgrounds
  elementDark: '#D1D5DB', // Darker elements for contrast
  shimmer: ['transparent', 'rgba(255,255,255,0.8)', 'transparent'],
}

// Vibrant accent colors for sections
export const ACCENT_COLORS = {
  primary: '#3B82F6', // Blue
  secondary: '#8B5CF6', // Purple
  success: '#10B981', // Green
  warning: '#F59E0B', // Orange
  danger: '#EF4444', // Red
  info: '#06B6D4', // Cyan
}
```

## 🛠️ Tech Stack

- **[Expo](https://expo.dev)** - Universal React Native framework
- **[React Native](https://reactnative.dev)** - Cross-platform mobile development
- **[NativeWind](https://www.nativewind.dev/)** - Tailwind CSS for React Native
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Expo Router](https://docs.expo.dev/router/introduction/)** - File-based routing
- **[React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)** - 60fps UI thread animations
- **[Expo Linear Gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)** - Shimmer gradient effect

## 🎨 Customization

### Theme Configuration

Wrap your app with `SkeletonThemeProvider` to customize colors and animation:

```tsx
import { SkeletonThemeProvider } from '@/context/SkeletonThemeContext'
;<SkeletonThemeProvider
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

### Custom Compositions

Easily create custom loading states by composing components:

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

## 📚 Learn More

To learn more about the technologies used:

- [Expo Documentation](https://docs.expo.dev/) - Learn about Expo features and API
- [NativeWind Documentation](https://www.nativewind.dev/) - Tailwind CSS for React Native
- [React Native Documentation](https://reactnative.dev/) - Learn about React Native

## 📝 License

This project is open source and available for learning and development purposes.
