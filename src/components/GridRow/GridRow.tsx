import React, { useState, useEffect } from 'react'
import { Row, PaginationContainer } from './styles'
import Avatar from 'components/Avatar'
import Button from 'components/Button'

import { useFetch } from 'hooks/useFetch'
import { Pagination } from 'components/Pagination'
import PageHeader from 'components/PageHeader'

import MediaMatch from 'components/MediaMatch'
import Card from 'components/Card'

const GridRow = () => {
  const data = useFetch()
  const [current, setCurrent] = useState(0)
  const { Data: allPets } = data

  const [items, setItems] = useState()
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState()

  useEffect(() => {
    setItems(allPets)
  }, [allPets, items])

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
      {/* <PageHeader inputValue={searchTerm} onChange={handleChange} /> */}
      <div className="petsList">
        <MediaMatch greaterThan="medium">
          {pages?.[`${current}`]?.map((pet) => (
            <Row key={pet.id}>
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
          {pages?.[`${current}`]?.map((pet) => (
            <Card
              key={pet.id}
              petName={pet.Name ? pet.Name : 'no name'}
              petType={pet.Type?.Name}
              petBreed={pet.Breed?.Primary?.Name}
              petGender={pet.Sex?.Name}
              petColor={pet.Features?.PrimaryColour}
            />
          ))}
        </MediaMatch>
      </div>
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
