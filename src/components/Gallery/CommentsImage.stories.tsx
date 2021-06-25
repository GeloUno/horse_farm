import { Story, Meta } from '@storybook/react';
import { DevImagesData } from '../../DevUtility/imagesGalery';
import CommentsImage from './CommentsImage';


export default {
  title: 'Gallery/CommentsImage',
  component: CommentsImage

} as Meta;

const PrimaryProfile: Story = (args) => (

  <CommentsImage
    dataGalleryImageModal={DevImagesData[args.numberOfImage]}
    userID={args.userID}
  />

)
export const Login = PrimaryProfile.bind({})
Login.args = {
  numberOfImage: 0,
  userID: 1
}

Login.storyName = 'Comments';
