import { Story, Meta } from '@storybook/react';
import { DevImagesData } from '../../DevUtility/imagesGalery';
import LikesAndComments from './LikesAndComments';

export default {
  title: 'Gallery/LikesAndComments',
  component: LikesAndComments

} as Meta;

const emptyVoid = () => { }

const PrimaryProfile: Story = (args) => (

  <LikesAndComments
    imageGallery={DevImagesData[args.numberOfImage]}
    userID={args.userID}
    isGalleryImageModalShow={true}
    galleryImageModalToggle={emptyVoid}
    setisScrollToAddComment={emptyVoid}
    setDataGalleryImageModal={emptyVoid}
  />

)
export const Primary = PrimaryProfile.bind({})
Primary.args = {
  numberOfImage: 0,
  userID: 1
}

Primary.storyName = 'Likes And Comments';
