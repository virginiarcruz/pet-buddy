import { Container, Content } from './styles'
import Logo from 'components/Logo'

const Main = () => (
  <Container data-testid="main-container">
    <Logo />
    <Content />
  </Container>
)

export default Main
