
import { Story, Meta } from '@storybook/react';
import EditProfileFormik from './EditProfileFormik';
import { IUserEditProfile } from '../../models/users';


export default {
  title: 'Form/EditProfileFormik',
  component: EditProfileFormik

} as Meta;



const user: IUserEditProfile = {
  email: `example@com.uk`,
  providerId: `1234567890`,
  uid: `098765`,

}

const PrimaryProfile: Story = (args) => (

  <EditProfileFormik user={user} handleSubmit={() => { }} />

)
export const Primary = PrimaryProfile.bind({})
Primary.args = {

}
Primary.parameters = {

}

Primary.storyName = 'Edit profile form';
