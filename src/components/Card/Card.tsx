import React from 'react'
import { CardContainer, Header, CardContent, Name, Input } from './styles'
import Avatar from 'components/Avatar'
import Button from 'components/Button'
import IconButton from 'components/IconButton'

export type CardProps = {
  petName?: string
  petType?: string
  petBreed?: string
  petGender?: string
  petColor?: string
  idCard: string
}

const Card = ({
  petName,
  petType,
  petBreed,
  petColor,
  petGender,
  idCard,
  ...props
}: CardProps) => (
  <CardContainer className="card-container">
    <Input type="checkbox" id={idCard} name="header-card" {...props} />
    <Header htmlFor={idCard} {...props}>
      <Avatar imageAlt="alt img" imageSrc="https://picsum.photos/50" />
      <Name> {petName} </Name>
      <IconButton />
    </Header>
    <CardContent className="card-content">
      <div className="card-inner">
        <p>
          Type: <span>{petType}</span>
        </p>
        <p>
          Breed: <span>{petBreed}</span>
        </p>
        <p>
          Gender: <span>{petGender}</span>
        </p>
        <p>
          Color: <span>{petColor}</span>
        </p>
        <Button>Details</Button>
      </div>
    </CardContent>
  </CardContainer>
)

export default Card
