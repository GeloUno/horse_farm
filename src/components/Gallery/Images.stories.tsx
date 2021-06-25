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
export const Login = PrimaryProfile.bind({})
Login.args = {
  isAuth: false,
  userID: 1
}

Login.storyName = 'Galery Images';
