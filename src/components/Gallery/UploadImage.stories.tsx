import { Story, Meta } from '@storybook/react';
import UploadImage from './UploadImage';




export default {
  title: 'Gallery/UploadImage',
  component: UploadImage

} as Meta;


const PrimaryProfile: Story = (args) => (

  <UploadImage />

)
export const Login = PrimaryProfile.bind({})
Login.args = {
}

Login.storyName = 'Upload image';
