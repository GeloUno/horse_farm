import { Story, Meta } from '@storybook/react';

import { DevImagesData } from '../../DevUtility/imagesGalery';
import GalleryFullScreenImage from './ImageModal';




export default {
  title: 'Gallery/ImagesModal',
  component: GalleryFullScreenImage

} as Meta;

const emptyVoid = () => { }

const PrimaryProfile: Story = (args) => (

  <GalleryFullScreenImage
    dataGalleryImageModal={DevImagesData[args.numberOfImage]}
    galleryImageModalToggle={emptyVoid}
    isGalleryImageModalShow={true}
    userID={args.userID}
    isScrollToAddComment={args.isScrollToAddComment}
    setisScrollToAddComment={emptyVoid}
    setDataGalleryImageModal={emptyVoid}
  />

)
export const Primary = PrimaryProfile.bind({})
Primary.args = {
  numberOfImage: 0,
  isScrollToAddComment: false,
  userID: 1
}

Primary.storyName = 'Galery Modal Image';
