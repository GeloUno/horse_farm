import { Story, Meta } from '@storybook/react';
import OpinionUser from './OpinionUser';

export default {
  title: 'Components/OpinionUser',
  component: OpinionUser,

} as Meta;

const Primary: Story = (args) => (
  <OpinionUser
    description={args.description}
    nick={args.nick}
    sourceImage={args.sourceImage}
  />
)
export const PrimaryExample = Primary.bind({})

PrimaryExample.storyName = 'Opinion User';

PrimaryExample.args = {
  description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, minus? Ratione aperiam ea necessitatibus libero iusto neque, soluta totam voluptate! Laborum debitis eligendi ullam nulla!`,
  nick: `john`,
  sourceImage: `https://pbs.twimg.com/profile_images/1257280933557710850/95taFO3E_400x400.jpg`
}


const Second: Story = (args) => (
  <OpinionUser
    description={args.description}
    nick={args.nick}
    sourceImage={args.sourceImage}
  />
)

export const SecondaryExample = Second.bind({})

SecondaryExample.storyName = 'Image profile loading ';

SecondaryExample.args = {
  description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, minus? Ratione aperiam ea necessitatibus libero iusto neque, soluta totam voluptate! Laborum debitis eligendi ullam nulla!`,
  nick: `john`,
  sourceImage: ``
}


