import { Story, Meta } from '@storybook/react';
import TitleSection from './TitleSection';

export default {
  title: 'Components/TitileSection',
  component: TitleSection,

} as Meta;

const PrimaryProfile: Story = (args) => (
  <TitleSection title={args.title} addClassPage={args.addClassPage} />
)
export const Example = PrimaryProfile.bind({})
Example.args = {
  title: 'Horse Farm',
  addClassPage: 'TitleSection'
}

PrimaryProfile.storyName = 'Full user';

