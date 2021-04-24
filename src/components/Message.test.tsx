import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { IconButtonConfirm, Message, TypeMessage } from './Message'
import { Alert, AlertTitle } from '@material-ui/lab'
import { Box, Button, Theme } from '@material-ui/core';


Enzyme.configure({ adapter: new Adapter() });


const children = <div> test some text alert </div>
const childrenSecond = <div> test some text alert Second </div>

describe('Message component not cancel action and not confirm action', () => {
    const messageNoActionProps = <Message
        title={'test warning'}
        children={children}
        typeMessage={TypeMessage.ERROR}
        textButtonConfirm={'OK'} />

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
    test('should title warning text test warning ', () => {
        expect(wrapper.contains(<AlertTitle>test warning</AlertTitle>)).toBe(true)
    });
    test('should have children component ', () => {
        expect(wrapper.contains(<Box flexGrow={1}>
            {children}
        </Box>)).toBe(true)
    });

    test('should have type of message ', () => {
        const alert = wrapper.find(Alert);
        expect(alert.props().severity).toEqual(TypeMessage.ERROR)
    });
    test('should have type error of message ', () => {
        const alert = wrapper.find(Alert);
        expect(alert.props().severity).toEqual(TypeMessage.ERROR)
    });
    test(`should don't have info type of message `, () => {
        const alert = wrapper.find(Alert);
        expect(alert.props().severity).not.toEqual(TypeMessage.INFO)
    });
    test(`should don't have success type of message `, () => {
        const alert = wrapper.find(Alert);
        expect(alert.props().severity).not.toEqual(TypeMessage.SUCCESS)
    });
    test(`should don't have warining type of message `, () => {
        const alert = wrapper.find(Alert);
        expect(alert.props().severity).not.toEqual(TypeMessage.WARNING)
    });
    test(`should don't have props cancel action function`, () => {
        expect(wrapper.props().cancelAction).toBeUndefined()
    });
    test(`should don't have props confirm action function`, () => {
        expect(wrapper.props().confirmAction).toBeUndefined()
    });
    test(`should don't have props text button`, () => {
        expect(wrapper.props().textButtonConfirm).toBeUndefined()
    });
    test(`should don't have props enum icon`, () => {
        expect(wrapper.props().iconButtonConfirm).toBeUndefined()
    });

});


