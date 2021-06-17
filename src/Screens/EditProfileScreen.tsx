import React from 'react';
import EditProfile from '../components/Users/EditProfile';
import TitleSection from '../Layout/TitleSection';
import { userSignOutAction } from './../redux/actions/userActions';
import { userRemoveCookieTokenAction } from '../redux/actions/userActions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const EditProfileScreen = () => {

    const dispatch = useDispatch()
    const history = useHistory();

    const logoutAfterTime = (time: number) => {
        setTimeout(() => {
            logoutUserHandle();
        }, time);
    }

    const logoutUserHandle = () => {
        dispatch(userSignOutAction);
        dispatch(userRemoveCookieTokenAction);
        history.push('/')
    }

    return (
        <>
            <TitleSection
                title="Edycja profilu" />
            <EditProfile logoutAfterTime={logoutAfterTime} logoutUserHandle={logoutUserHandle} />
        </>
    );
};
export default EditProfileScreen