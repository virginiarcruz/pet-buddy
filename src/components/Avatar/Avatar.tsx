import { Image } from './styles'

export type AvatarProps = {
  imageSrc: string | undefined
  imageAlt: string
}

export const Avatar = ({ imageSrc, imageAlt }: AvatarProps) => (
  <Image src={imageSrc} alt={imageAlt} />
)