describe('Message component with cancel action and confirm action', () => {

    const mockCallButtonFunctionOne = jest.fn();
    const mockCallButtonFunctionTwo = jest.fn();
    const messageWithOneActionProprsTypeInfo = <Message
        title={'test warning info second'}
        children={childrenSecond}
        typeMessage={TypeMessage.INFO}
        textButtonConfirm={'OK'}
        confirmAction={() => { mockCallButtonFunctionOne() }}
        iconButtonConfirm={IconButtonConfirm.NO_ICON}
    />

    const wrapperThird = shallow(messageWithOneActionProprsTypeInfo);


    test('should render one alert ', () => {
        expect(wrapperThird.find(Alert)).toHaveLength(1)
    });
    test('should render one alert title', () => {
        expect(wrapperThird.find(AlertTitle)).toHaveLength(1)
    });
    test('should render one Buttons', () => {
        expect(wrapperThird.find(Button)).toHaveLength(1)
    });
    test('should not have zero Button', () => {

        expect(wrapperThird.find(Button)).not.toHaveLength(0)
    });
    test('should not have two Buttons', () => {
        expect(wrapperThird.find(Button)).not.toHaveLength(2)
    });
    test('should have four Box', () => {
        expect(wrapperThird.find(Box)).toHaveLength(4)
    });
    test('should have four Box', () => {
        expect(wrapperThird.find(Box)).not.toHaveLength(3)
    });
    test('should have four Box', () => {
        expect(wrapperThird.find(Box)).not.toHaveLength(5)
    });
    test('should have four Box', () => {
        expect(wrapperThird.find(Box)).not.toBeUndefined()
    });
    test('should titletest warning info second ', () => {
        expect(wrapperThird.contains(<AlertTitle>test warning info second</AlertTitle>)).toBe(true)
    });
    test('should have second children component ', () => {
        expect(wrapperThird.contains(<Box flexGrow={1}>
            {childrenSecond}
        </Box>)).toBe(true)
    });


    test('should have type info of message ', () => {
        const alert = wrapperThird.find(Alert);
        expect(alert.props().severity).toEqual(TypeMessage.INFO)
    });
    test(`should don't have error type of message `, () => {
        const alert = wrapperThird.find(Alert);
        expect(alert.props().severity).not.toEqual(TypeMessage.ERROR)
    });
    test(`should don't have success type of message `, () => {
        const alert = wrapperThird.find(Alert);
        expect(alert.props().severity).not.toEqual(TypeMessage.SUCCESS)
    });
    test(`should don't have warining type of message `, () => {
        const alert = wrapperThird.find(Alert);
        expect(alert.props().severity).not.toEqual(TypeMessage.WARNING)
    });
    test(`should don't have props cancel action function`, () => {
        expect(wrapperThird.props().cancelAction).toBeUndefined()
    });


    test(`should have button confirm action `, () => {
        const result = wrapperThird.find(Button).hasClass('confirmButtonActionMessage');
        expect(result).toEqual(true)
    });
    test(`should don't have button cancle action `, () => {
        const result = wrapperThird.find(Button).hasClass('cancleButtonActionMessage')
        expect(result).toEqual(false)
    });
    test(`should don't have props text button`, () => {
        expect(wrapperThird.props().textButtonConfirm).toBeUndefined()
    });
    test(`should don't have props enum icon`, () => {
        expect(wrapperThird.props().iconButtonConfirm).toBeUndefined()
    });

    test(`should button have text OK `, () => {
        const result = wrapperThird.find(Button)
        expect(result.text()).toEqual('OK')
    });

    test(`should button have variant props contained `, () => {
        const result = wrapperThird.find(Button)
        expect(result.props().variant).toEqual('contained')
    });

    test(`should button have class Name material ui makeStyles-button-1 and own confirmButtonActionMessage `, () => {
        const result = wrapperThird.find(Button)
        expect(result.props().className).toEqual('makeStyles-button-1 confirmButtonActionMessage')
    });

    test(`should element of class name confirmButtonActionMessage be a button not Box`, () => {
        const result = wrapperThird.find('.confirmButtonActionMessage')
        expect(result.type()).toEqual(Button)
        expect(result.type()).not.toEqual(Box)
        expect(result.name()).toEqual("WithStyles(ForwardRef(Button))")
    });

    test('should event button click call mocka fn one ', () => {
        const result = wrapperThird.find('.confirmButtonActionMessage');
        result.simulate('click')
        expect(mockCallButtonFunctionOne.mock.calls.length).toEqual(1)
        expect(mockCallButtonFunctionOne).toHaveBeenCalled()
        expect(mockCallButtonFunctionTwo).not.toHaveBeenCalled()
    });


});

