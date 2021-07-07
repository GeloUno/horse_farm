import { Story, Meta } from '@storybook/react';
import Gallery from './Images';
import { DevImagesData } from '../../DevUtility/imagesGalery';


export default {
  title: 'Gallery/Images',
  component: Gallery

} as Meta;

const emptyVoid = () => { }

const PrimaryProfile: Story = (args) => (

  <Gallery
    galleryImageModalToggle={emptyVoid}
    setDataGalleryImageModal={emptyVoid}
    isGalleryImageModalShow={false}
    isAuth={args.isAuth}
    userID={args.userID}
    isPagination={args.isPagination}
    imagesGallery={DevImagesData}
    setisScrollToAddComment={emptyVoid}
  />

)
export const Primary = PrimaryProfile.bind({})
Primary.args = {
  isAuth: false,
  userID: 1
}

Primary.storyName = 'Galery Images';
