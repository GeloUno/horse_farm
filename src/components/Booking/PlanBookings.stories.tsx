
import { Story, Meta } from '@storybook/react';
import PlanBookings from './PlanBookings';

export default {
  title: 'Booking/PlanBookings',
  component: PlanBookings
} as Meta;

const PrimaryProfile: Story = (args) => (
  <PlanBookings />
)
export const Primary = PrimaryProfile.bind({})
Primary.args = {
}
Primary.parameters = {
}

Primary.storyName = 'Booking';
