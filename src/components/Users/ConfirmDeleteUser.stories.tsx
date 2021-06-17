import { Story, Meta } from '@storybook/react';
import { IUserInitialState } from '../../redux/reducers/userReducer';
import { IUser } from '../../models/users';
import { combineReducers, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import userReducer from '../../redux/reducers/userReducer';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import { theme } from '../../utility/materialui';

import ConfirmDeleteUser from './ConfirmDeleteUser';

const userExample: Partial<IUser> = {
    email: `example@goo.com`,
    emailVerified: true,
    providerId: `google.com`,
    uid: `123456789qazwsx`,
    id: '1111111111111',
    firstName: `john`,
    lastName: `doe`,
    phone: `123123123`,
    nick: `jd`,
    photoId: `https://pbs.twimg.com/profile_images/1257280933557710850/95taFO3E_400x400.jpg`
}

const initialUserExample: IUserInitialState = {
    user: userExample,
    isLoading: false,
    isError: false,
    errorMessage: null,
    idToken: `null`
}

const reducerUser = combineReducers({ userAction: userReducer });

const state = {
    userAction: initialUserExample
}

const store = createStore(reducerUser, state)

const customHistory = createBrowserHistory();


export default {
    title: 'Components/ConfirmDeleteUser',
    component: ConfirmDeleteUser,

} as Meta;

const PrimaryProfile: Story = (args) => (
    <Provider store={store} >
        <ThemeProvider theme={theme}>
            <Router history={customHistory}>
                <ConfirmDeleteUser />
            </Router>
        </ThemeProvider>
    </Provider>
)
export const ConfirmDelelUser = PrimaryProfile.bind({})
ConfirmDelelUser.args = {
}

PrimaryProfile.storyName = 'Full user';


const emptyUserExample: Partial<IUser> = {
    // email: `example@goo.com`,
    // emailVerified: false,
    // providerId: `google.com`,
    // uid: `123456789qazwsx`,
    // id: '1111111111111',
    // firstName: `john`,
    // lastName: `doe`,
    // phone: `123123123`,
    // nick: `jd`,
    // photoId: `https://pbs.twimg.com/profile_images/1257280933557710850/95taFO3E_400x400.jpg`
}

const initialEmptyUserExample: IUserInitialState = {
    user: emptyUserExample,
    isLoading: false,
    isError: false,
    errorMessage: null,
    idToken: `null`
}

const reducerUserNoUser = combineReducers({ userAction: userReducer });

const stateNoUser = {
    userAction: initialEmptyUserExample
}

const storeNoUser = createStore(reducerUserNoUser, stateNoUser)



export const SecondProfile: Story = () => (
    <Provider store={storeNoUser}>
        <ThemeProvider theme={theme}>
            <Router history={customHistory}>
                <ConfirmDeleteUser />
            </Router>
        </ThemeProvider>
    </Provider>
)

SecondProfile.storyName = 'no user';

