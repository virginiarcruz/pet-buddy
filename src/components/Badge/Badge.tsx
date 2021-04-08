import { BadgeContainer } from './styles'

export type BadgeProps = {
  labelBadge?: string
}
export const Badge = ({ labelBadge }: BadgeProps) => (
  <BadgeContainer>{labelBadge}</BadgeContainer>
)
