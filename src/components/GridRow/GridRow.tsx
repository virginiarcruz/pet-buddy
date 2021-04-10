import React, { useState } from 'react'
import { Row, PaginationContainer } from './styles'
import Avatar from 'components/Avatar'
import Button from 'components/Button'

import { useFetch } from 'hooks/useFetch'
import Pagination from 'components/Pagination'

const GridRow = () => {
  const data = useFetch()
  const [current, setCurrent] = useState(0)
  const [active, setActive] = useState(false)
  const { Data: allPets } = data

  function paginate(arr, size) {
    return arr?.reduce((acc, val, i) => {
      const idx = Math.floor(i / size)
      const page = acc[idx] || (acc[idx] = [])
      page.push(val)

      return acc
    }, [])
  }

  const pages = paginate(allPets, 10)

  const onClickPage = (e) => {
    e.preventDefault()
    setCurrent(e.target.outerText - 1)
    console.log(e)
    setActive(e.target.outerText === false && true)
  }

  return (
    <>
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
      <PaginationContainer>
        {pages?.map((_, i) => {
          console.log('active', i === current)
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
