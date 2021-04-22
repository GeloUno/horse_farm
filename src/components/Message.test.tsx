import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { IconButtonConfirm, Message, TypeMessage } from './Message'
import { Alert, AlertTitle } from '@material-ui/lab'
import { Box, Button, Theme } from '@material-ui/core';


Enzyme.configure({ adapter: new Adapter() });


const children = <div> test some text alert </div>

const messageNoActionProps = <Message
    title={'test warning'}
    children={children}
    typeMessage={TypeMessage.ERROR}
    textButtonConfirm={'OK'} />

const messageWithOneActionProprs = <Message
    title={'test warning'}
    children={children}
    typeMessage={TypeMessage.ERROR}
    textButtonConfirm={'OK'}
    confirmAction={() => { }}
    iconButtonConfirm={IconButtonConfirm.NO_ICON}
/>

describe('Message component not cancel action and not confirm action', () => {
    const wrapper = shallow(messageNoActionProps);

    test('should render one alert ', () => {
        expect(wrapper.find(Alert)).toHaveLength(1)
    });
    test('should render one alert title', () => {
        expect(wrapper.find(AlertTitle)).toHaveLength(1)
    });
    test('should not render Buttons', () => {
        expect(wrapper.find(Button)).toHaveLength(0)
    });
    test('should not have one Button', () => {

        expect(wrapper.find(Button)).not.toHaveLength(1)
    });
    test('should not have two Buttons', () => {
        expect(wrapper.find(Button)).not.toHaveLength(2)
    });
    test('should have four Box', () => {
        expect(wrapper.find(Box)).toHaveLength(4)
    });
    test('should have four Box', () => {
        expect(wrapper.find(Box)).not.toHaveLength(3)
    });
    test('should have four Box', () => {
        expect(wrapper.find(Box)).not.toHaveLength(5)
    });
    test('should have four Box', () => {
        expect(wrapper.find(Box)).not.toBeUndefined()
    });
});