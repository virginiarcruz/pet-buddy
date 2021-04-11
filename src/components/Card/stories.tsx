import { Story, Meta } from '@storybook/react/types-6-0'
import Card from './Card'

export default {
  title: 'Card',
  component: Card,
  args: {
    petName: 'Summer',
    petType: 'Dog',
    petBreed: 'Abyssinian',
    petGender: 'Female',
    petColor: 'Black'
  }
} as Meta

export const Default: Story = (args) => (
  <Card
    imageAlt="description image"
    imageSrc="https://picsum.photos/50"
    idCard="id"
    {...args}
  />
)
