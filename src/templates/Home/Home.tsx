import { useContext, useEffect } from 'react'
import Logo from 'components/Logo'
import GridRow from 'components/GridRow'
import AppContext from 'context/AppContext'

import { Container, Content } from './styles'
import { useFetch } from 'hooks/useFetch'

const Home = () => {
  const data = useFetch()
  const { configValue, setProfile } = useContext(AppContext)

  useEffect(() => {
    if (data) {
      configValue.data = data
      setProfile(data.Data)
    }
  }, [data, configValue, setProfile])

  return (
    <Container data-testid="home-container">
      <Logo />
      <Content>
        <GridRow />
      </Content>
    </Container>
  )
}
export default Home
