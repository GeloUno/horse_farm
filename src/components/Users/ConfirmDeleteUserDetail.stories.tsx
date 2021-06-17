import React from 'react'
import { Story, Meta } from '@storybook/react';
import { ActionMessage } from './ConfirmDeleteUser';
import ConfirmDeleteUserDetail from './ConfirmDeleteUserDetail';
import { IUserBaseMongoBD } from '../../models/users';


// const cancelActionMock = jest.fn();
// const confirmActionMock = jest.fn();
// const goHomePageMock = jest.fn();
// const logOutUserMock = jest.fn();

const userExample: IUserBaseMongoBD = {
    id: '1234567890',
    email: 'example@google.com',
    emailVerified: true,
    isNewUser: false,
    providerId: 'google.com',
    uid: '1a2s3d4f5g6h7j8k9l0',
}

const actionMessage = ActionMessage.MESSAGE;


export default {
    title: 'Components/ConfirmDeleteUserDetail',
    component: ConfirmDeleteUserDetail,
} as Meta

const emptyVoid = () => { }

export const Primary: Story = () => (
    <ConfirmDeleteUserDetail
        cancelAction={emptyVoid}
        confirmAction={emptyVoid}
        goToHomePage={emptyVoid}
        logoutUser={emptyVoid}
        user={userExample}
        actionMessage={actionMessage}
    />
)

Primary.storyName = `Confirm delete user detail`