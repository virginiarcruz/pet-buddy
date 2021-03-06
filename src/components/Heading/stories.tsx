import { Story, Meta } from '@storybook/react/types-6-0'
import Heading from '.'

export default {
  title: 'Heading',
  component: Heading
} as Meta

export const Default: Story = (args) => (
  <Heading title="Heading" labelBadge="+28" {...args} />
)
