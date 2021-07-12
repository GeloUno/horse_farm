
import { Story, Meta } from '@storybook/react';
import { PlanBookingHoursUsersList } from './PlanBookingHoursUsersList';
import { DevBookingDataGenerator } from '../../DevUtility/booking';



export default {
  title: 'Booking/HoursList',

} as Meta;

const DevBookingData = DevBookingDataGenerator()

const PrimaryProfile: Story = (args) => (
  <div>
    {PlanBookingHoursUsersList(args.firstHourBooking, args.lastHourBooking, DevBookingData)}
  </div>
)
export const Primary = PrimaryProfile.bind({})
Primary.args = {
  firstHourBooking: 8,
  lastHourBooking: 21
}
Primary.parameters = {

}

Primary.storyName = 'Hours List';
