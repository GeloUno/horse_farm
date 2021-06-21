import { Story, Meta } from '@storybook/react';
import Opinions from './Opinions';

export default {
  title: 'Components/Opinions',
  component: Opinions,

} as Meta;

const Primary: Story = (args) => (
  <Opinions />
)
export const PrimaryExample = Primary.bind({})

PrimaryExample.storyName = 'Opinions user';

PrimaryExample.args = {

}

