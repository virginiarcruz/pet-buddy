import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

import Avatar from '../Avatar'

describe('<Avatar />', () => {
  it('should render the <Avatar />', () => {
    renderWithTheme(<Avatar imageAlt="avatar alt" imageSrc="http/image" />)

    expect(screen.getByRole('img', { name: /avatar alt/i })).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /avatar alt/i })).toHaveStyle({
      width: '40px'
    })

    expect(screen.getByRole('img', { name: /avatar alt/i })).toHaveStyleRule(
      'width',
      '48px',
      {
        media: '(min-width: 768px)'
      }
    )
  })
})
