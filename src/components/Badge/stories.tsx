import { Story, Meta } from '@storybook/react/types-6-0'
import { Badge } from '.'

export default {
  title: 'Badge',
  component: Badge
} as Meta

export const Default: Story = (args) => <Badge labelBadge="28" {...args} />
