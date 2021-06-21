import { Story, Meta } from '@storybook/react';
import Contact from './Contact';
import '../App.css'


export default {
  title: 'Components/Contact',
  component: Contact,

} as Meta;

const Primary: Story = (args) => (

  <Contact />

)
export const PrimaryExample = Primary.bind({})

PrimaryExample.storyName = 'Contact ';

PrimaryExample.args = {

}
