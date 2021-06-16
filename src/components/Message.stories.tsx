import React from 'react'
import { Story, Meta } from '@storybook/react';
import { Message, TypeMessage, IMessageProps, IconButtonConfirm } from '../components/Message';

export default {
    title: "Components/Message",
    component: Message,
    argTypes: {
        onclick: { action: `Clicked` },
    }
} as Meta
const bodyMessage = "some text information"

const emptyFunctionFirst = () => {
}
const emptyFunctionSecond = () => {
}

const Template: Story<IMessageProps> = (args) => <Message {...args} />

export const InfoNoConfirmAction = Template.bind({})

InfoNoConfirmAction.args = {
    title: "Information",
    children: bodyMessage,
    typeMessage: TypeMessage.INFO
}
InfoNoConfirmAction.storyName = 'Message no Action confirm'


export const InfoWithConfirmAction = Template.bind({})

InfoWithConfirmAction.args = {
    title: "Information",
    children: bodyMessage,
    typeMessage: TypeMessage.SUCCESS,
    confirmAction: emptyFunctionFirst,
    textButtonConfirm: 'ok'
}
InfoWithConfirmAction.storyName = 'Message with Action confirm'

export const InfoWithConfirmActionAndCancelAction = Template.bind({})

InfoWithConfirmActionAndCancelAction.args = {
    title: "Information",
    children: bodyMessage,
    typeMessage: TypeMessage.ERROR,
    confirmAction: emptyFunctionFirst,
    textButtonConfirm: 'usuń',
    cancelAction: emptyFunctionSecond,
    iconButtonConfirm: IconButtonConfirm.DELETE_ICON,
}
InfoWithConfirmActionAndCancelAction.storyName = 'Message with Action confirm and cancel Action'