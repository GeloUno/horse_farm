import { Story, Meta } from '@storybook/react';
import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,

} as Meta;

const Primary: Story = (args) => (

  <Header />

)
export const PrimaryExample = Primary.bind({})

PrimaryExample.storyName = 'Header ';

PrimaryExample.args = {

}
