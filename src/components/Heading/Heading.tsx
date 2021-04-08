import { Badge, BadgeProps } from 'components/Badge'
import { Container, Title } from './styles'

export type HeadingProps = {
  title: string
} & BadgeProps

const Heading = ({ title, ...props }: HeadingProps) => (
  <Container>
    <Title>{title}</Title>
    <Badge {...props} />
  </Container>
)

export default Heading
