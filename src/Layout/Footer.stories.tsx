import { Story, Meta } from '@storybook/react';
import Footer from './Footer';
import '../App.css'


export default {
  title: 'Components/Footer',
  component: Footer,

} as Meta;

const Primary: Story = (args) => (

  <Footer />

)
export const PrimaryExample = Primary.bind({})

PrimaryExample.storyName = 'Footer ';

PrimaryExample.args = {

}
