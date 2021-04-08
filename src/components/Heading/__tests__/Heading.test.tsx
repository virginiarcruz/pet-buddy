import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '../Heading'

describe('<Heading />', () => {
  it('should render the heading with badge', () => {
    renderWithTheme(<Heading title="heading" labelBadge="badge" />)

    expect(screen.getByRole('banner')).toBeTruthy()
    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /heading/i })).toHaveStyle({
      color: '#000121',
      'font-size': '22px',
      'line-height': '27px'
    })

    expect(screen.getByText('badge')).toBeInTheDocument()
  })
})
