import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { Message, TypeMessage } from '../Message';
import { Box } from '@material-ui/core';
import { NoUserData } from './NoUserData';

Enzyme.configure({ adapter: new Adapter() });


describe('Message component not cancel action and not confirm action', () => {
    const confirmAction = jest.fn();
    const logoutAfterTime = jest.fn()

    const noUserData = <NoUserData
        confirmAction={confirmAction}
        logoutAfterTime={logoutAfterTime}
    >
    </NoUserData>

    const wrapper = shallow(noUserData)


    test('should have one Message component', () => {
        const result = wrapper.find(Message)
        expect(result).toHaveLength(1)
    });
    test('should have one children component', () => {
        const result = wrapper.find(Box)
        expect(result).toHaveLength(1)
    });
    test('should have message with error type', () => {
        const result = wrapper.children().prop('typeMessage')
        expect(result).toEqual(TypeMessage.ERROR)
    });
    test('should title message have text', () => {
        const result = wrapper.children().prop('title')
        expect(result).toEqual('Brak danych użytkownika')
    });
    test('should have text button OK', () => {
        const result = wrapper.children().prop('textButtonConfirm')
        expect(result).toEqual('OK')
    });
    test('should have confirm function', () => {
        const result = wrapper.children().prop('confirmAction')
        expect(result).toEqual(confirmAction)
    });
    test('should children component Box have text', () => {
        const result = wrapper.find(Box).text()
        expect(result).toEqual('Ups coś poszło nie tak zapraszamy później...')
    });
})