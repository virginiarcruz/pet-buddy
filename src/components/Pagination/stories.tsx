import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Pagination, PaginationProps } from './Pagination'

import mockPages from './mock'

export default {
  title: 'Pagination',
  component: Pagination,
  args: {
    pages: mockPages
  },
  argTypes: {
    plans: {
      type: ''
    }
  }
} as Meta

export const Default: Story<PaginationProps> = (args) => (
  <Pagination pageLabel="1" {...args} />
)
