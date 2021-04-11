import { Story, Meta } from '@storybook/react/types-6-0'
import { Avatar } from './Avatar'

export default {
  title: 'Avatar',
  component: Avatar
} as Meta

export const Default: Story = (args) => (
  <Avatar
    imageAlt="description image"
    imageSrc="https://picsum.photos/50"
    {...args}
  />
)
