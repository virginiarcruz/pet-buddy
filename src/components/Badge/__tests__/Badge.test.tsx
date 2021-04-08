import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Badge } from '../Badge'

describe('<Badge />', () => {
  it('should render the badge', () => {
    const { container } = renderWithTheme(<Badge labelBadge="badge" />)

    expect(container).toMatchSnapshot()

    expect(screen.getByText('badge')).toBeInTheDocument()
    expect(screen.getByText('badge')).toHaveStyle({
      'font-size': '14px',
      'background-color': '#F47500'
    })
  })
})
