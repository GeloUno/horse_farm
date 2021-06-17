import React from 'react';
import EditProfile from '../components/Users/EditProfile';
import TitleSection from '../Layout/TitleSection';

const EditProfileScreen = () => {
    return (
        <>
            <TitleSection
                title="Edycja profilu" />
            <EditProfile />
        </>
    );
};
export default EditProfileScreen