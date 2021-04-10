import React from 'react'
import Heading from 'components/Heading'
import Input from 'components/Input'

import { Header } from './styles'

const PageHeader = ({ ...props }) => (
  <Header>
    <Heading title="Your Animals" labelBadge="28" />
    <Input id="inputFilter" placeholder="Search an animal by name" {...props} />
  </Header>
)

export default PageHeader
