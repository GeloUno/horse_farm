
import { Story, Meta } from '@storybook/react';
import PlanBookingsDays from './PlanBookingsDays';


export default {
  title: 'Booking/PlanBookingsDays',
  component: PlanBookingsDays

} as Meta;

let date = new Date()

const emptyVoid = () => { }

const PrimaryProfile: Story = (args) => (

  <PlanBookingsDays
    bookingDay={args.date}
    daysInMonth={args.daysInMonth}
    horizontalAmimationValueDays={args.number}
    setBookingDay={emptyVoid}
  />

)
export const Primary = PrimaryProfile.bind({})
Primary.args =
{
  date,
  daysInMonth: 30,
  horizontalAmimationValueDays: 1,
  day: 1
}
Primary.parameters = {

}

Primary.storyName = 'Days';
