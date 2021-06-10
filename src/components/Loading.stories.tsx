import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Loading } from './Loading';


export default {
    title: 'Components/Loading',
    component: Loading,

} as Meta;

export const PrimaryLoading: Story = () => <Loading />

PrimaryLoading.storyName = 'Loading spinner';
