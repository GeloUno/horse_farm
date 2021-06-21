import { Story, Meta } from '@storybook/react';
import Pagination from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,

} as Meta;

const PrimaryProfile: Story = (args) => (
  <Pagination lengthPages={args.lengthPages} numberPage={args.numberPage} />
)
export const Example = PrimaryProfile.bind({})
Example.args = {
  numberPage: 1,
  lengthPages: 3
}

PrimaryProfile.storyName = 'Pagination';

