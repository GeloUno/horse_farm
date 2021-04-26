import React from 'react'

import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { Box } from '@material-ui/core';
// import { IconButtonConfirm, Message, TypeMessage } from '../Message';
import CircularProgress from '@material-ui/core/CircularProgress';

import { ActionMessage } from './ConfirmDeleteUser';
import ConfirmDeleteUserDetail from './ConfirmDeleteUserDetail';
import { IUserBaseMongoBD } from '../../models/userInterfaces';
import { IconButtonConfirm, Message, TypeMessage } from '../Message';

Enzyme.configure({ adapter: new Adapter() });

test('test enzyme', () => {
    expect(1).toBe(1)
    expect(2).not.toBe(1)
});

const cancelAction = jest.fn();
const confirmAction = jest.fn();
const goHomePage = jest.fn();
const logOutUser = jest.fn();

const user: IUserBaseMongoBD = {
    id: '1234567890',
    email: 'example@google.com',
    emailVerified: true,
    isNewUser: false,
    providerId: 'google.com',
    uid: '1a2s3d4f5g6h7j8k9l0',
}

describe('Confirm Delete User Detail actionMessage prop is message', () => {
    const actionMessage = ActionMessage.MESSAGE;

    const confirmDeleteUserDetail = <ConfirmDeleteUserDetail
        cancelAction={cancelAction}
        confirmAction={confirmAction}
        goToHomePage={goHomePage}
        logoutUser={logOutUser}
        user={user}
        actionMessage={actionMessage}
    />

    const wrapper = shallow(confirmDeleteUserDetail);
    const resutlMessage = wrapper.find(Message);

    test('should return true if pass current cancle method to message props', () => {
        const result = resutlMessage.prop('cancelAction')
        expect(result).toEqual(cancelAction)
    });

    test('should not have go home metohod in cancel action props', () => {
        const result = resutlMessage.prop('cancelAction')
        expect(result).not.toEqual(goHomePage)
    });

    test('should not have logout user metohod in cancel action props', () => {
        const result = resutlMessage.prop('cancelAction')
        expect(result).not.toEqual(logOutUser)
    });

    test('should return true if pass current confirm method to message props', () => {
        const result = resutlMessage.prop('confirmAction')
        expect(result).toEqual(confirmAction)
    });

    test('should not have go home metohod in confirm action props', () => {
        const result = resutlMessage.prop('confirmAction')
        expect(result).not.toEqual(goHomePage)
    });

    test('should type message be error if action message is message', () => {
        const result = resutlMessage.prop('typeMessage')
        expect(result).toEqual(TypeMessage.ERROR)
    });

    test('should not be type message info if action message is message', () => {
        const result = resutlMessage.prop('typeMessage')
        expect(result).not.toEqual(TypeMessage.INFO)
    });

    test('should not be type message success if action message is message', () => {
        const result = resutlMessage.prop('typeMessage')
        expect(result).not.toEqual(TypeMessage.SUCCESS)
    });

    test('should not be type message warning if action message is message', () => {
        const result = resutlMessage.prop('typeMessage')
        expect(result).not.toEqual(TypeMessage.WARNING)
    });

    test('should props textButtonConfirm of message have text Usuń konto', () => {
        const result = resutlMessage.prop('textButtonConfirm')
        expect(result).toEqual('Usuń konto')
    });
    test('should props iconButtonConfirm of message have icon delete', () => {
        const result = resutlMessage.prop('iconButtonConfirm')
        expect(result).toEqual(IconButtonConfirm.DELETE_ICON)
    });

    test(`should have text with user email`, () => {
        const result = wrapper.find(Box).text()
        const expected = `Usunięcie konta ${user.email} skutkuje trwałym i nie odwracalnym wykasowniem użutkownika oraz wszelkich danych z jego kontem związanych, bez możliwości ich późniejszego odzyskania. Jeśli nie chesz usunąć konta wciśnij wstecz.`
        expect(result).toEqual(expected)
    });
});

describe('Confirm Delete User Detail actionMessage prop is loading', () => {
    const actionMessage = ActionMessage.LOADING;

    const confirmDeleteUserDetail = <ConfirmDeleteUserDetail
        cancelAction={cancelAction}
        confirmAction={confirmAction}
        goToHomePage={goHomePage}
        logoutUser={logOutUser}
        user={user}
        actionMessage={actionMessage}
    />

    const wrapper = shallow(confirmDeleteUserDetail);

    test('should have Box componet if action message is loading', () => {
        const result = wrapper.find(Box);
        expect(result).toHaveLength(1)
    });
    test('should have circularProgress componet if action message is loading', () => {
        const result = wrapper.find(CircularProgress);
        expect(result).toHaveLength(1)
    });
});


describe('Confirm Delete User Detail actionMessage is error', () => {
    const actionMessage = ActionMessage.ERROR;

    const confirmDeleteUserDetail = <ConfirmDeleteUserDetail
        cancelAction={cancelAction}
        confirmAction={confirmAction}
        goToHomePage={goHomePage}
        logoutUser={logOutUser}
        user={user}
        actionMessage={actionMessage}
    />

    const wrapper = shallow(confirmDeleteUserDetail);

    test('should type messaga be error', () => {
        const result = wrapper.find(Message);
        expect(result.prop('typeMessage')).toEqual(TypeMessage.ERROR)
    });
    test('should text button confirm be OK', () => {
        const result = wrapper.find(Message);
        expect(result.prop('textButtonConfirm')).toEqual("OK")
    });
    test('should button don`t have icon', () => {
        const result = wrapper.find(Message);
        expect(result.prop('iconButtonConfirm')).toEqual(IconButtonConfirm.NO_ICON)
    });
    test('should have goToHomePage in confirmAction prop', () => {
        const result = wrapper.find(Message).prop('confirmAction');
        expect(result).toBe(goHomePage)
    });
    test(`should have text with user email`, () => {
        const result = wrapper.find(Box).text()
        const expected = `Coś poszło nie tak konto ${user.email} nie zostało usunięte zapraszam później :-(`
        expect(result).toEqual(expected)
    });

});

describe('Confirm Delete User Detail actionMessage is success', () => {
    const actionMessage = ActionMessage.SUCCESS;

    const confirmDeleteUserDetail = <ConfirmDeleteUserDetail
        cancelAction={cancelAction}
        confirmAction={confirmAction}
        goToHomePage={goHomePage}
        logoutUser={logOutUser}
        user={user}
        actionMessage={actionMessage}
    />

    const wrapper = shallow(confirmDeleteUserDetail);

    test('should type messaga be success', () => {
        const result = wrapper.find(Message);
        expect(result.prop('typeMessage')).toEqual(TypeMessage.SUCCESS)
    });
    test('should text button confirm be OK', () => {
        const result = wrapper.find(Message);
        expect(result.prop('textButtonConfirm')).toEqual("OK")
    });
    test('should button don`t have icon', () => {
        const result = wrapper.find(Message);
        expect(result.prop('iconButtonConfirm')).toEqual(IconButtonConfirm.NO_ICON)
    });
    test('should have logout method in confirmAction prop', () => {
        const result = wrapper.find(Message).prop('confirmAction');
        expect(result).toEqual(logOutUser)
    });
    test(`should have text with user email`, () => {
        const result = wrapper.find(Box).text()
        const expected = `Konto ${user.email} zostało usunięte :-(`
        expect(result).toEqual(expected)
    });

});