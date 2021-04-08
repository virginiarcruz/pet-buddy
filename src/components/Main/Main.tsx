import * as S from './styles'

const Main = ({
  title = 'Shelter Buddy',
  description = 'Shelter Management Software, track your animals, volunteers, donors and more'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="shelter buddy brand" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
