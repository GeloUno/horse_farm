
import { Story, Meta } from '@storybook/react';
import PlanBookingHoures from './PlanBookingHours';
import { DevBookingDataGenerator } from '../../DevUtility/booking';


export default {
  title: 'Booking/Hours',
  component: PlanBookingHoures

} as Meta;

let date = new Date()

const DevBookingData = DevBookingDataGenerator()

const PrimaryProfile: Story = (args) => (

  <PlanBookingHoures
    bookingDay={args.date}
    BookingData={args.DevBookingData}
  />

)
export const Primary = PrimaryProfile.bind({})
Primary.args = {
  date,
  DevBookingData
}
Primary.parameters = {

}

Primary.storyName = 'Hours with data';
