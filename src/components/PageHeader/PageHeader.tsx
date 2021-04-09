import React from 'react'
import Heading from 'components/Heading'
import Input from 'components/Input'

import { Header } from './styles'

const PageHeader = () => (
  <Header>
    <Heading title="Your Animals" labelBadge="28" />
    <Input placeholder="Search an animal by name" />
  </Header>
)

export default PageHeader
