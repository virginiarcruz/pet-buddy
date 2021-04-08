import { Wrapper, Logo, Title, Description } from './styles'

const Main = ({
  title = 'Shelter Buddy',
  description = 'Shelter Management Software, track your animals, volunteers, donors and more'
}) => (
  <Wrapper>
    <Logo src="/img/logo.svg" alt="shelter buddy brand" />
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Wrapper>
)

export default Main
