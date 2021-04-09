import React from 'react'
import Logo from 'components/Logo'

import { Container, Content, ContentGrid } from './styles'
import PageHeader from 'components/PageHeader'

const Home = () => (
  <Container data-testid="home-container">
    <Logo />
    <Content>
      <PageHeader />
      <ContentGrid>
        <p> </p>
        <p> Name </p>
        <p> Type </p>
        <p> Breed </p>
        <p> Gender </p>
        <p> Color </p>
        <p> </p>
      </ContentGrid>
    </Content>
  </Container>
)

export default Home
