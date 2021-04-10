import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Input from '../Input'

describe('<Input />', () => {
  it('should render the <Input />', () => {
    renderWithTheme(<Input placeholder="placeholder" />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/placeholder/i)).toBeTruthy()
  })
})
