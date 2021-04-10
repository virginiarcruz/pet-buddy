import { useState, useContext, useEffect } from 'react'
import Logo from 'components/Logo'
import GridRow from 'components/GridRow'
import MediaMatch from 'components/MediaMatch'
import AppContext from 'context/AppContext'

import { Container, Content, ContentGrid, Column, TitleColumn } from './styles'
import PageHeader from 'components/PageHeader'
import { useFetch } from 'hooks/useFetch'

const Home = () => {
  const data = useFetch()

  const [searchTerm, setSearchTerm] = useState('')
  const { configValue, profile, setProfile } = useContext(AppContext)

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    if (data) {
      configValue.data = data
      setProfile(data.Data)
    }
  }, [data, configValue, setProfile])

  console.log('data', configValue.data)

  return (
    <Container data-testid="home-container">
      <Logo />
      <Content>
        {/* <PageHeader
          inputValue={searchTerm}
          onChange={handleChange}
          labelBadge={profile?.length}
        /> */}
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
