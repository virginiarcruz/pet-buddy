import Logo from 'components/Logo'
import GridRow from 'components/GridRow'

import { Container, Content, ContentGrid, Column, TitleColumn } from './styles'
import PageHeader from 'components/PageHeader'

const Home = () => (
  <Container data-testid="home-container">
    <Logo />
    <Content>
      <PageHeader />
      <ContentGrid>
        <Column />
        <TitleColumn> Name </TitleColumn>
        <TitleColumn>Type</TitleColumn>
        <TitleColumn> Breed </TitleColumn>
        <TitleColumn> Gender </TitleColumn>
        <TitleColumn> Color </TitleColumn>
        <Column />
      </ContentGrid>
      <GridRow />
    </Content>
  </Container>
)

export default Home
