import React, { useState, useEffect, useContext } from 'react'
import {
  Row,
  PaginationContainer,
  ListContainer,
  ContentGrid,
  TitleColumn,
  Column
} from './styles'
import Avatar from 'components/Avatar'
import Button from 'components/Button'
import AppContext from 'context/AppContext'

import { Pagination } from 'components/Pagination'

import MediaMatch from 'components/MediaMatch'
import Card from 'components/Card'
import PageHeader from 'components/PageHeader'

const GridRow = () => {
  const context = useContext(AppContext)
  const { profile } = context
  const [current, setCurrent] = useState(0)

  console.log('profile', context.profile)

  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState()

  useEffect(() => {
    const results = profile?.filter((item) =>
      item.Name?.toLowerCase().includes(searchTerm)
    )
    setSearchResults(results)
  }, [profile, searchTerm])

  function paginate(arr, size) {
    return arr?.reduce((acc, val, i) => {
      const idx = Math.floor(i / size)
      const page = acc[idx] || (acc[idx] = [])
      page.push(val)

      return acc
    }, [])
  }

  const pages = paginate(searchResults, 10)

  const onClickPage = (e) => {
    e.preventDefault()
    setCurrent(e.target.outerText - 1)
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <PageHeader
        inputValue={searchTerm}
        onChange={handleChange}
        labelBadge={profile?.length}
      />
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
      <ListContainer className="petsList">
        <MediaMatch greaterThan="medium">
          {pages?.[`${current}`]?.map((pet, i) => (
            <Row key={`pet-${i}`}>
              <Avatar
                imageAlt={pet.name}
                imageSrc={`https://picsum.photos/50?random=${i + 1}`}
              />
              <p> {pet.Name ? pet.Name : 'no name'} </p>
              <p> {pet.Type?.Name} </p>
              <p> {pet.Breed?.Primary?.Name} </p>
              <p> {pet.Sex?.Name} </p>
              <p> {pet.Features?.PrimaryColour} </p>
              <Button as="a" href="#">
                Details
              </Button>
            </Row>
          ))}
        </MediaMatch>
        <MediaMatch lessThan="medium">
          {pages?.[`${current}`]?.map((pet, i) => (
            <Card
              key={`pet-${i}`}
              idCard={`card-${i}`}
              petName={pet.Name ? pet.Name : 'no name'}
              petType={pet.Type?.Name}
              petBreed={pet.Breed?.Primary?.Name}
              petGender={pet.Sex?.Name}
              petColor={pet.Features?.PrimaryColour}
            />
          ))}
        </MediaMatch>
      </ListContainer>
      <PaginationContainer>
        {pages?.map((_, i) => {
          return (
            <Pagination
              key={`page-${i}`}
              href="#"
              pageLabel={i + 1}
              onClick={onClickPage}
              isActive={i === current}
            />
          )
        })}
      </PaginationContainer>
    </>
  )
}
export default GridRow
