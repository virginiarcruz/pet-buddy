import React, { useState, useEffect, useContext } from 'react'
import { Row, PaginationContainer, ListContainer } from './styles'
import Avatar from 'components/Avatar'
import Button from 'components/Button'
import AppContext from 'context/AppContext'

import { Pagination } from 'components/Pagination'

import MediaMatch from 'components/MediaMatch'
import Card from 'components/Card'

const GridRow = () => {
  const context = useContext(AppContext)
  const { profile } = context
  const [current, setCurrent] = useState(0)

  console.log('data context', context.profile)

  const [items, setItems] = useState()
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState()

  useEffect(() => {
    setItems(profile)
  }, [profile, items])

  useEffect(() => {
    console.log('items', items)
    const results = items?.filter((item) => item?.Name?.includes(searchTerm))
    setSearchResults(results)
  }, [searchTerm, items])

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

  // const handleChange = (event) => {
  //   setSearchTerm(event.target.value)
  // }

  return (
    <>
      <ListContainer className="petsList">
        <MediaMatch greaterThan="medium">
          {pages?.[`${current}`]?.map((pet, i) => (
            <Row key={`pet-${i}`}>
              <Avatar imageAlt={pet.name} imageSrc="https://picsum.photos/50" />
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