describe('Message component with cancel action and confirm action', () => {

    const mockCallButtonFunctionCancel = jest.fn();
    const mockCallButtonFunctionConfirm = jest.fn();
    const childrenThird = <div>third child text body</div>
    const messageWithBothActionPropTypeWarning = <Message
        title={'test warning info third'}
        children={childrenThird}
        typeMessage={TypeMessage.WARNING}
        textButtonConfirm={'REMOVE'}
        cancelAction={() => { mockCallButtonFunctionCancel() }}
        confirmAction={() => { mockCallButtonFunctionConfirm() }}
        iconButtonConfirm={IconButtonConfirm.NO_ICON}
    />

    const wrapperThird = shallow(messageWithBothActionPropTypeWarning);


    test('should render one alert ', () => {
        expect(wrapperThird.find(Alert)).toHaveLength(1)
    });
    test('should render one alert title', () => {
        expect(wrapperThird.find(AlertTitle)).toHaveLength(1)
    });
    test('should render two Buttons', () => {
        expect(wrapperThird.find(Button)).toHaveLength(2)
    });
    test('should not have zero Button', () => {

        expect(wrapperThird.find(Button)).not.toHaveLength(0)
    });
    test('should not have one Buttons', () => {
        expect(wrapperThird.find(Button)).not.toHaveLength(1)
    });
    test('should have four Box', () => {
        expect(wrapperThird.find(Box)).toHaveLength(4)
    });
    test(`should don't have three Bo`, () => {
        expect(wrapperThird.find(Box)).not.toHaveLength(3)
    });
    test(`should don't have five Box`, () => {
        expect(wrapperThird.find(Box)).not.toHaveLength(5)
    });
    test(`should don't have zero Box`, () => {
        expect(wrapperThird.find(Box)).not.toBeUndefined()
    });
    test('should titletest warning info second ', () => {
        expect(wrapperThird.contains(<AlertTitle>test warning info third</AlertTitle>)).toBe(true)
    });
    test('should have second children component ', () => {
        expect(wrapperThird.contains(<Box flexGrow={1}>
            {childrenThird}
        </Box>)).toBe(true)
    });


    test('should have type info of message ', () => {
        const alert = wrapperThird.find(Alert);
        expect(alert.props().severity).toEqual(TypeMessage.WARNING)
    });
    test(`should don't have error type of message `, () => {
        const alert = wrapperThird.find(Alert);
        expect(alert.props().severity).not.toEqual(TypeMessage.ERROR)
    });
    test(`should don't have success type of message `, () => {
        const alert = wrapperThird.find(Alert);
        expect(alert.props().severity).not.toEqual(TypeMessage.SUCCESS)
    });
    test(`should don't have warining type of message `, () => {
        const alert = wrapperThird.find(Alert);
        expect(alert.props().severity).not.toEqual(TypeMessage.INFO)
    });
    test(`should don't have props cancel action function`, () => {
        expect(wrapperThird.props().cancelAction).toBeUndefined()
    });

    test(`should have some button confirm action `, () => {
        const result = wrapperThird.find(Button).some('.confirmButtonActionMessage');
        expect(result).toEqual(true)
    });
    test(`should some have button cancle action `, () => {
        const result = wrapperThird.find(Button).some('.cancleButtonActionMessage')
        expect(result).toEqual(true)
    });
    test(`should have one button confirm action `, () => {
        const result = wrapperThird.find(Button).filter('.confirmButtonActionMessage');
        expect(result).toHaveLength(1)
    });
    test(`should have one button cancle action `, () => {
        const result = wrapperThird.find(Button).filter('.cancleButtonActionMessage')
        expect(result).toHaveLength(1)
    });
    test(`should don't have props text button`, () => {
        expect(wrapperThird.props().textButtonConfirm).toBeUndefined()
    });
    test(`should don't have props enum icon`, () => {
        expect(wrapperThird.props().iconButtonConfirm).toBeUndefined()
    });

    test(`should button action have text REMOVE `, () => {
        const result = wrapperThird.find(Button).filter('.confirmButtonActionMessage')
        expect(result.text()).toEqual('REMOVE')
    });
    test(`should button cancel have text Wstecz `, () => {
        const result = wrapperThird.find(Button).filter('.cancleButtonActionMessage')
        expect(result.text()).toEqual('Wstecz')
    });

    test(`should buttons have variant props contained `, () => {
        const result = wrapperThird.find(Button)
        result.forEach(element => {
            expect(element.props().variant).toEqual('contained')
        });
    });

    test(`should buttons have class Name cancleButtonActionMessage or confirmButtonActionMessage `, () => {
        const result = wrapperThird.find(Button)
        expect(result.some(`.confirmButtonActionMessage`)).toEqual(true)
        expect(result.some(`.cancleButtonActionMessage`)).toEqual(true)
    });

    test(`should element of class name confirmButtonActionMessage be a button not Box`, () => {
        const result = wrapperThird.find('.confirmButtonActionMessage')
        expect(result.type()).toEqual(Button)
        expect(result.type()).not.toEqual(Box)
        expect(result.name()).toEqual("WithStyles(ForwardRef(Button))")
    });

    test(`should element of class name cancleButtonActionMessage be a button not Box`, () => {
        const result = wrapperThird.find('.cancleButtonActionMessage')
        expect(result.type()).toEqual(Button)
        expect(result.type()).not.toEqual(Box)
        expect(result.name()).toEqual("WithStyles(ForwardRef(Button))")
    });
    test('should event button cancel click call function cancel ', () => {
        const result = wrapperThird.find('.cancleButtonActionMessage');
        result.simulate('click')
        expect(mockCallButtonFunctionCancel).toHaveBeenCalled()
        expect(mockCallButtonFunctionConfirm).not.toHaveBeenCalled()
    });

    test('should event button confirm click call function confirm', () => {
        const result = wrapperThird.find('.confirmButtonActionMessage');
        result.simulate('click')
        expect(mockCallButtonFunctionConfirm).toHaveBeenCalled()
        expect(mockCallButtonFunctionCancel).not.toHaveBeenCalled()
    });


});