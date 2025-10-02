export interface SkeletonShimmerProps {
  duration?: number
  colors?: string[]
  width?: number
}

export interface SkeletonBaseProps {
  shimmerDuration?: number
  baseColor?: string
  highlightColor?: string
}

export interface SkeletonCardProps extends SkeletonBaseProps {
  showAvatar?: boolean
  avatarSize?: number
  linesCount?: number
}

export interface SkeletonListItemProps extends SkeletonBaseProps {
  showAvatar?: boolean
  avatarSize?: number
  linesCount?: number
}

export interface SkeletonProfileProps extends SkeletonBaseProps {
  avatarSize?: number
  showBio?: boolean
}

export interface SkeletonImageProps extends SkeletonBaseProps {
  width?: number | string
  aspectRatio?: number
  borderRadius?: number
}

export interface SkeletonTextProps extends SkeletonBaseProps {
  width?: number | string
  lineHeight?: number
  borderRadius?: number
}
