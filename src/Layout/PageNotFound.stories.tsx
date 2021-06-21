import { Story, Meta } from '@storybook/react';
import PageNoFound from './PageNotFound';

export default {
  title: 'Components/PageNoFound',
  component: PageNoFound,

} as Meta;

const PrimaryProfile: Story = (args) => (
  <PageNoFound />
)
export const Example = PrimaryProfile.bind({})
Example.args = {

}

PrimaryProfile.storyName = 'PageNoFound';

