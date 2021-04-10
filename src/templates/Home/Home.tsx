import { useState } from 'react'
import Logo from 'components/Logo'
import GridRow from 'components/GridRow'
import MediaMatch from 'components/MediaMatch'

import { Container, Content, ContentGrid, Column, TitleColumn } from './styles'
import PageHeader from 'components/PageHeader'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <Container data-testid="home-container">
      <Logo />
      <Content>
        <PageHeader inputValue={searchTerm} onChange={handleChange} />
        <MediaMatch greaterThan="medium">
          <ContentGrid>
            <Column />
            <TitleColumn> Name </TitleColumn>
            <TitleColumn>Type</TitleColumn>
            <TitleColumn> Breed </TitleColumn>
            <TitleColumn> Gender </TitleColumn>
            <TitleColumn> Color </TitleColumn>
            <Column />
          </ContentGrid>
        </MediaMatch>
        <GridRow />
      </Content>
    </Container>
  )
}
export default Home
