import React from 'react';
import { Story, Meta } from '@storybook/react';
import { NoUserData } from './NoUserData';

export default {
    title: 'Components/NoUserData',
    component: NoUserData,

} as Meta;

const emptyVoidExample = () => { }

export const PrimaryProfile: Story = () =>
    <NoUserData confirmAction={emptyVoidExample} logoutAfterTime={emptyVoidExample} />

PrimaryProfile.storyName = 'No User Data';