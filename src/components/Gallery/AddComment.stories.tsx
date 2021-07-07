
import { Story, Meta } from '@storybook/react';
import AddComment from './AddComment';

export default {
  title: 'Gallery/AddComment',
  component: AddComment

} as Meta;

const inputField: any = () => { }


const PrimaryProfile: Story = (args) => (

  <AddComment
    imageID={1}
    userID={1}
    inputAddCommentRef={inputField}
  />

)
export const Primary = PrimaryProfile.bind({})
Primary.args = {

}

Primary.storyName = 'Add comment to image';
