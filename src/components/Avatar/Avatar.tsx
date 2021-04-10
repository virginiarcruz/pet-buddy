import { Image } from './styles'

export type AvatarProps = {
  imageSrc: string
  imageAlt: string
}

const Avatar = ({ imageSrc, imageAlt }: AvatarProps) => (
  <Image src={imageSrc} alt={imageAlt} />
)

export default Avatar
