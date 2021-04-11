import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Card from '../Card'

describe('<Card />', () => {
  it('should render the <Card />', () => {
    const { container } = renderWithTheme(
      <Card
        idCard="idCard"
        imageAlt="description image"
        imageSrc="https://picsum.photos/50"
        petBreed="Abyssinian"
        petColor="Black"
        petGender="Female"
        petName="Summer"
        petType="Dog"
      />
    )

    expect(container).toMatchSnapshot()

    expect(
      screen.getByRole('img', { name: /description image/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /summer/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', {
        name: /details/i
      })
    ).toBeInTheDocument
  })
})
